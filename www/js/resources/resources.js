//resources.js

app.factory('PostResource', ['$resource', function($resource){
  return $resource('/api/venues/:vId/stall/:stallId/msg', 
    {vId: 0},
    {
      fetchPosts: {method: 'GET'},
      createPost: {method: 'POST'}
    });
}]);