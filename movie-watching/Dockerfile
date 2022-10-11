#1. Build
FROM node:14-alpine

WORKDIR /front-end

COPY ./package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
