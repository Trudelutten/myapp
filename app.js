//console.log("!!!Hello!!!");

/*
const http = require('http');

const server = http.createServer((request, respons) => {
    response.write('Hello!!');
    respone.end();
}).listen(8080);*/

const express = require('express');
var app = express();
var path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/app.html'))
});

app.listen(process.env.PORT || 8080)