FROM node:16.18
WORKDIR /web

COPY ./package.json /web/package.json

RUN npm i -g pnpm --registry=https://registry.npm.taobao.org
RUN pnpm install

COPY . /web/
EXPOSE 8088

CMD npm run dev
