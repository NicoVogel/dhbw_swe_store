FROM anapsix/alpine-java:8_jdk
ARG JAR_FILE
ADD target/server-1.jar app.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]