FROM node:10.15.3-alpine

WORKDIR /usr/cache
RUN apk update
RUN apk --no-cache add --virtual builds-deps build-base python
RUN yarn config set python /usr/bin/python
COPY package.json .
RUN yarn
RUN apk del builds-deps

WORKDIR /usr/app
RUN mkdir /var/logs
RUN mkdir /var/logs/fastify-auth-micro
COPY entrypoint.sh .

CMD ["/usr/app/entrypoint.sh"]
