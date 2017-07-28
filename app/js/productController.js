
fullStackApp.controller("productController", function($scope, $state, sharedProperties) {
	
	$scope.saveClick = function () {
		$scope.productClass = "";
		$scope.brandClass = "";
		$scope.priceClass = "";

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
			$state.go('home');
		}
	}

	$scope.logoutClick = function(){
		sharedProperties.logoutUser();
		$state.go("login");
	}

});