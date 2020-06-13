FROM ubuntu:20.04

WORKDIR /app

RUN apt-get update \
    # install config_package
    && apt-get install --no-install-recommends -y tzdata locales \
    && locale-gen ja_JP.UTF-8 \
    # install tool
    && apt-get install --no-install-recommends -y git wget \
    # install nodejs yarn
    && apt-get install --no-install-recommends -y nodejs npm \
    && npm install -g n yarn \
    && n 12.17 \
    && apt-get purge -y nodejs npm \
    # clean cache
    && apt-get autoremove -y && apt-get clean && rm -rf /var/lib/opt/lists/*

ENV PATH $PATH:/app/node_modules/.bin
ENV LANG ja_JP.UTF-8
ENV TZ Asia/Tokyo

ENTRYPOINT /bin/bash
