app.controller('StallProfileController', ['$scope', '$routeParams', '$window', 'PostResource', 'StallsResource', '$swipe',
function($scope, $routeParams, $window, PostResource, StallsResource, $swipe) {
	var ratingMap = [
    'Hella shitty.',
    'Emergencies only.',
    'Better than a porta-potty.',
    'Meh.',
    'Would return.',
    'Porcelain throne.'
  ]

  $scope.stallID = $routeParams.stallID;

  StallsResource.fetchSingleStall({stallId: $scope.stallID}, function(response){
    $scope.stallName = response.name;
    $scope.stallFloor = response.floor;
    $scope.ratingNum = response.rating;
    $scope.stallImage = response.pictureUrl;
    $scope.ratingDesc = ratingMap[Math.round(response.rating)];
  });

	// $scope.stallName = 'Royal Toilet of Sir Jonathan Poon';
	// $scope.stallDesc = 'This is the toilet of Sir Jonathan Poon. In the 20 year history of this toilet, it has been used thousands of times. Attempts to renovate this toilet has been denied by Sir Jonathan Poon. It may not function as well as modern toilets, but it has the blessings of Sir Johnathan Poon. Use with caution.';
	// $scope.ratingNum = 3;
	// $scope.ratingDesc = 'Not Shitty';

	// $scope.posts = [
	// 	{
	// 		text: 'This is a nice post wassup yolo swag 123 hahha',
	// 		author: 'Anonymous',
	// 		date: 'March 20',
 //      upvotes: 5,
 //      downvotes: 4,
 //      voteStatus: null
	// 	}, 
	// 	{
	// 		text: 'Ken Li, Deeedodeebododoasdfajdlf lololool',
	// 		author: 'Ken Li',
	// 		date: 'July 3',
 //      upvotes: 0,
 //      downvotes: 1,
 //      voteStatus: null
	// 	}, 
 //  	{
 //  		text: 'This is a nice post wassup yolo swag 123 hahha',
 //  		author: 'Joyce Wang',
 //  		date: 'August 10',
 //      upvotes: 9900,
 //      downvotes: 4,
 //      voteStatus: null
 //  	}
 //  ];

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

  $scope.votePost = function(post, status) {
    if (!post.voteStatus) {
      post.voteStatus = status;
      updatePostVotes(post, status);
    }
  }

  function updatePostVotes(post, status) {
    PostResource.votePost({stallId: $scope.stallID, msgId: post.id, voteAction: status}, 
    function(response){
      console.log(post);
      post[status + 's']++;
    });
  }

	angular.element($window).bind('scroll', $scope.detectScrollDir);
	
	PostResource.fetchPosts({stallId: $scope.stallID}, function(response){
		
    for (var i = 0; i < response.msgs.length; ++i){
      response.msgs[i].date = moment.utc(response.msgs[i].date).format("MMM DD");
    }
    $scope.posts = response.msgs;
	});

}]);
