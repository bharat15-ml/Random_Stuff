FROM node:23-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY ./myapp ./
USER node
RUN npm install 
COPY --chown=node:node . .
EXPOSE 3000
CMD [ "node", "app.js" ]

