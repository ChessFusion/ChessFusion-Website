#!/bin/bash
set -e

echo "Installing dependencies..."
pnpm install

echo "Starting Chess Fusion..."

# Build and start API server in background
(
  cd artifacts/artifacts/api-server
  PORT="${API_PORT:-3000}" NODE_ENV=development node build.mjs && \
  PORT="${API_PORT:-3000}" NODE_ENV=development node --enable-source-maps ./dist/index.mjs
) &
API_PID=$!

echo "API server starting on port ${API_PORT:-3000}..."
sleep 3

# Start frontend
(
  cd artifacts/artifacts/chess-fusion
  PORT=5000 BASE_PATH="/" NODE_ENV=development npx vite --config vite.config.ts --host 0.0.0.0
) &
FRONTEND_PID=$!

echo "Frontend starting on port 5000..."

wait -n $API_PID $FRONTEND_PID || true
kill $API_PID $FRONTEND_PID 2>/dev/null || true
wait
