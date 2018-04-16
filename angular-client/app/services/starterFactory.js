angular.module('pokemon.services', [])
.factory('StarterFactory', function() {
  return {
    sampleFunction: function(num) {
      return num + 5;
    }
  };
});
