
function Path-For-Docker-Toolbox($PATH){
    $PATH=(($PATH -replace "\\","/") -replace ":","").Trim("/")

    [regex]$regex='^[a-zA-Z]/'
    $PATH=$regex.Replace($PATH, {$args[0].Value.ToLower()})

    $PATH="//$PATH"
    return $PATH
}
function Path-For-Docker($PATH){
    $PATH=(($PATH -replace "\\","/") -replace ":","").Trim("/")

    [regex]$regex='^[a-zA-Z]/'
    $PATH=$regex.Replace($PATH, {$args[0].Value.ToLower()})

    $PATH="/host_mnt/$PATH"
    return $PATH
}

$MOUNT_PATH=""
if($args[0] -Match "t"){
    $MOUNT_PATH = Path-For-Docker-Toolbox -Path ${pwd}
}else{
    $MOUNT_PATH = Path-For-Docker -Path ${pwd}
}

$MOUNT_PATH = Path-For-Docker -Path ${pwd}
$USER_PATH = Path-For-Docker -Path $env:USERPROFILE
#https://hub.docker.com/_/maven#reusing-the-maven-local-repository
$VOLUME_M2_PATH="${USER_PATH}/.m2:/root/.m2"
#https://hub.docker.com/_/maven#how-to-use-this-image
$VOLUME_PROJECT="${MOUNT_PATH}/dhbw_swe_server:/usr/src/mymaven"
$VOLUME_NODE="${MOUNT_PATH}/dhbw_swe_react:/home/node"
#https://stackoverflow.com/questions/36765138/bind-to-docker-socket-on-windows
$VOLUME_DOCKER="/var/run/docker.sock:/var/run/docker.sock"
$DOCKER_HOST="DOCKER_HOST=unix:///var/run/docker.sock"

Set-Variable DOCKER_HOST=$Env:DOCKER_HOST
Set-Variable DOCKER_MACHINE_NAME=$Env:DOCKER_MACHINE_NAME
Set-Variable DOCKER_TLS_VERIFY=$Env:DOCKER_TLS_VERIFY
Set-Variable DOCKER_TOOLBOX_INSTALL_PATH=${DOCKER_TOOLBOX_INSTALL_PATH}
Set-Variable DOCKER_CERT_PATH=$Env:DOCKER_CERT_PATH


if(($args[0] -Match "b") -Or ${docker images -q swe-server}){
    Write-Output "------------------------------------------------------------------------"
    Write-Output "BUILD java server"
    Write-Output "------------------------------------------------------------------------"
    docker run --rm -it `
        -v /var/run/docker.sock:/var/run/docker.sock `
        -v $VOLUME_M2_PATH `
        -v $VOLUME_PROJECT `
        -e DOCKER_HOST=unix:///var/run/docker.sock `
        -w /usr/src/mymaven `
        maven:alpine `
        mvn install dockerfile:build

    Write-Output "------------------------------------------------------------------------"
    Write-Output "BUILD react application"
    Write-Output "------------------------------------------------------------------------"
    # why --no-bin-links is required https://forums.docker.com/t/symlinks-on-shared-volumes-not-supported/9288/3
    docker run -it -e NODE_ENV=production -v $VOLUME_NODE node:alpine /bin/sh -c "cp -r /home/node /home/work && cd /home/work && npm install --no-bin-links && npm run build && cp -Lrf /home/work /home/node && cd .. && rm -rf /home/work && ls"
}


#remove existing container
if(($args[0] -Match "b") -Or ($args[0] -Match "r")){
  Write-Output "------------------------------------------------------------------------"
  Write-Output "REMOVE existing container"
  Write-Output "------------------------------------------------------------------------"

  docker rm -vf $(docker ps -a -q -f name=swe-server-container)
  docker rm -vf $(docker ps -a -q -f name=psql-container)
}
Write-Output "------------------------------------------------------------------------"
Write-Output "START server and database"
Write-Output "------------------------------------------------------------------------"
docker-compose up -d