#!/bin/bash

MOUNT_PATH=`pwd`
USER_HOME=`eval echo ~$USER`
#https://hub.docker.com/_/maven#reusing-the-maven-local-repository
VOLUME_M2_PATH="$USER_HOME/.m2:/root/.m2"
#https://hub.docker.com/_/maven#how-to-use-this-image
VOLUME_PROJECT="$MOUNT_PATH/dhbw_swe_server:/usr/src/mymaven"
VOLUME_NODE="$MOUNT_PATH/dhbw_swe_react:/home/node"
VOLUME_DOCKER="/var/run/docker.sock:/var/run/docker.sock"
DOCKER_HOST="DOCKER_HOST=unix:///var/run/docker.sock"

echo "\n\n\n"
echo "------------------------------------------------------------------------"
echo "BUILD java server"
echo "------------------------------------------------------------------------"
#docker run --rm -it -v $VOLUME_DOCKER -v $VOLUME_M2_PATH -v $VOLUME_PROJECT -e $DOCKER_HOST -w /usr/src/mymaven maven:alpine mvn install dockerfile:build

echo "\n\n\n"
echo "------------------------------------------------------------------------"
echo "BUILD react application"
echo "------------------------------------------------------------------------"
#docker run --rm -it -e NODE_ENV=production -v $VOLUME_NODE node:alpine /bin/sh -c "cd /home/node && npm install && npm run build"

echo "\n\n\n"
echo "------------------------------------------------------------------------"
echo "START server and database"
echo "\n"
if [[ $1 -eq "prod" ]]
then
    echo "ENV: Production"
    echo "------------------------------------------------------------------------"
    docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
else
    echo "Env: Development"
    echo "------------------------------------------------------------------------"
    docker-compose up -d
fi
