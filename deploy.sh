#!/bin/bash

echo "🧹 Removing old container..."
docker rm -f next-main-app

echo "🐳 Rebuilding Docker image..."
docker build -t my-next-app .

echo "🚀 Starting container..."
docker run -d \
  --restart unless-stopped \
  --name next-main-app \
  -p 3000:3000 \
  my-next-app

echo "✅ Done! App is live on http://localhost:3000"
