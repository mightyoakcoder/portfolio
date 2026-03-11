FROM node:20-slim AS builder

WORKDIR /app

# Build client
COPY client/package.json client/
RUN cd client && npm install
COPY client/ client/
RUN cd client && npm run build
# Built output goes to server/public (per vite.config.js)

FROM node:20-slim AS runner

WORKDIR /app

COPY server/package.json ./
RUN npm install --production

COPY server/src ./src

# Copy built client from builder stage
COPY --from=builder /app/server/public ./public

# Serve static files from Express
RUN echo "import express from 'express';" > /dev/null

EXPOSE 8080

ENV PORT=8080
ENV NODE_ENV=production

CMD ["node", "src/index.js"]