var app = angular.module('brownLogApp', ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/test.html',
        controller: 'MainController'
      });
  }]);

app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);

angular.element(document).ready(function() {
      angular.bootstrap(document, ['brownLogApp']);
  });