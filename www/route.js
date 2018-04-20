var express = require("express");
var app =express();







app.get("/", (req, res) => {
	res.sendFile(__dirname + "/www/index.html");
})

app.get("/about", (req, res) =>{
	res.sendFile(__dirname + "/www/aboutus.html");
})

app.get("/contact us", (req, res) =>{
	res.sendFile(__dirname + "/www/contactus.html");
})

app.get("/contact us", (req, res) =>{
	res.sendFile(__dirname + "/www/carsite.html");
})

app.get("/contact us", (req, res) =>{
	res.sendFile(__dirname + "/www/sellyourcar.html");
})

app.get("/contact us", (req, res) =>{
	res.sendFile(__dirname + "/www/inventory.html");
})

app.get("/contact us", (req, res) =>{
	res.sendFile(__dirname + "/www/css");
})

module.exports = app;