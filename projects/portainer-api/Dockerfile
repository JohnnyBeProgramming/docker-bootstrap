FROM node:boron
#FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app and install dependencies
COPY . /usr/src/app
RUN npm install

EXPOSE 8100
CMD [ "npm", "start" ]