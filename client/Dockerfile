FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm install serve --location=global
RUN npm run build
# EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]

# FROM node:18-alpine
# WORKDIR /app
# COPY . .
# RUN npm install
# #CMD ["react-scripts", "start" ]
# CMD ["npm", "run", "start"]
# EXPOSE 3000