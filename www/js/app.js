var app = angular.module('brownLogApp', ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainController'
<<<<<<< HEAD
      }).
      when('/browseStalls', {
        templateUrl: 'partials/browseStalls.html',
        controller: 'MainController'
=======
      })
      .when('/stall/:stallID', {
        templateUrl: 'partials/StallProfile.html',
        controller: 'StallProfileController'
>>>>>>> dd5e0b90d18bc51df17bf898199a4e71f0a96b3d
      });
  }]);

app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);

angular.element(document).ready(function() {
      angular.bootstrap(document, ['brownLogApp']);
  });
