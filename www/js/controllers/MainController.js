app.controller('MainController', ['$scope', 'StallsResource', function($scope, StallsResource) {
      $scope.helloWorld = 'Hello World!';

      StallsResource.fetchStalls({}, function(response){
        var total = response.stalls.length;
        $scope.randomStall = response.stalls[Math.round(Math.random() * (total-1))].id;
      });

  }]);




