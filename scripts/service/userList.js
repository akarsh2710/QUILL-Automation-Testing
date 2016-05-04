angular.module('main').service("userList", function($http, $q){
	//this.getUserList = function(){
	this.getUsersList = function(){
		return $http({
			method : "GET",
			url : "userList.json"
		}).then(function mySucces(response) {
			console.log("json loaded")
			return response.data.users
		}, function myError(response) {
			console.log("json loaded fail")
			console.log(response)
			return $q.reject(response.data);
		});
		
	}
})