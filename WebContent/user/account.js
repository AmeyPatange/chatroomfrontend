app.controller('accountCtrl' , account);

function account($cookieStore , $state)
{
	var self = this;
	self.userDetails = $cookieStore.get("UserData");
	
	self.getFriends = function()
	{
		$state.go("user.getFriends");
	}
	
	self.blogWrite = function()
	{
		$state.go("user.addBlog");
	}
	
}