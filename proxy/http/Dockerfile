FROM nginx:alpine

# Override default config
RUN rm -v /etc/nginx/conf.d/*
COPY config/*.conf /etc/nginx/conf.d/*.conf

# TODO: Generate self signed certs for local connections
#COPY ssl-certs.sh /tmp/ssl-certs.sh
#CMD ["nginx", "-c", "/nginx/nginx.conf", "-g", "daemon off;"]
#ENTRYPOINT ["/tmp/ssl-certs.sh"]
