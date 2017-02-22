FROM steveltn/https-portal:1.0.0

ENV TARGET_HOST example.com

ADD config /etc/nginx/conf.d/
ADD config/templates /var/lib/nginx-conf/

# Info: To extend and include more custom configs...
# https://github.com/SteveLTN/https-portal

