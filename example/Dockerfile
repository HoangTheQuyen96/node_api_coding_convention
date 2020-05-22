FROM node:12.13.1-alpine

WORKDIR /home/opt
ENV NODE_ENV=development \
    PORT=8000 \
    HOST=localhost 
    
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["node", "./src/app.js"]

