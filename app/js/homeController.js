
fullStackApp.controller("homeController", function($scope, sharedProperties, $state, $http) {
	
	$scope.infoBoxClass = "";
	$scope.showInfoBox = false;
	$scope.infoBoxInnerText = "";
	$scope.hideProductTable = false;

	$http({
		method: "GET",
		url: "/product"
	}).then(function success(res) {
		$scope.productList = res.data;

	}, function error(res) {
		showInfoBox("bg-danger", "Error while loading Products", true);
	});

	$scope.logoutClick = function(){
		sharedProperties.logoutUser();
		$state.go("login");
	}

	function showInfoBox(boxClass, boxText, hideTable) {
		$scope.infoBoxClass = boxClass;
		$scope.showInfoBox = true;
		$scope.infoBoxInnerText = boxText;
		$scope.hideProductTable = hideTable;
	}

});