var http = require("http");
var app = require("../app");

//var fs = require("fs");
//var express = require("express");

const PORT=8090;
app.set('port', PORT);

var server = http.createServer(app);
//var server = http.createServer(serverReqHandler);

server.on('error', onError);
server.on('listening', onListening);

server.listen(PORT,function(){
	console.log("Server listening on: http://localhost:"+ PORT);
})

function serverReqHandler(res,req){
	console.log("request received");
}
function onError(error){
	console.log("Server Error"+error);
}
function onListening(res){
	console.log("server listening...");
}