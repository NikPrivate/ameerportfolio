#Use the latest LTS version of Node.js
FROM node:22

#Set the working directory inside the container
WORKDIR /app


#Copy package.json and package-lock.json
COPY package.json .

#Install dependencies
RUN npm install 

#Install serve dependencies
RUN npm i -g serve

#Copy the rest of your application files
COPY . .

#Build
RUN npm run build

#Expose the port your  app runs on
EXPOSE 3000

#Define the command to run your app
CMD [ "serve", "-s", "dist" ]