app.controller('StallProfileController', ['$scope', '$routeParams', '$window', 'PostResource', '$swipe',
function($scope, $routeParams, $window, PostResource, $swipe) {
	$scope.stallID = $routeParams.stallID;

	$scope.stallName = 'Royal Toilet of Sir Jonathan Poon';
	$scope.stallDesc = 'This is the toilet of Sir Jonathan Poon. In the 20 year history of this toilet, it has been used thousands of times. Attempts to renovate this toilet has been denied by Sir Jonathan Poon. It may not function as well as modern toilets, but it has the blessings of Sir Johnathan Poon. Use with caution.';
	$scope.ratingNum = 3;
	$scope.ratingDesc = 'Not Shitty';

	$scope.posts = [
		{
			text: 'This is a nice post wassup yolo swag 123 hahha',
			author: 'Anonymous',
			date: 'March 20',
      upvotes: 5,
      downvotes: 4,
      voteStatus: null
		}, 
		{
			text: 'Ken Li, Deeedodeebododoasdfajdlf lololool',
			author: 'Ken Li',
			date: 'July 3',
      upvotes: 0,
      downvotes: 1,
      voteStatus: null
		}, 
  	{
  		text: 'This is a nice post wassup yolo swag 123 hahha',
  		author: 'Joyce Wang',
  		date: 'August 10',
      upvotes: 9900,
      downvotes: 4,
      voteStatus: null
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
		$scope.prevYPos = $scope.scrollYPos;
	};

  // PostResource.fetchPosts({stallId: $scope.stallID}, function(posts){
  //   $scope.posts = posts;
  //   console.log(posts);
  // });

  $scope.votePost = function(post, status) {
    if (post.voteStatus === status)
      post.voteStatus = null;
    else
      post.voteStatus = status;
    updatePostVotes(post, status);
  }

  function updatePostVotes(post, status) {
    if (post.status === 'upvote')
      post.upvotes++;
    else
      post.downvotes++;
  }

	angular.element($window).bind('scroll', $scope.detectScrollDir);
	
	PostResource.fetchPosts({stallId: $scope.stallID}, function(response){
		$scope.posts = response.msgs;
    console.log(response);
	});

}]);
