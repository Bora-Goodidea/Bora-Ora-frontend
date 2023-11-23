FROM ubuntu:latest
LABEL maintainer="jinhy921207 <jinhy921207@naver.com>"

ENV DEBIAN_FRONTEND noninteractive
ENV LC_ALL=C.UTF-8
ARG OS_LOCALE
ENV TZ=Asia/Seoul
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 20.9.0
ENV WORKING_DIR /Workspaces

EXPOSE 3000

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# default install
RUN apt-get update
RUN apt-get install -y \
    apt-utils \
    language-pack-ko \
    tzdata \
    net-tools \
    curl \
    vim \
    iputils-ping \
    unzip

# default setting
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN locale-gen ko_KR.UTF-8
RUN localedef -f UTF-8 -i ko_KR ko_KR.UTF-8

# software-properties-common
RUN apt-get install -y software-properties-common

# apt clean
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# add entrypoint script
ADD ./config/entrypoint.sh /usr/local/bin/entrypoint.sh
ADD ./config/start.sh /usr/local/bin/start.sh
RUN chmod +x /usr/local/bin/start.sh




# SHELL ["/bin/bash", "--login", "-c"]
RUN /bin/bash /usr/local/bin/entrypoint.sh

VOLUME $WORKING_DIR

WORKDIR $NVM_DIR

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash \
  && . $NVM_DIR/nvm.sh \
  && nvm install $NODE_VERSION \
  && nvm alias default $NODE_VERSION \
  && nvm use default \
  && npm install -g yarn \
  && ln -s $NVM_DIR/versions/node/v$NODE_VERSION/bin/node /usr/bin/node \
  && ln -s $NVM_DIR/versions/node/v$NODE_VERSION/bin/yarn /usr/bin/yarn

WORKDIR $WORKING_DIR
