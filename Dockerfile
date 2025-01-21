# Use the official Node.js image as the base image
FROM node:19

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./
# If you're using Yarn, use the following line instead:
# COPY yarn.lock ./

# Install dependencies
RUN npm install
# If you're using Yarn, use the following line instead:
# RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that Next.js will run on
EXPOSE 3000

# Set environment variables for development
ENV NODE_ENV=development

# Start the Next.js development server
CMD ["npm", "run", "dev"]
# If you're using Yarn, use the following line instead:
# CMD ["yarn", "dev"]
