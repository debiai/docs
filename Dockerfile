# Build phase
FROM node:lts-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run docs:build

# Run phase
FROM node:lts-alpine as portal
RUN npm install -g http-server
WORKDIR /app
COPY --from=builder /app/documentation/.vuepress/dist .
EXPOSE 8080
CMD http-server .