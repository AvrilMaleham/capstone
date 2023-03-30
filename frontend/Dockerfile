FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm install serve --location=global
RUN npm run build
CMD ["serve", "-s", "build", "-l", "3000"]

