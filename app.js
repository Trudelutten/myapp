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

function pet(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
}

var data = new pet ("Bella", 14, "dog");
var data1 = new pet ("MrTurtle", 11, "turtle");
var data2 = new pet ("MissDeer", 2, "deer");
var data3 = new pet ("MrFox", 3, "fox");
var data4 = new pet ("Kois", 5, "koi");



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/app.html'))
});

app.get('/petinfo', (req, res) => {
    res.sendFile(path.join(__dirname + '/petinfo.html'))
});

app.get('/petpics', (req, res) => {
    res.sendFile(path.join(__dirname + '/petpics.html'))
});

app.get('/data', (req, res) => {
    res.json([data, data1, data2, data3, data4])
});

app.use('/images', express.static(__dirname + '/images'))
app.use('/styles', express.static(__dirname + '/styles'))


app.listen(process.env.PORT || 8080)