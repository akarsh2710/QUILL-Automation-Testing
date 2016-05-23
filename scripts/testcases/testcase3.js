var Horseman = require('node-horseman');
var TestCase = function(cb){
	console.log("u have called TestCase3");
	//console.log("root"+root);
	//utils.printOnHTML(parent, "<h3>My Test is for Page Load and PFM link click and PFM tracking</h3>");
	var returnObj = {};
	var matrix = [];
	var objRef = this;
	returnObj.matrix = matrix;
	returnObj.executeAll = true;
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
		console.log("Load Finished status:"+status);
	})
	.on('loadStarted', function( response ){
		//res.write("<h3>Page Loading...["+response.url+"]</h3>");
		//$(testindex).append("<h3>Page Loading...["+response.url+"]</h3>")
		console.log("loading started");
		//console.log(response);
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
	.log("loading home page")
	.open("http://quill.com")
	.screenshot("screenshot/test31.png")
	.evaluate(function(){
		return window.Analytics;
	})
	.then(function(e){
		console.log(JSON.stringify(e))
		console.log("get Analyticss")
	})
	.waitForSelector(".scTrack.cta[ctatype='addtocart']")
	.log("click addtocart from homepage")
	.evaluate(function(){
		$(".scTrack.cta[ctatype='addtocart']")[0].click()
	})
	.wait(500)
	.log("wait for PFM selector found")
	.waitForSelector(".scTrack.pfm[sctype='pfm']")
	.log("click for PFM")
	.evaluate(function(){
		$(".scTrack.pfm[sctype='pfm']")[0].click()
	})
	.waitForNextPage()
	.wait(1000)
	.screenshot("screenshot/test32.png")
	.log("do paper search")
	.waitForSelector(".scTrack.scInput[scvalue='search'][scinput='input']")
	.select(".scTrack.scInput[scvalue='search'][scinput='input']", "paper")
	.click(".scTrack.scInput[scvalue='search'][scinput='button']")
	.waitForNextPage()
	.wait(1000)
	.screenshot("screenshot/test33.png")
	.waitForSelector(".scTrack.cta[ctatype='addtocart']")
	.log("click addtocart from search page")
	.click(".scTrack.cta[ctatype='addtocart']")
	.wait(500)
	.log("show cart page")
	.click(".scTrack.scLink[scvalue='viewcart']")
	.waitForNextPage()
	.wait(1000)
	.screenshot("screenshot/test34.png")
	.log("show checkout page")
	.waitForSelector(".scTrack.scLink[scvalue='proceedtocheckout']")
	.click(".scTrack.scLink[scvalue='proceedtocheckout']")
	.wait(3000)
	.screenshot("screenshot/test35.png")
	.log("Enter login credential")
	.waitForSelector(".scTrack.scInput[scvalue='username'][scinput='input'][locater='loginoverlay']")
	.count(".scTrack.scInput[scvalue='username'][scinput='input'][locater='loginoverlay']")
	.log()
	.waitForSelector(".scTrack.scInput[scvalue='password'][scinput='input'][locater='loginoverlay']")
	.count(".scTrack.scInput[scvalue='password'][scinput='input'][locater='loginoverlay']")
	.log()
	.select(".scTrack.scInput[scvalue='username'][scinput='input'][locater='loginoverlay']", "test")
	.select(".scTrack.scInput[scvalue='password'][scinput='input'][locater='loginoverlay']", "test")
	.count(".scTrack.cta[ctatype='login'][locater='loginoverlay']")
	.log()
	.count(".scTrack.cta[ctatype='login']")
	.log()
	.log("click to login")
	.wait(1000)
	.click(".scTrack.cta[ctatype='login'][locater='loginoverlay']")
	.waitForNextPage()
	.wait(1000)
	.screenshot("screenshot/test36.png")
	.waitForSelector(".scTrack.scLink[scvalue='cartmerge']")
	.click(".scTrack.scLink[scvalue='cartmerge']")
	.waitForNextPage()
	.wait(1000)
	.evaluate(function(){
		return window.Analytics;
	})
	.then(function(e){
		console.log(JSON.stringify(e));
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
module.exports = TestCase/**/