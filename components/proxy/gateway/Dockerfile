FROM nginx:latest

ENV CONSUL_URL consul:8500

RUN mkdir -p /etc/nginx/conf.d/
RUN rm -v /etc/nginx/conf.d/*.conf

ADD ./certs/ /etc/nginx/certs/
ADD ./config/ /etc/nginx/conf.d/
ADD ./bin/consul-template /usr/local/bin
ADD ./bin/start /bin/start

EXPOSE 80 443
ENTRYPOINT ["/bin/start"]
