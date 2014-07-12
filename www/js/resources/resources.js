//resources.js

app.factory('PostResource', ['$resource', function($resource){
  return $resource('http://www.brownlog.com/api/venues/:vId/stalls/:stallId/msgs/:msgId/:voteAction', 
    {vId: 0, stallId: '@stallId', msgId: '@msgId', voteAction: '@voteAction'},
    {
      fetchSinglePost: {method: 'GET'},
      fetchPosts: {method: 'GET'},
      createPost: {method: 'POST'},
      votePost: {method: 'POST'}
    });
}]);

app.factory('VenuesResource', ['$resource', function($resource){
	return $resource('http://www.brownlog.com/api/venues/:vId',
		{},
		{
			createVenue: {method: 'POST'}
		});
}]);

app.factory('StallsResource', ['$resource', function($resource){
  return $resource('http://www.brownlog.com/api/venues/:vId/stalls/:stallId',
    {vId: 0, stallId: '@stallId'},
    {
      fetchSingleStall: {method: 'GET'},
      fetchStalls: {method: 'GET'}
    });
}]);