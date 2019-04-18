
# Requirements

- docker running with exposed deamon on tcp without TLS

# Start Server

Open a shell in the checkout repository and execute the following command to start the application:

Linux:

````shell
./buildAndRun.sh
````

Windows:

````powershell
.\buildAndRun.ps1
````

There are different settings which can be activated with the following characters as first parameter:

**b**: build the entire project and create the docker images (will also remove existing container)

**r**: remove existing containers to start from scratch

**t**: (only powershell) is needed if you use Docker Toolbox instead of Docker Desktop

**p**: will start the server in production, which requires the environment variable *SSL_KEY_STORE_PASSWORD* (password for the ssl certificate) and a certificate at */crt/certificate.pfx* with the given name.

Example:

````powershell
.\buildAndRun.ps1 tb
````

This builds the images, removes existing container and sets it up for Docker Toolbox.

# Postman

There is also a postman collection file which contains example calls. If you use Docker Toolbox, this collection uses the default address for that. Otherwise you need to replace *192.168.99.100* with *localhost*
