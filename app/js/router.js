angular.module("app").config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/home', {
    templateUrl: 'main.html',
    controller: 'MainController'
  });

  $routeProvider.otherwise({ redirectTo: '/home' });

});
