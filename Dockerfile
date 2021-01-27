FROM node:12

ADD package.json yarn.lock sample.php ./
RUN yarn
RUN yarn test
CMD ["yarn", "test"]
