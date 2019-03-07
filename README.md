
# Requirements

- Maven 3.x
- JDK 1.8
- docker running with exposed deamon on tcp without TLS

# Start Server

Open a shell an execute the following command to build the docker image

````shell
./mvnw install dockerfile:build
````

Then use docker-compose to start the database and spring server

````shell
docker-compose up
````