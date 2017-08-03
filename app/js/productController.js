
fullStackApp.controller("productController", function($scope, $state, sharedProperties, $http) {
	
	$scope.saveClick = function () {
		$scope.productClass = "";
		$scope.brandClass = "";
		$scope.priceClass = "";
		$scope.productSaveFail = false;

		var isValid = true;

		if(!$scope.txtProduct || $scope.txtProduct.length <= 0 || $scope.productForm.txtProduct.$invalid) 
		{
			$scope.productClass = "has-error";
			isValid = false;
		}

		if(!$scope.txtBrand || $scope.txtBrand.length <= 0 || $scope.productForm.txtBrand.$invalid) 
		{
			$scope.brandClass = "has-error";
			isValid = false;
		}

		if(!$scope.txtPrice || $scope.txtPrice.length <= 0 || $scope.productForm.txtPrice.$invalid) 
		{
			$scope.priceClass = "has-error";
			isValid = false;
		}

		if(isValid)
		{		

			var productJSON = {
				"name": $scope.txtProduct,
				"brand": $scope.txtBrand,
				"price": $scope.txtPrice
			};

			$http({
				method: "POST",
				url: "/saveproduct",
				headers: { 'Content-Type': 'application/json; charset=utf-8' },
				data: productJSON				
			}).then(function success(res) {

				if(res.data >= 1)
				{
					$state.go('home');
				}
				else
				{
					$scope.productError = "error";
					$scope.productSaveFail = true;
				}

			}, function error(res) {
				console.log(res.data);
				$scope.productError = "Error while saving";
				$scope.productSaveFail = true;
			});

		}
	}

	$scope.logoutClick = function(){
		sharedProperties.logoutUser();
		$state.go("login");
	}

});