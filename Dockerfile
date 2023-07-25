# Build phase
FROM node:16.16.0-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Run phase
FROM node:16.16.0-alpine as portal
RUN npm install -g http-server
WORKDIR /app
COPY --from=builder /app/documentation/.vuepress/dist .
EXPOSE 8080
CMD http-server .