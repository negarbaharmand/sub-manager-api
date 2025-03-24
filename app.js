// Import the express module to create a web server
import express from 'express';
import { PORT } from './config/env.js';
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import subscriptionRoutes from "./routes/subscription.routes.js";

// Create an instance of the express application
const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);


// Define a route for the root ("/") URL using the GET method
app.get('/', (req, res) => {
    // Send a simple message as a response when the root URL is accessed
    res.send('Welcome to the Subscription Tracker API');
});

// The server doesn't start listening yet, we'll need to specify a port at the end of this file.
app.listen(PORT, () => { //start listening when starting the application
    console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);
});

export default app;