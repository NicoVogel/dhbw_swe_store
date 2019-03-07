
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

# Maven install

download the binary from here: https://maven.apache.org/download.cgi

uncompress it and ten add it to the environment variables as shown here: https://maven.apache.org/install.html