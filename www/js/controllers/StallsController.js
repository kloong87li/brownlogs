app.controller('StallsController', ['$scope', '$window', 'StallsResource',
function($scope, $window, StallsResource) {
  $scope.filter = "all";

  $scope.setFilter = function(filter) {
    $scope.filter = filter;
    filterStalls();
  }

  StallsResource.fetchStalls({}, function(response){
    $scope.allStalls = response.stalls;
    filterStalls();
  });

  function filterStalls() {
    switch ($scope.filter) {
      case 'all':
        $scope.stalls = $scope.allStalls;
        break;
      default:
        $scope.stalls = $scope.allStalls.filter(function(el){
          return el.gender === $scope.filter;
        })
    }
  }

  $scope.goToStall = function(stall) {
    $window.location.href = "#/stall/" + stall.id;
  }

	
}]);
