// Import required modules
const express = require('express');

// Create an instance of Express app
const app = express();

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Define a port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
