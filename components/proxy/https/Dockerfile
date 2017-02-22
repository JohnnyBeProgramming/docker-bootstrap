FROM steveltn/https-portal:1.0.0

ADD config/locations /etc/nginx/conf.d/locations
ADD config/upstreams /etc/nginx/conf.d/upstreams

COPY config/templates/*.erb /var/lib/nginx-conf/

# Info: To extend and include more custom configs...
# https://github.com/SteveLTN/https-portal

