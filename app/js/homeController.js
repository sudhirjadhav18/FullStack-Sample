
fullStackApp.controller("homeController", function($scope, sharedProperties, $state) {
	
	$scope.logoutClick = function(){
		sharedProperties.logoutUser();
		$state.go("login");
	}

});