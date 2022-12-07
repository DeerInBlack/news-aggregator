FROM node:16.17.1-slim

WORKDIR /usr/local/news-aggregator/aggregator-front

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000
CMD [ "npm", "run", "start" ]
