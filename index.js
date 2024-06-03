

const express = require('express');
const app = express();
const usersRouter = require('./user');

app.use(express.json()); // Middleware to parse JSON bodies

app.use('/api/users', usersRouter); // Use the users routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
