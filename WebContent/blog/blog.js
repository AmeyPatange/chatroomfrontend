app.controller('blogCtrl' , blogMethod);

function blogMethod(blogService , $state ,$location , $anchorScroll , $scope)
{
	var self = this;
	
	self.list= {};
	self.init= function(num)
	{
		if( num== 1)
		{
			blogService.getPendingBlogs()
			.then(function(response){
				self.list = response.data;
			} , function(response){
				alert(response.data.message);
			})
		}
		else if(num==2)
		{
			blogService.getAllValidBlogs()
			.then(function(response){
				self.list = response.data;
			}, function(response){
				alert(response.data.message);
			})
		}
		else if(num==3)
		{
			blogService.getAllBlogs()
			.then(function(response){
				console.log("List");
				self.list= response.data;
			} , function(response){
				alert(response.data.message);
			})
		}
		
		num=0;
	}
	
	
	self.post={}
	self.postBlog= function()
	{
		console.log(self.post);
		blogService.post(self.post)
		.then(function(response){
			console.log("Done");
			alert("Blog Posted.Waiting For Approval From Admin");
		} ,function(response){
			console.log("Failed");
			alert("Blog Posting Failed.Please Try Again");
		} )
	}
	self.blogFields = {};
	self.display = false;
	self.modal=function(blogData)
	{
		self.blogFields = blogData;
		self.display = true;
	}
	
	self.approveBlog=function(blogid , enable)
	{
		
		blogService.approve(blogid, enable)
		.then(function(response){
			self.display=false;
			$state.transitionTo("user.getAllBlogs");
			alert("Successful!");
		}, function(response){
			$state.go("home");
			var err = response.data.message;
			alert(err);
			
		})
		
	}
	
	self.listEmpty= function()
	{
		var li = self.list;
		if( li== "")
			return true;
		else 
			false;
	}
	
	self.delete=function(blogid)
	{
		if(confirm("Do You Want To Delete This Blog Permanently?"))
			{
			blogService.deleteBlog(blogid)
			.then(function(response){
				$state.transitionTo("home");
				alert("Deleted Blog.")
			} , function(response){
				alert(response.data.message);
			})
			}
	}
	
	self.modalDis = false;
	self.modalDisplay=function(details)
	{	
		self.list1 = details;
		self.modalDis = true;
	}
	
	self.closeModal=function()
	{
		self.modalDis = false;
	}
	
	self.updateBlog=function()
	{
		console.log(self.list1);
		console.log(self.list1.blogContent)
		blogService.updateBlog(self.list1)
		.then(function(response){
			$state.transitionTo("user.getAllBlogs");
		} ,function(response){
			if(response.status === 401)
				{
					$state.go("");
					alert(response.data.mesaage);
				}
		})
		
	}
	self.comment = {};
	self.getComments= function(id)
	{
		blogService.getComments(id)
		.then(function(response){
			self.comment = response.data;
			self.dis = self.comment;
			if(self.comment== "")
				{
					self.dis = "No Comments";
					self.comment= "No Comments";
				}
			console.log(self.comment);
		}, function(reponse){
			self.comment = "No Comments";
			alert(response.data.message + " asdadadasd");
		})
		return true;
	}
	
	self.cmt= 
	{"blogid": '',
	"blogComment": ''}; 
	
	self.addComment= function(blogid, blogComment)
	{
		
		alert(blogid+" " +blogComment);
		if(blogComment == undefined || blogComment == "" || blogComment == 0 )
			{
			alert(false);
			return;
			}
		else
			{
				self.cmt.blogid = blogid;
				self.cmt.blogComment= blogComment;
				blogService.addComment(self.cmt)
				
			}
	}
	
}

