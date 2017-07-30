app.factory('FriendService' , serviceMethod);

function serviceMethod($http)
{
	var baseUrl = 'http://localhost:8085/chatroom'
	var friends = {}
		
		friends.getFriends= function()
		{
			return $http.get(baseUrl+'/suggestFriends');
		}
		
		friends.addFriend=function(email)
		{
			return $http.get(baseUrl + '/addFriend/?useremail='+email);
		}
		
		friends.pendingRequests= function()
		{
			return $http.get(baseUrl + '/pendingRequests' );
		}
		
		friends.updateRequest= function(email, status)
		{
			return $http.get(baseUrl + '/updateFriend/?email='+email+'&status='+status);
		}
		
		friends.allfriends=function()
		{
			return $http.get(baseUrl + '/getAllFriends');
		}
	return friends;

}