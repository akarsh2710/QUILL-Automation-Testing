var listCtrl = angular.module('main').controller('contactList', function($scope, userList){
	console.log("u have loaded contactList controller")
	//console.log(userList.user)
	$scope.users = [];
	userList.getUsersList().then(function(data){
		$scope.users = data;
	},function(error){
		
	})
	//$scope.users = !!userList.user ? userList.user : [];
});

