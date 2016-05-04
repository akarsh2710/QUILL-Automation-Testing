console.log("app loaded");
var express = require("express");
var app = express();
var path = require("path");

app.use(express.static(__dirname+"/"));
app.get("/",function(req,res){
	console.log("get first index")
	res.sendFile(path.join(__dirname + '/view/index.html'));
	//res.render('users/signup')
})

var test1 = require("./scripts/testcases/testcase1");
app.get("/test1",function(req,res){
	console.log("get first index")
	res.type('application/json');
	//res.sendFile(path.join(__dirname + '/view/index.html'));
	//res.render('users/signup')
	new test1(function(data){
		var resData = {};
		resData.status = 200;
		resData.data = data;
		res.json(resData);
		
	})
})

var test2 = require("./scripts/testcases/testcase2");
app.get("/test2",function(req,res){
	console.log("get first index")
	res.type('application/json');
	//res.sendFile(path.join(__dirname + '/view/index.html'));
	//res.render('users/signup')
	new test2(function(data){
		var resData = {};
		resData.status = 200;
		resData.data = data;
		res.json(resData);
		
	})
})
module.exports = app