
app.controller("userCtrl" , userMethod);

function userMethod( $rootScope ,$scope , $state , $cookieStore , userService, $http)
{
	var self = this;
	self.userData = $cookieStore.get("UserData");
	
	self.copy= {};
	self.pro= false;
	self.prof=function()
	{
		self.copy= self.userData;
		self.pro = true;
	}
	
	self.admin= function()
	{
		var role =self.userData.userIdentity;
		if( role == 'ROLE_ADMIN')
			return true;
		else 
			return false;
	}
	
	self.logout = function()
	{
		userService.logout()
		.then(function(response){
			$state.go("home");
			$cookieStore.remove("UserData");
		}, function(response){
			$state.go("home");
		})
	}
	
	self.update= function()
	{
		console.log(self.copy);
		userService.update(self.copy)
		.then(function(response){
			self.userData = self.copy;
			$cookieStore.remove("UserData");
			$cookieStore.put("UserData" , self.userData);
			$state.go("user.updateBlog");
		})
		self.pro= false;
	}
	
}