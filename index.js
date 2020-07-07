// Serving File // Middleware Approach
const express = require('express');
const path = require('path');
const bodyParser= require('body-parser');

const server = express();

const registrationRequestHandler = (req, res) => {
    // let body = ""; 
    // req.on('date', chunk => {
    //     body += chunk;
    // });

    // req.on('end', () => {
    //     console.log (body);
    // });
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.Gender);
    console.log(req.body.phone);

    res.send('Successful');
} 

//middleware definitions
server.use(express.static(path.join(__dirname, 'public')));
server.use(bodyParser.urlencoded({extended: false}))

//route
server.post('/Registration', registrationRequestHandler)

 
server.listen(3000, () => console.log('server is ready'));