
fullStackApp.controller("loginController", function($scope, $state, sharedProperties) {	

	$scope.loginClick = function () {
		$scope.emailClass = "";
		$scope.passwordClass = "";

		var isValid = true;

		if(!$scope.txtEmail || $scope.txtEmail.length <= 0 || $scope.loginForm.txtEmail.$invalid) 
		{
			$scope.emailClass = "has-error";
			isValid = false;
		}

		if(!$scope.txtPassword || $scope.txtPassword.length <= 0 || $scope.loginForm.txtPassword.$invalid) 
		{
			$scope.passwordClass = "has-error";
			isValid = false;
		}

		if(isValid)
		{
			sharedProperties.setLoggedInUser(1);
			$state.go('home');
		}
	}

});