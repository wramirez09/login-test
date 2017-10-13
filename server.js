

const express = require('express');
const app = express();
const api = require('./api/api');

app.use(express.static('public'));

app.listen(6069, function(req, res) {
    console.log('app listening on port 6069!')
});

app.all("/register", api.registerUser.bind(this));
app.all("/login", api.loginUser.bind(this));

// start up db on server start 
