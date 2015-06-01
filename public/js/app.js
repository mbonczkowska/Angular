var app = angular.module('MyApp', ['ngRoute', 'app.directives.todoList']).
    config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl: 'login.html',
		controller: 'LoginController'
	});
	$routeProvider.when('/home', {
		templateUrl: 'home.html',
		controller: 'HomeController'
	});
	
	$routeProvider.otherwise({ redirectTo: '/login' });
}]);


app.factory("AuthenticationService", function($location){
	return {
		login: function(credentials) {
		    if(credentials.username === "admin"){
				$location.path("/home");
			}
		},
		logout: function(){
			$location.path("/login");
		}
	};	
});


app.controller('LoginController', function($scope, AuthenticationService){
	$scope.credentials = { username: "", password: ""};
	$scope.login = function(){
		AuthenticationService.login($scope.credentials);
	};
});

app.controller('HomeController', function($scope, AuthenticationService){
	$scope.title = "toDo";
	$scope.message ="Add what are you going to do";
	
	$scope.logout = function(){		
			AuthenticationService.logout();		
	};
	
});

app.controller('todoController',['$scope',function($scope){

	$scope.todos = [
		{"title":"Build a todo app","done":false}
	];
	
	$scope.addTodo = function(){
		$scope.todos.push({'title': $scope.newtodo,'done':false})
		$scope.newtodo = '';
	}
	$scope.clearComplete = function(){
		$scope.todos = $scope.todos.filter(function(item){
			return !item.done
		});
	}
}]);
angular.module('app.directives.todoList',[])
.directive('todoList',function(){
	
	return {
		restrict: 'E',
		scope: {
			todo:'='
		}, 
		template: "<span>{{todo.title}}</span>",
		controller: function($scope){
		
		}
	};
});
