FROM node:16.13.2-alpine
RUN mkdir /app

WORKDIR /app
COPY  . /app/
RUN npm install
RUN npm run build
