FROM steveltn/https-portal:1.0.0

COPY config/routes.conf.erb /var/lib/nginx-conf/my.example.com.conf.erb
COPY config/routes.ssl.conf.erb /var/lib/nginx-conf/my.example.com.ssl.conf.erb

# Info: To extend and include more custom configs...
# https://github.com/SteveLTN/https-portal

