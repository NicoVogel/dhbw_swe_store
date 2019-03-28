
function Path-For-Docker($PATH){
    $PATH=(($PATH -replace "\\","/") -replace ":","").Trim("/")

    [regex]$regex='^[a-zA-Z]/'
    $PATH=$regex.Replace($PATH, {$args[0].Value.ToLower()})

    #Win 10
    if ([Environment]::OSVersion.Version -ge (new-object 'Version' 10,0)) {
    $PATH="/host_mnt/$PATH"
    }
    elseif ([Environment]::OSVersion.Version -ge (new-object 'Version' 6,1)) {
    $PATH="//$PATH"
    }
    return $PATH
}


$MOUNT_PATH = Path-For-Docker -Path ${pwd}
$USER_PATH = Path-For-Docker -Path $env:USERPROFILE
#https://hub.docker.com/_/maven#reusing-the-maven-local-repository
$VOLUME_M2_PATH="${USER_PATH}/.m2:/root/.m2"
#https://hub.docker.com/_/maven#how-to-use-this-image
$VOLUME_PROJECT="${MOUNT_PATH}/dhbw_swe_server:/usr/src/mymaven"
$VOLUME_NODE="${MOUNT_PATH}/dhbw_swe_react:/home/node"

set DOCKER_HOST=$Env:DOCKER_HOST
set DOCKER_MACHINE_NAME=$Env:DOCKER_MACHINE_NAME
set DOCKER_TLS_VERIFY=$Env:DOCKER_TLS_VERIFY
set DOCKER_TOOLBOX_INSTALL_PATH=${DOCKER_TOOLBOX_INSTALL_PATH}
set DOCKER_CERT_PATH=$Env:DOCKER_CERT_PATH

echo "build java server"
docker run -it -v $VOLUME_M2_PATH -v $VOLUME_PROJECT -w /usr/src/mymaven maven:alpine mvn install -e dockerfile:build

echo "build react application"
echo "node code volume: ${VOLUME_NODE}"
# why --no-bin-links is required https://forums.docker.com/t/symlinks-on-shared-volumes-not-supported/9288/3
docker run -it -e NODE_ENV=production -v $VOLUME_NODE node:alpine /bin/sh -c "cp -r /home/node /home/work && cd /home/work && npm install --no-bin-links && npm run build && cp -Lrf /home/work /home/node && cd .. && rm -rf /home/work && ls"

echo "start server and database"
docker-compose up