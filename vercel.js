{
  "version": 2,
  "routes": [
    {
      "src": "/api/(.*)/raw",
      "methods": ["GET"],
      "dest": "/api/raw.js"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
