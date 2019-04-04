#!/bin/sh

MOUNT_PATH=`pwd`
USER_HOME=`eval echo ~$USER`
#https://hub.docker.com/_/maven#reusing-the-maven-local-repository
VOLUME_M2_PATH="$USER_HOME/.m2:/root/.m2"
#https://hub.docker.com/_/maven#how-to-use-this-image
VOLUME_PROJECT="$MOUNT_PATH/dhbw_swe_server:/usr/src/mymaven"
VOLUME_NODE="$MOUNT_PATH/dhbw_swe_react:/home/node"
VOLUME_DOCKER="/var/run/docker.sock:/var/run/docker.sock"
DOCKER_HOST="DOCKER_HOST=unix:///var/run/docker.sock"

echo "build java server"
docker run -it -v $VOLUME_DOCKER -v $VOLUME_M2_PATH -v $VOLUME_PROJECT -e $DOCKER_HOST -w /usr/src/mymaven maven:alpine mvn install dockerfile:build

echo "build react application"
echo "node code volume: ${VOLUME_NODE}"
# why --no-bin-links is required https://forums.docker.com/t/symlinks-on-shared-volumes-not-supported/9288/3
docker run -it -e NODE_ENV=production -v $VOLUME_NODE node:alpine /bin/sh -c "cd /home/node && npm install && npm run build"

echo "start server and database"
if [ $1 = "prod" ]
then
    set spring_profiles_active="prod"
    docker-compose up -f docker-compose.prod.override.yml
else
    docker-compose up
fi

