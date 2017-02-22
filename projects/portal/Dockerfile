FROM scratch

ENV WWW_DIR=/tmp/www

ADD ./bin /bin
ADD ./dist ${WWW_DIR}
VOLUME ${WWW_DIR}

CMD ["/bin/start"]