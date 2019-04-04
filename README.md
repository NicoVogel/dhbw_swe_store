
# Requirements

- docker running with exposed deamon on tcp without TLS

# Start Server

Open a shell in the checkout repository and execute the following command:

````shell
./buildAndRun.sh
````

This will build the development version of the project.
By adding *prod* as the first parameter, the production version is started.

````shell
./buildAndRun.sh prod
````

This requires the following Environment variable to work and a certificate at */crt/certificate.pfx* with the given name.

- SSL_KEY_STORE_PASSWORD: password for the ssl certificate

# Postman

There is also a postman collection file which contains example calls. If you use Docker Toolbox, this collection uses the default address for that. Otherwise you need to replace *192.168.99.100* with *localhost*

# Maven install

download the binary from here: https://maven.apache.org/download.cgi

uncompress it and then add it to the environment variables as shown here: https://maven.apache.org/install.html