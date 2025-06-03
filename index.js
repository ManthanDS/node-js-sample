// server.js

const express = require('express');
const app = express();

// Set the port (default to 3000 if not specified)
app.set('port', process.env.PORT || 3000);

// Serve static files from 'public' folder (optional)
app.use(express.static(__dirname + '/public'));

// Simple route
app.get('/', (req, res) => {
    res.send('Hello World from Node.js App!');
});

// Listen on all network interfaces (important for Docker/Kubernetes)
app.listen(app.get('port'), '0.0.0.0', () => {
    console.log('Node app is running on port', app.get('port'));
});
