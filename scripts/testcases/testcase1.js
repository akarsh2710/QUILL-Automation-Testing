var Horseman = require('node-horseman');
var TestCase = function(cb){
	console.log("u have called TestCase1");
	//console.log("root"+root);
	//utils.printOnHTML(parent, "<h3>My Test is for Page Load and AddtoCart</h3>");
	var returnObj = {};
	var matrix = [];
	var objRef = this;
	returnObj.matrix = matrix;
	returnObj.executeAll = true;
	var objRef = this;
	var horseman = new Horseman();
	horseman
	.on('resourceReceived', function( response ){
		if(JSON.stringify(response.url).indexOf("/b/ss") > -1){
			console.log(response.url);
			 //res.write("<h3>Matrix Firing</h3>");
			 //res.write("<span>"+JSON.stringify(getQueryString(response.url))+"</span>");
			console.log("-----------------------------------------------");
			matrix.push(objRef.getQueryString(response.url));
		}
	})
	.on('loadFinished', function( status ){
		//$("<h3>Page Loaded</h3>").append("#"+testindex);
		//utils.printOnHTML(testindex, "Page Loaded")
		console.log(status);
	})
	.on('loadStarted', function( response ){
		//res.write("<h3>Page Loading...["+response.url+"]</h3>");
		//$(testindex).append("<h3>Page Loading...["+response.url+"]</h3>")
		console.log("loading started");
		console.log(response);
	})
	.on('error', function(msg){
		console.log("some error");
		if(typeof cb === "function"){
			//console.log(matrix)
			//returnObj.executeAll = false;
			//cb(returnObj);
		}
	})
	.on('timeout', function(msg){
		console.log("time out error");
		if(typeof cb === "function"){
			//console.log(matrix)
			returnObj.executeAll = false;
			cb(returnObj);
		}
	})
	.open("http://quill.com")
	.evaluate(function(){
		return window.Analytics;
	})
	.then(function(e){
		console.log("get Analyticss")
		//console.log(e)
		//res.write("<h3>Page Analytics Object</h3>");
		//res.write("<h4>"+JSON.stringify(e)+"</h4>");
	})
	.waitForSelector(".scTrack.cta[ctatype='addtocart']")
	.log("selector found")
	.count(".scTrack.cta[ctatype='addtocart']")
	.log()
	.click(".scTrack.cta[ctatype='addtocart']")
	.wait(2000)
	.then(function(){
		//console.log("typeof cb:::"+typeof cb);
		if(typeof cb === "function"){
			//console.log(matrix)
			cb(returnObj);
		}
	})
	.close();
	
}
TestCase.prototype.getQueryString = function(url){
	var a=url.split(/\?/);
    var b=a[1].split("&");
    var c={};
    for(var i=0;i<b.length;i++){
        var d=b[i].split("=");
        c[d[0]]=d[1];
    }
    return c;
}
module.exports = TestCase