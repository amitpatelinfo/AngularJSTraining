/*
angular.module('ContactApp').factory('contactData', function(){
  return [
    {name:'Adam', phone:'8798766545', address:'Pune , India', date:'1288323623006'},
    {name:'Chris', phone:'8734567889', address:'Austin, USA', date:'1388323623006'},
    {name:'Chong', phone:'9878988675', address:'Bumrah\'s , Coba', date:'1244323623006'},
    {name:'Yaoyang', phone:'9887698932', address:'Korma , Korea', date:'1458323623006'},
    {name:'Stephan', phone:'7679829134', address:'Omaha , USA', date:'1388323623006'}
    ];

});*/

angular.module('ContactApp').provider('contactData', function(){
  var filterAddress = '';

  this.$get = function(){
    var filteredContacts= [], contacts = [
      {name:'Adam', phone:'8798766545', address:'Pune', date:'1288323623006'},
      {name:'Chris', phone:'8734567889', address:'Austin', date:'1388323623006'},
      {name:'Chong', phone:'9878988675', address:'Bumrah\'s , Coba', date:'1244323623006'},
      {name:'Yaoyang', phone:'9887698932', address:'Korma , Korea', date:'1458323623006'},
      {name:'Stephan', phone:'7679829134', address:'Omaha , USA', date:'1388323623006'}
    ];
    for(var i = 0; i< contacts.length; i++){
      if(contacts[i].address === filterAddress){
        filteredContacts.push(contacts[i]);
      }
    };
    return filteredContacts;
  };

  this.setFilterAddress = function(address){
    filterAddress = address;
  };

});