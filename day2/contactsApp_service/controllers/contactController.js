app.controller('ContactController', ContactController);
function ContactController ($scope, contactData, officeData) {
  $scope.contacts = contactData;
  $scope.officeInfo = officeData.getOfficeAdd('asda');
}
