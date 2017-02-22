FROM nginx:alpine

# Override default config
ADD ./config /etc/nginx/conf.d/
ADD ./certs /etc/nginx/certs/

# TODO: Generate self signed certs for local connections
COPY ./bin/create_certs /bin/create_certs
#ENTRYPOINT ["./create_certs"]
