var app = angular.module('zenbeatApp', []);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});
