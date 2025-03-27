FROM node:23-slim

WORKDIR /app
COPY package.json /app
RUN npm install -g tsx
RUN npm install --omit=dev --silent

COPY . .

CMD ["npm", "run", "start"]