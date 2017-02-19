FROM nginx:latest

ADD bin/consul-template /usr/local/bin

EXPOSE 80 443
ENV CONSUL_URL consul:8500

ENTRYPOINT ["/bin/start"]
ADD start /bin/start
RUN mkdir -p /etc/nginx/conf.d/
RUN rm -v /etc/nginx/conf.d/*.conf
