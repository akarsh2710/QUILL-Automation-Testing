var Horseman = require('node-horseman');
var TestCase = function(cb){
	console.log("u have called TestCase2");
	//console.log("root"+root);
	//utils.printOnHTML(parent, "<h3>My Test is for Page Load and PFM link click and PFM tracking</h3>");
	var matrix = []
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
	.open("http://quill.com")
	.evaluate(function(){
		return window.Analytics;
	})
	.then(function(e){
		console.log("get Analyticss")
	})
	.waitForSelector(".scTrack.pfm[sctype='pfm']")
	.log("selector found")
	.count(".scTrack.cta[ctatype='addtocart']")
	.log()
	.click(".scTrack.pfm[sctype='pfm']")
	.waitForNextPage()
	.wait(2000)
	.then(function(){
		//console.log("typeof cb:::"+typeof cb);
		if(typeof cb === "function"){
			//console.log(matrix)
			cb(matrix);
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
module.exports = TestCase/**/