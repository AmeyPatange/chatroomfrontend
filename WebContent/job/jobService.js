app.factory('jobService' , main);

function main($http)
{
	var jobs= {};
	var baseUrl = "http://localhost:8085/chatroom";
	
	jobs.allJobs=function()
	{
		return $http.get(baseUrl + "/getJobs");
	}
	
	jobs.applyForJob=function(id)
	{
		return $http.get(baseUrl +"/applyForJob/" +id);
	}
	
	jobs.check=function()
	{
		return $http.get(baseUrl + "/checkIfApplied");
	}
	
	jobs.addJob=function(job)
	{
		return $http.post(baseUrl + "/registerjob", job);
	}
	
	jobs.pendingJobs=function()
	{
		return $http.get(baseUrl + "/alljobsforadmin");
	}
	
	jobs.enableJob=function(id , status)
	{
		return $http.get(baseUrl + "/validateJob/?id="+id+"&status="+status);
	}
	return jobs;
}