const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Simple GET endpoint
app.get('/', (req, res) => {
  res.send('CI/CD Pipeline Working!');
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
