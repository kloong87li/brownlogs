var app = angular.module('brownLogApp', []);

app.controller('MainController', ['$scope', function($scope) {
      $scope.helloWorld = 'Hello World!';
  }]);

angular.element(document).ready(function() {
      angular.bootstrap(document, ['brownLogApp']);
	});
