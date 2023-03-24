FROM node:18-alpine
RUN npm install -g nodemon
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
#CMD ["react-scripts", "start" ]
CMD ["node", "server.js"]
# EXPOSE 3001