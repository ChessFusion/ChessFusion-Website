#!/bin/bash
set -e

echo "Installing dependencies..."
pnpm install

echo "Starting Chess Fusion..."

cd artifacts/artifacts/chess-fusion
PORT=5000 BASE_PATH="/" NODE_ENV=development npx vite --config vite.config.ts --host 0.0.0.0
