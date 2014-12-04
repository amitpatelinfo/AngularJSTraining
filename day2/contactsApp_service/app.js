var app = angular.module('ContactApp',[]);
app.config(['contactDataProvider', function(contactDataProvider){
  contactDataProvider.setFilterAddress('Austin');
}]);