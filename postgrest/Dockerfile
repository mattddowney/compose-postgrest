FROM debian:jessie-backports

ENV POSTGREST_VERSION 0.4.1.0

RUN apt-get update && \
    apt-get install -y tar xz-utils wget libpq-dev gettext-base && \
    apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN wget http://github.com/begriffs/postgrest/releases/download/v${POSTGREST_VERSION}/postgrest-${POSTGREST_VERSION}-ubuntu.tar.xz && \
    tar --xz -xvf postgrest-${POSTGREST_VERSION}-ubuntu.tar.xz && \
    mv postgrest /usr/local/bin/postgrest && \
    rm postgrest-${POSTGREST_VERSION}-ubuntu.tar.xz

# Populate postgrest.conf with environment variables
CMD envsubst < /etc/postgrest.conf.template > /etc/postgrest.conf && \
    exec postgrest /etc/postgrest.conf

EXPOSE 3000