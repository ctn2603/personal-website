# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.10.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

# Speed up build process by checking if changes happen at this layer
COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD yarn run dev
