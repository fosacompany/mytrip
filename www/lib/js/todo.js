var app = angular.module('todo', ['ionic']);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';

  $scope.recherche = function() {

    alert('teste');
  }
});