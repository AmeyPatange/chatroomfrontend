app.controller('loginCtrl' , loginController);

function loginController($rootScope , loginService , $state, $cookieStore)
{
	var self = this;	
	self.error = "";
	self.status = '';
	self.emailPattern= /[a-zA-Z0-9]+@[a-zA-Z0-9]+[.][a-z]{3}/;
	self.datePattern = /(0[1-9]|1[0-9]|2[0-9]|3[01])(\/|-)((0[1-9])|(10|11|12))(\/|-)((19)|(20))[0-9][0-9]/;
	self.contactPattern = /[789][0-9]{9}/;
	self.cityPattern = /[A-Za-z]{2}/;
	self.login = function()
	{
		self.error="";
		loginService.tryToLogInUser(self.loginForm)
		.then(function(response){
			self.data = response.data;
			console.log(self.data);
			$cookieStore.put("UserData", self.data);
			$rootScope.userDetail = response.data;
			console.log($rootScope.userDetail.fname + "  details");
			$state.go("user.account");
		}, function(response){
			self.error = response.data.message;
		})
			
	}
	
	self.check= function()
	{
		console.log("Hii");
		if( self.registerForm.password  === self.confirm)
		{
			console.log("Bye");
			return false;
		}
		else
			return true;
	}
	
	self.register= function()
	{
		console.log(self.registerForm);
		loginService.tryToRegisterUser(self.registerForm)
		.then(function(response){
			self.error ="Successfully Register! Log In To Continue.";
			self.registerForm = {};
				
		},function(response){
			self.error = response.data.message;
			self.registerForm = {};
		});
		
	}
	
	self.validateDate= function()
	{
		console.log(self.registerForm);
		console.log(self.registerForm.dateOfBirth);
	}
	
	self.displayLogin = true;
	self.hide= function()
	{
		var temp = self.displayLogin;
		self.displayLogin = !temp;
	}
	
	self.displaySignUp = true;
	self.hideSignUp= function()
	{
		var temp = self.displaySignUp;
		self.displaySignUp = !temp;
	}
	
	self.user = {}
	self.displayModal = false;
	self.phoneVerify = false;
	self.err = '';
	self.recoverAccount= function()
	{
		loginService.tryToRecover(self.recoverEmail)
		.then(function(response){
			self.phoneVerify = true;
			self.user = response.data;
		} ,function(response){
			self.err = "Not A Valid User!";
		} );
	}
	
	self.recoverCheck= function()
	{
		var enteredPh = self.recoverPhone;
		var ph = self.user.mobile;
		if(ph === enteredPh)
		{
			console.log("Matched");
			alert("Please Login With Your Password: "+self.user.password);
			
		}
		else
		{
			console.log("Not Matched");
			alert("Contact Number Not Matched");
		}
		self.displayModal = false;
		self.phoneVerify = false;
		self.recoverEmail= "";
		self.recoverPhone= "";
	}
	
}