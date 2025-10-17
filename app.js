const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./routes/user.routes');
const path = require('path');
const dbconnect = require('./config/db');
const userModel=require("./models/user");
const inputModel=require("./models/user");
// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', userRoutes);



// Sample route


// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;