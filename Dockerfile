FROM node:12

# Create app directory
WORKDIR /usr/koa-demo

# Install app dependencies
# A wildcard is uesd to ensure both package.json
# where available(npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "dev" ]