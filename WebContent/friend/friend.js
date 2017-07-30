app.controller('friendCtrl' ,main );

function main(FriendService , $state , $stateParams , blogService)
{
	var self = this;
	
	self.data= {};
	self.init = function(num)
	{
		if(num===1)
		{	FriendService.getFriends()
			.then( function(response){
				self.data = response.data;
				console.log(self.data);
			} ,function(){
				$state.transitionTo("home");
			})
		}
		else if(num==2)
		{	console.log("haha");
			FriendService.pendingRequests()
			.then(function(response){
				self.list = response.data;
				console.log(self.list);
			} , function(response) {
				alert("Something Went Wrong!");
			})
		}
		else if(num==3)
		{
			console.log("hihi");
			FriendService.allfriends()
			.then(function(response){
				self.allFriends= response.data;
				console.log(self.allFriends);
			} , function(response){
				alert(response.data.message);
			})
		}
	}
	
	self.addRequest=function(user)
	{
		FriendService.addFriend(user[0])
		.then(function(response){
			self.init(1);
		} , function(response){
			alert("Failed To Add Friend");
		})
	}
	
	self.pendingRequest=function()
	{
		FriendService.pendingRequests()
		.then(function(response){
			self.data = response.data;
			console.log(self.data + "Hihihiiiiii");
			
		} , function(response) {
			alert("Something Went Wrong!");
		})
	
	}
	
	self.profileM= false;
	self.profile=function(details)
	{
		self.details = details;
		blogService.getBlogsFromEmail(details[0])
		.then(function(response){
			self.details.blogs= response.data;
			console.log(self.details.blogs.length);
		}, function(response){
			alert("You Are Not Logged In!");
		})
		self.profileM= true;
	}
	
	self.addFriend=function(email, status)
	{
		console.log(email + " "+ status);
		FriendService.updateRequest(email, status)
		.then(function(response){
			self.init(2);
		}, function(response){
			alert("Something Went Wrong");
			self.init(2);
		})
	}
	
	
	
}