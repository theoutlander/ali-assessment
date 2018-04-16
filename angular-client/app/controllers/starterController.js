angular.module('pokemon.controllers', ['pokemon.services'])
.controller('StarterController', function($scope, StarterFactory) {
  $scope.starter = 'hi from angular!';
  console.log('Should be 15', StarterFactory.sampleFunction(10));
});
