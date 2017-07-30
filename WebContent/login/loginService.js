app.factory('loginService',insideService );

function insideService($http , $location){
	
	var baseUrl = 'http://localhost:8085/chatroom'
	var loginService = [];
	
				loginService.tryToLogInUser = function(user)
				{
					return $http.post(baseUrl+'/authenticate',user) 
				}
				
				loginService.tryToRegisterUser = function(user)
				{
					console.log(user);
					return $http.post(baseUrl+'/addUser',user)
				}
	
				loginService.tryToRecover= function(email)
				{
					console.log(baseUrl+"/recoverAccount/"+email);
					return $http.get(baseUrl+"/recoverAccount/", {
						params : {email : email}
					})
				}
		return loginService;
}

