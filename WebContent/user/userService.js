app.factory('userService' , insideService);

function insideService($http)
{
	var baseUrl = 'http://localhost:8085/chatroom'
	var userService = {};	
	
	userService.logout = function()
	{
		return $http.get(baseUrl+"/Logout");
	}
	userService.update= function(user)
	{
		return $http.post(baseUrl +"/updateUser" , user);
	}
	
	return userService;
}