app.controller('StallProfileController', ['$scope', '$routeParams', '$window', 'PostResource', function($scope, $routeParams, $window, PostResource) {
	$scope.stallID = $routeParams.stallID;

	$scope.stallName = 'Royal Toilet of Sir Jonathan Poon';
	$scope.stallDesc = 'This is the toilet of Sir Jonathan Poon. In the 20 year history of this toilet, it has been used thousands of times. Attempts to renovate this toilet has been denied by Sir Jonathan Poon. It may not function as well as modern toilets, but it has the blessings of Sir Johnathan Poon. Use with caution.';
	$scope.ratingNum = 3;
	$scope.ratingDesc = 'Not Shitty';

	$scope.posts = [
		{
			content: 'This is a nice post wassup yolo swag 123 hahha',
			author: 'Anonymous',
			date: 'March 20'
		}, 
		{
			content: 'Ken Li, Deeedodeebododoasdfajdlf lololool',
			author: 'Ken Li',
			date: 'July 3'
		}, 
	{
			content: 'This is a nice post wassup yolo swag 123 hahha',
			author: 'Joyce Wang',
			date: 'August 10'
		}
	  ];

	$scope.scrollYPos = 0;
	$scope.prevYPos = 0;
	$scope.scrollingUp = false;

  	$scope.detectScrollDir = function (){
  		var prevScrollingUp = $scope.scrollingUp;
  		$scope.scrollYPos = $window.scrollY;
  		if ($scope.scrollYPos < $scope.prevYPos){
  			$scope.scrollingUp = true;
  		}
  		else if ($scope.scrollYPos - $scope.prevYPos > 10){
  			$scope.scrollingUp = false;
  		}
  		if (prevScrollingUp != $scope.scrollingUp){
  			$scope.$apply();
  		}
  		console.log($scope.scrollingUp);
  		$scope.prevYPos = $scope.scrollYPos;

  	};

  	angular.element($window).bind('scroll', $scope.detectScrollDir);
	
	PostResource.fetchPosts({stallId: $scope.stallID}, function(posts){
		$scope.posts = posts;
		console.log(posts);
	});

  }]);
