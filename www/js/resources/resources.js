//resources.js

app.factory('PostResource', ['$resource', function($resource){
  return $resource('http://www.brownlog.com/api/venues/:vId/stalls/:stallId/msgs/:mId', 
    {vId: 0},
    {
      fetchSinglePost: {method: 'GET'},
      fetchPosts: {method: 'GET'},
      createPost: {method: 'POST'}
    });
}]);

app.factory('VenuesResource', ['$resource', function($resource){
	return $resource('http://www.brownlog.com/api/venues/:vId',
		{},
		{
			createVenue: {method: 'POST'}
		});
}]);