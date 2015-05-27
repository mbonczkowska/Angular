var app = angular.module('MyApp', ['ngRoute']).
    config(['$routeProvider', function($routeProvider) {
$routeProvider.when('/login', {
		templateUrl: 'login.html',
		controller: 'LoginController'
	});
	
	$routeProvider.otherwise({ redirectTo: '/login' });
}]);

app.controller('LoginController', function(){
});