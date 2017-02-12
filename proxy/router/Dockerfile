FROM gliderlabs/alpine:3.1

ENV CONSUL_URL consul:8500
ENV CONSUL_TEMPLATE_CONFIG "*"
ENV CONSUL_TEMPLATE_VERSION 0.12.2
ENV CONSUL_WORK_DIR /consul-templates

ADD https://releases.hashicorp.com/consul-template/${CONSUL_TEMPLATE_VERSION}/consul-template_${CONSUL_TEMPLATE_VERSION}_linux_amd64.zip /
RUN unzip consul-template_${CONSUL_TEMPLATE_VERSION}_linux_amd64.zip && \
    mv consul-template /usr/local/bin/consul-template &&\
    rm -rf /consul-template_${CONSUL_TEMPLATE_VERSION}_linux_amd64.zip && \
    mkdir -p ${CONSUL_WORK_DIR}

COPY ./start ${CONSUL_WORK_DIR}/
COPY ./templates/*.* ${CONSUL_WORK_DIR}/templates/
WORKDIR ${CONSUL_WORK_DIR}
#VOLUME ${CONSUL_WORK_DIR}

#CMD [ "ls", "-la"]
CMD [ "/usr/local/bin/consul-template", "-consul=$CONSUL_URL", "-config=\"config.hcl\""]
#CMD [ "consul-template", "-consul=$CONSUL_URL", "-template=\"routes.ctmpl:routes.conf:echo xxx\""]
#CMD [ "/usr/local/bin/consul-template", "-consul=$CONSUL_URL", "-template=\"/templates/routes.ctmpl:/templates/routes.conf:service nginx reload\""]