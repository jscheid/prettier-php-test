FROM node:12

ADD package.json yarn.lock sample.php test.js ./
RUN yarn
RUN yarn test
CMD ["yarn", "test"]
