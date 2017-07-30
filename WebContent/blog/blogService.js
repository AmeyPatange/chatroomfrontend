app.factory('blogService' , blogService);

function blogService($http)
{
	var serv = {};
	var baseUrl = 'http://localhost:8085/chatroom'
	serv.post = function(blog)
	{
		return $http.post( baseUrl+"/postBlog", blog)
	}
	
	serv.getPendingBlogs= function()
	{
		return $http.get(baseUrl+"/getAllBlog");
	}
	
	serv.approve=function(blogid, enable)
	{
		return $http.get(baseUrl+"/enableBlog/?blogid="+blogid+"&enable="+enable);
	}
	
	serv.getAllValidBlogs=function()
	{
		return $http.get(baseUrl + "/getAllValidBlogs");
	}
	
	serv.getAllBlogs= function()
	{
		return $http.get(baseUrl + "/getBlogsWrittenByUser");
	}
	
	serv.deleteBlog= function(blogid)
	{
		return $http.get(baseUrl + "/deleteBlog/?blogid="+blogid);
	}
	
	serv.updateBlog = function(blog)
	{
		return $http.post(baseUrl + "/updateBlog" , blog);
	}
	
	serv.getComments= function(id)
	{
		return $http.get(baseUrl + "/getAllComment/?blogid="+id);
	}
	
	serv.addComment= function(cmt)
	{
		return $http.post(baseUrl + "/addComment" , cmt);
	}
	
	serv.getBlogsFromEmail=function(email)
	{
		return $http.get(baseUrl + "/blogsBy/?email="+email);
	}
	
	return serv;
}