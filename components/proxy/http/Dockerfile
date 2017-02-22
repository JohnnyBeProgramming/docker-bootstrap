FROM nginx:alpine

# Override default config
#RUN rm -v /etc/nginx/conf.d/*
#COPY config/*.conf /etc/nginx/conf.d/*.conf
ADD certs/ /etc/nginx/certs/
ADD config/ /etc/nginx/conf.d/


# TODO: Generate self signed certs for local connections
COPY ./bin/create_certs /bin/create_certs
#ENTRYPOINT ["./create_certs"]
