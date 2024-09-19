FROM node:20-alpine

RUN apk add --no-cache bash

WORKDIR /krist_ecommerce_frontend
COPY package*.json .
RUN npm install
COPY . /krist_ecommerce_frontend/