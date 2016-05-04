//var angular = require("angular");
var app = angular.module("main",[]);
//var app = angular.module("main",["config"]);
// Below is the code to allow cross domain request from web server through angular.js
app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);
app.controller("testcase1", function($scope,$http,$sce){
	console.log($scope);
	//$scope.testname = "testing";
	var resData = [];
	$scope.pageMatrixCol = [];
	$scope.clickMatrixCol = [];
	$http({ method: "GET",
            url: "http://localhost:8090/test1",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
	}).
	success(function(response) {
		console.log("success"); // Getting Success Response in Callback
		console.log(response);
		resData = response.data;
		matrixIdentifier();
		
	}).
	error(function(response) {
		console.log("error"); // Getting Error Response in Callback
		$scope.codeStatus = response || "Request failed";
		console.log($scope.codeStatus);
	});
	var matrixIdentifier = function(){
		for(var k=0; k<resData.length; k++)
		{
			if(!!resData[k].pe){
				$scope.clickMatrixCol.push(resData[k]);
			}else{
				$scope.pageMatrixCol.push(resData[k]);
			}
		}
	}
	$scope.decodeHtml = function(someHtmlVar){
		console.log("someHtmlVar::"+someHtmlVar+":::"+$sce.trustAsHtml(someHtmlVar))
		return $sce.trustAsHtml(unescape(someHtmlVar));
		
	}
})
app.controller("testcase2", function($scope,$http,$sce){
	console.log($scope);
	//$scope.testname = "testing";
	var resData = [];
	$scope.pageMatrixCol = [];
	$scope.clickMatrixCol = [];
	$http({ method: "GET",
            url: "http://localhost:8090/test2",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
	}).
	success(function(response) {
		console.log("success"); // Getting Success Response in Callback
		console.log(response);
		resData = response.data;
		matrixIdentifier();
		
	}).
	error(function(response) {
		console.log("error"); // Getting Error Response in Callback
		$scope.codeStatus = response || "Request failed";
		console.log($scope.codeStatus);
	});
	var matrixIdentifier = function(){
		for(var k=0; k<resData.length; k++)
		{
			if(!!resData[k].pe){
				$scope.clickMatrixCol.push(resData[k]);
			}else{
				$scope.pageMatrixCol.push(resData[k]);
			}
		}
	}
	$scope.decodeHtml = function(someHtmlVar){
		console.log("someHtmlVar::"+someHtmlVar+":::"+$sce.trustAsHtml(someHtmlVar))
		return $sce.trustAsHtml(unescape(someHtmlVar));
		
	}
})
/*app.controller("page1", function($scope, $routeParams){
	console.log($scope);
})
app.controller("page2", function($scope, $routeParams){
	console.log($scope);
})*/
//var index = function(){};
//module.exports = index