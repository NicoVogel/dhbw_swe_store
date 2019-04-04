FROM openjdk:8-alpine
ARG JAR_FILE
ADD target/server-1.jar app.jar
RUN mkdir static
VOLUME /static
VOLUME /crt
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]