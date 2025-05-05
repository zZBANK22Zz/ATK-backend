# 1. Base image
FROM node:20-alpine

# 2. Install required build tools to compile bcrypt
RUN apk add --no-cache make gcc g++ python3

# 3. Set working directory
WORKDIR /app

# 4. Copy package.json and package-lock.json
COPY package*.json ./

# 5. Install dependencies
RUN npm install

# 6. Copy the rest of the code
COPY . .

# 7. Build the project
RUN npm run build

# 8. Expose the port
EXPOSE 8000

# 9. Start server
CMD ["npm", "run", "start:prod"]