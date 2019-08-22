FROM node:10

COPY . /base_ui

WORKDIR /base_ui

RUN npm install npm@latest -g && yarn install && npm install -g npm-cli-login

ENTRYPOINT ["./entrypoint.sh"]

