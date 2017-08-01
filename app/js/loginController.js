
fullStackApp.controller("loginController", function($scope, $state, sharedProperties, $http) {	

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
			var loginJSON = {
				"email": $scope.txtEmail,
				"pass": $scope.txtPassword
			};

			$http({
				method: "POST",
				url: "/loginuser",
				headers: { 'Content-Type': 'application/json; charset=utf-8' },
				data: loginJSON				
			}).then(function success(res) {

				console.log("Login UserID: " + res.data);

				if(res.data >= 1)
				{
					sharedProperties.setLoggedInUser(1);
					$state.go('home');
				}

			}, function error(res) {
				console.log(res.data);
			});

			
		}
	}

});