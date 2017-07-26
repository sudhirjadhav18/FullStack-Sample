
fullStackApp.controller("signUpController", function($scope, $state) {
	
	$scope.registerClick = function () {
		$scope.emailClass = "";
		$scope.passwordClass = "";
		$scope.password2Class = "";

		var isValid = true;

		if(!$scope.txtEmail || $scope.txtEmail.length <= 0 || $scope.signUpForm.txtEmail.$invalid) 
		{
			$scope.emailClass = "has-error";
			isValid = false;
		}

		if(!$scope.txtPassword || $scope.txtPassword.length <= 0 || $scope.signUpForm.txtPassword.$invalid) 
		{
			$scope.passwordClass = "has-error";
			isValid = false;
		}

		if(!$scope.txtPassword2 || $scope.txtPassword2.length <= 0 || $scope.signUpForm.txtPassword2.$invalid) 
		{
			$scope.password2Class = "has-error";
			isValid = false;
		}

		if($scope.txtPassword != $scope.txtPassword2)
		{
			$scope.passwordClass = "has-error";
			$scope.password2Class = "has-error";
			isValid = false;
		}

		if(isValid)
		{
			$state.go('login');
		}
	}

});