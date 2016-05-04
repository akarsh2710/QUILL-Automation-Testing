var app = angular.module("config",["ngRoute"]);

app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {	
	$locationProvider.html5Mode(true);
	console.log($routeProvider)
	$routeProvider
		.when('/page1', {
		  templateUrl: 'view/page1.html'
		})
		.when('/page2', {
		  templateUrl: 'view/page2.html'
		})
		.when('/page3', {
		  templateUrl: 'view/page3.html'
		})
		.when('/page4', {
		  templateUrl: 'view/page4.html'
		})
		.when('/contact', {
		  templateUrl: 'view/pages/contactlist.html'
		})
		.otherwise({ redirectTo: '/contact'
		});
}]);