
fullStackApp.controller("signUpController", function($scope, $state, $http) {
	
	$scope.registerClick = function () {
		$scope.emailClass = "";
		$scope.passwordClass = "";
		$scope.password2Class = "";
		$scope.signUpFail = false;

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

			var signUpJSON = {
				"email": $scope.txtEmail,
				"pass": $scope.txtPassword
			};

			$http({
				method: "POST",
				url: "/signupuser",
				headers: { 'Content-Type': 'application/json; charset=utf-8' },
				data: signUpJSON				
			}).then(function success(res) {

				if(res.data == "1")
				{
					$state.go('login');
				}
				else
				{
					if(res.data == "-1")
						$scope.signUpError = "Error while sign up";
					if(res.data == "-2")
						$scope.signUpError = "Email already present";
					else
						$scope.signUpError = "Incorrect email or password";

					$scope.signUpFail = true;
				}

			}, function error(res) {
				console.log(res.data);
				$scope.signUpError = "Error while sign up";
				$scope.signUpFail = true;
			});
		}
	}

});