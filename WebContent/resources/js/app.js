var app = angular.module('myApp' , ['ui.router', 'ngCookies']);

app.config(function($stateProvider , $urlRouterProvider){
	$stateProvider
	.state("user" , {
			url:'/user',
			templateUrl: "user/user.html",
			controller : "userCtrl",
			abstract: true,
	})
	.state('home', {
			url:'/',
			templateUrl: "login/login.html"
	})
	.state("user.account", {
		url : "/account",
		templateUrl : "user/account.html",
		controller : "accountCtrl"
	})
	.state( "user.addBlog", {
		url : "/addBlog",
		templateUrl : "blog/addblog.html",
		controller : "blogCtrl"
	})
	.state( "user.getFriends", {
	
		url : "/connect",
		templateUrl : "friend/friends.html",
		controller: "friendCtrl",
	
	})
	.state("user.getAllPendingBlogs" , {
		url: "/pendingBlogs",
		templateUrl : "blog/pendingBlogs.html",
		controller : "blogCtrl"
	})
	.state("profilePic" , {
		url: "/profilePic",
		templateUrl : "user/profilePic.html",
		controller : "userCtrl"
	})
	.state("user.getAllBlogs", {
		url: "/allValidBlogs",
		templateUrl: "blog/allBlogs.html",
		controller : "blogCtrl"
	})
	.state("user.updateBlog" , {
		url: "/allBlogsByYou",
		templateUrl : "blog/updateBlog.html" , 
		controller : "blogCtrl"
	})
	.state("user.pendingRequests" , {
		url :"/friendRequests", 
		templateUrl: "friend/pendingfriend.html" ,
		controller: "friendCtrl"
	})
	.state("user.allFriends" , {
		url: "/friends",
		templateUrl : "friend/allfriend.html",
		controller : "friendCtrl"
	})
	.state("user.allJob" , {
		url:"/allJobs",
		templateUrl : "job/allJobs.html",
		controler : "jobCtrl"
	})
	.state("user.addJob" , {
		url: "/addJob",
		templateUrl : "job/addJob.html",
		controller: "jobCtrl"
	})
	.state("user.getAllPendingJobs", {
		url : "/pendingJobs",
		templateUrl : "job/pendingJobs.html",
		controller : "jobCtrl"
	})
	.state("user.chat", {
		url : "/chat",
		templateUrl : "chat/chat.html",
		controller : "ChatCtrl"
	})
	
	$urlRouterProvider.otherwise("/");
});