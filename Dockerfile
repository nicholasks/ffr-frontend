FROM node:10.12.0

WORKDIR /srv

COPY ./.storybook/ ./storybook/

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]
