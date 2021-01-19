FROM node:14 as build-stage

WORKDIR /home/node/frontend
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn export

FROM nginx:stable

COPY --from=build-stage /home/node/frontend/out /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]