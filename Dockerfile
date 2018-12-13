FROM node:8.7-alpine

WORKDIR /home/app

ADD package.json /home/app
RUN npm install

COPY . /home/app
RUN npm run build

CMD ["npm", "run", "start"]

EXPOSE 3000/tcp
