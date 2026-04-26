FROM mcr.microsoft.com/devcontainers/javascript-node:24-bookworm

WORKDIR /app

RUN chown node:node /app

USER node

COPY --chown=node:node package*.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD ["npm", "start"]
