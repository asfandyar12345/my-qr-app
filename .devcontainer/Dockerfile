# Dockerfile for React Native Development

FROM node:20

# Install Expo CLI, React Native CLI, Watchman, and necessary build tools

# Install build essentials
RUN apt-get update && \
    apt-get install -y \
    build-essential \
    git \
    watchman \
    && rm -rf /var/lib/apt/lists/*

# Install Expo CLI and React Native CLI globally
RUN npm install -g expo-cli react-native-cli

# Create and set the working directory
WORKDIR /app

# Copy package files and install dependencies if needed
# COPY package*.json ./
# RUN npm install # Uncomment if you want to install dependencies automatically

# Expose the port
EXPOSE 19000 19001 19002

CMD ["npm", "start"]
