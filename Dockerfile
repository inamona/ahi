#### Stage 1
FROM node:8 as node

WORKDIR /srv

# build the Angular app
COPY package.json package.json
RUN npm install
RUN npm install typescript@">=3.1.1 <3.3"

COPY src /srv/src
COPY angular.json tsconfig.json /srv/
RUN ls -lah /srv
RUN npm run build -- --prod

#### Stage 2
FROM nginx:alpine
COPY --from=node /srv/dist /usr/share/nginx/html
COPY .config/nginx.conf /etc/nginx/conf.d/default.conf
