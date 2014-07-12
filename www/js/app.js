var app = angular.module('brownLogApp', ['ngRoute', 'ngResource']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainController'
      })
      .when('/browseStalls', {
        templateUrl: 'partials/browseStalls.html',
        controller: 'MainController'
      })
      .when('/stall/:stallID', {
        templateUrl: 'partials/StallProfile.html',
        controller: 'StallProfileController'
      })
      .when('/draw', {
        templateUrl: 'partials/canvas.html',
        controller: 'CanvasController'
      })
  }]);

app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);

app.factory('PostResource', ['$resource', function($resource){
  return $resource('/api/venues/:vId/stall/:stallId/msg', 
    {vId: 0},
    {
      fetchPosts: {method: 'GET'},
      createPost: {method: 'POST'}
    });
}]);

angular.element(document).ready(function() {
      angular.bootstrap(document, ['brownLogApp']);
  });
