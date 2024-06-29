# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.2.0

FROM node:${NODE_VERSION}-alpine as base
WORKDIR /usr/src/server
EXPOSE 8080
COPY package*.json ./

FROM base as dev
RUN npm install
COPY . .
CMD npm run dev

FROM base as prod
RUN npm ci --omit=dev
USER node
COPY . .
CMD npm run build
