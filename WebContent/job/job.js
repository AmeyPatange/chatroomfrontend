app.controller('jobCtrl' , jobMain);

function jobMain(jobService , $state)
{
	var self = this;
	self.list={};
	
	
	
	self.init=function(num)
	{
		if(num== 1)
		{
			jobService.allJobs()
			.then(function(response){
				self.list= response.data;
				console.log(self.list);
				self.chkAllAppliedJobs();
			} , function(response){
				alert("You Need To Login");
			})
		}
	}
	self.job={};
	
	self.apply=function(id)
	{
		console.log(id);
		jobService.applyForJob(id)
		.then(function(response) {
			self.chkAllAppliedJobs();
		} , function(response){
			alert("Please Try Again!");
		})
		
	}
	self.completeJobListForUser= {};
	self.chkAllAppliedJobs= function()
	{
		jobService.check()
		.then(function(response){
			self.completeJobListForUser= response.data;
			console.log(self.completeJobListForUser);
		}, function(response){
			alert("You Are Not Logged In!");
		})
	}
	
	self.ifApplied=function(id)
	{
		var li = self.completeJobListForUser;
		var jobid;
		for( var i=0; i < li.length; i++ )
		{	jobid = li[i];
			if(id == jobid)
				return true;
		}
		return false;
	}
	
	self.addJob=function()
	{
		jobService.addJob(self.job)
		.then(function(response){
			$state.go("user.allJob");
		} , function(response){
			alert("You are Not Logged In!");
		})
		
	}
	
	self.penList= {};
	self.pendingJobs=function()
	{
		jobService.pendingJobs()
		.then(function(response){
			self.penList = response.data;
		} , function(response){
			alert("You Are Not Logged In!");
		})
	}
	
	self.enableBlog=function( id , status)
	{
		jobService.enableJob(id, status)
		.then(function(response){
			self.pendingJobs();
		}, function(response){
			alert("You Are Not Logged In!");
		})
	}
	
}