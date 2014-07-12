app.controller('StallProfileController', ['$scope', '$routeParams', '$window', function($scope, $routeParams) {
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


 	      console.log($routeParams);
  }]);
