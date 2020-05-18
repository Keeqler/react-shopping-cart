FROM node:12.16-alpine

WORKDIR /usr/app

RUN yarn global add json-server

COPY . .

EXPOSE 3000

CMD json-server --watch db.json --host 0.0.0.0 --port $PORT
