var express = require("express");
var app =express();







app.get("/", (req, res) => {
	res.sendFile(__dirname + "/www/index.html");
})

app.get("/about", (req, res) =>{
	res.sendFile(__dirname + "/www/about.html");
})

app.get("/contact us", (req, res) =>{
	res.sendFile(__dirname + "/www/contact us.html");
})

module.exports = app;