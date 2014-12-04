var app = angular.module('ContactApp',['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
    .when('/contacts', {
      templateUrl: 'contactsList.html',
      controller: 'ContactController'
    })
    .when('/contacts/table', {
      templateUrl: 'contactsTable.html',
      controller: 'ContactController'
    })
    .otherwise({
        redirectTo: '/contacts'
    });
});