FROM mhart/alpine-node:10.5.0
RUN mkdir -p /app
WORKDIR /app
COPY package.json ./package.json
COPY yarn.lock ./yarn.lock
RUN yarn