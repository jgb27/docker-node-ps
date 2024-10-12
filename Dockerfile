FROM node:20

WORKDIR /usr/src/app
RUN npm install -g nodemon

COPY package*.json ./
RUN npm install && npm cache clean --force

COPY . .

USER node

EXPOSE 3000
CMD [ "npm", "run", "dev" ]