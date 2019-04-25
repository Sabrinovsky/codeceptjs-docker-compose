FROM codeception/codeceptjs:latest

WORKDIR /tests

COPY docker/codecept.entrypoint.sh /usr/local/bin/

ENTRYPOINT ["codecept.entrypoint.sh"]
