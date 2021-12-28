FROM node:14-alpine

RUN mkdir -p /src/app

WORKDIR /src/app
COPY . /src/app/

COPY package.json ./

COPY yarn.lock ./

RUN yarn install --frozen-lockfile

EXPOSE 3000

CMD [ "npm", "start" ]