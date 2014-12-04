angular.module('ContactApp').controller('ContactController', ContactController);
function ContactController ($scope, contactData) {
  $scope.contacts = contactData;
  $scope.resetForm = function(){
    $scope.reset();

  };
}
