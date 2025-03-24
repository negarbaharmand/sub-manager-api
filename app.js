// Import the express module to create a web server
import express from 'express';

// Create an instance of the express application
const app = express();

// Define a route for the root ("/") URL using the GET method
app.get('/', (req, res) => {
    // Send a simple message as a response when the root URL is accessed
    res.send('Welcome to the Subscription Tracker API');
});

// The server doesn't start listening yet, we'll need to specify a port at the end of this file.
app.listen(3000, () => { //start listening when starting the application
    console.log('Subscription Tracker API is running on http://localhost:3000');
});

export default app;