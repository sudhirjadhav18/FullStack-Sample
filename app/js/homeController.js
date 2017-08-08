
fullStackApp.controller("homeController", function($scope, sharedProperties, $state, $http) {
	
	$scope.infoBoxClass = "";
	$scope.showInfoBox = false;
	$scope.infoBoxInnerText = "";
	$scope.hideProductTable = false;
	$scope.showNoProductsInfo = false;

	$http({
		method: "GET",
		url: "/api/product"
	}).then(function success(res) {
		if(res.data && res.data.length > 0)
			$scope.productList = res.data;
		else
			$scope.showNoProductsInfo = true;

	}, function error(res) {
		showInfoBox("bg-danger", "Error while loading Products", true);
	});

	$scope.logoutClick = function(){
		sharedProperties.logoutUser();
		$state.go("login");
	}

	$scope.deleteClick = function (productId) {
		$http({
			method: "DELETE",
			url: "/api/product/" + productId
		}).then(function success(res) {
			if(res.data && res.data == "1") {
				console.log(">> product deleted");

				// remove product from array
				for (var i = 0; i < $scope.productList.length; i++) {
					if($scope.productList[i]._id == productId) {
						$scope.productList.splice(i, 1);
						break;
					}
				}

				if($scope.productList.length <= 0)
					$scope.showNoProductsInfo = true;

				showInfoBox("bg-success", "Product deleted", false);
			}
			else {
				showInfoBox("bg-danger", "error while deleting product", false);
			}

		}, function error(res) {
			showInfoBox("bg-danger", "error while deleting product", false);
		});
	}

	function showInfoBox(boxClass, boxText, hideTable) {
		$scope.infoBoxClass = boxClass;
		$scope.showInfoBox = true;
		$scope.infoBoxInnerText = boxText;
		$scope.hideProductTable = hideTable;
	}

});