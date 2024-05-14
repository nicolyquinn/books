# Include ambiente NodeJS
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy the files
COPY . .

# Install the dependencies
RUN npm install 

# Run the app
CMD ["npm", "run", "dev"]