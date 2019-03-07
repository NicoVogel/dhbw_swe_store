
# Requirements

- Maven 3.x
- JDK 1.8
- docker running with exposed deamon on tcp without TLS

# Start Server

Open a shell in the *DHBW_SWE_Server* folder an execute the following command to build the docker image

````shell
mvn install dockerfile:build
````

Then use docker-compose in the folder above to start the database and spring server

````shell
docker-compose up
````