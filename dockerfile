FROM node:16.18 AS build-stage
WORKDIR /web

COPY ./package.json ./package.json
RUN npm i -g pnpm --registry=https://registry.npm.taobao.org \
    && pnpm install 
ADD . ./
RUN npm run build


FROM nginx:alpine
RUN mkdir /app
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /web/dist /app

# CMD ["npm","run","dev"]
