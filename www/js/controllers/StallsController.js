app.controller('StallsController', ['$scope', '$window', 'StallsResource',
function($scope, $window, StallsResource) {

  StallsResource.fetchStalls({}, function(response){
    console.log(response);
    $scope.stalls = response.stalls;
  });

  $scope.goToStall = function(stall) {
    $window.location.href = "#/stall/" + stall.id;
  }

	
}]);
