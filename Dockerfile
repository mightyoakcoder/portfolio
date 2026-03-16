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

COPY server/index.js ./index.js

# Copy built client from builder stage
COPY --from=builder /app/client/dist ./public

EXPOSE 8080

ENV PORT=8080
ENV NODE_ENV=production

CMD ["node", "index.js"]