
var fullStackApp = angular.module("fullStackApp", ["ui.router"])


fullStackApp.config(function($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {
  
  	var loginState = {
    	name: 'login',
    	url: '/',
    	templateUrl: "templates/login.html",
		controller: "loginController"
  	}

  	var homeState = {
    	name: 'home',
    	url: '/home',
    	templateUrl: "templates/home.html",
		controller: "homeController"
  	}

  	var signUpState = {
    	name: 'signup',
    	url: '/signup',
    	templateUrl: "templates/signup.html",
		controller: "signUpController"
  	}

  	var productState = {
    	name: 'product',
    	url: '/product',
    	templateUrl: "templates/product.html",
		controller: "productController"
  	}

  	$urlMatcherFactoryProvider.caseInsensitive(true);
  	
  	$stateProvider.state(loginState);
  	$stateProvider.state(homeState);
  	$stateProvider.state(signUpState);
  	$stateProvider.state(productState);

	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);

})


fullStackApp.controller("indexController", function($scope) {
	$scope.angularHeader = "Your angular app is running !!!";
});

