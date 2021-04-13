FROM node:10

ARG TROCA_APP_NAME=base-ui

ENV TROCA_APP_NAME=${TROCA_APP_NAME}

COPY . /base_ui

WORKDIR /base_ui

RUN npm install npm@latest -g && yarn install

ENTRYPOINT ["./entrypoint.sh"]



