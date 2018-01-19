// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
   var app = angular.module('myApp',['ngRoute','ngCookies']);

   app.config(function ($routeProvider,$locationProvider) {
	    $locationProvider.hashPrefix('');
	    $routeProvider

            // route for the home page
        .when('/register', {
            templateUrl : 'views/register.html',
            controller  : 'UserController'
        })

            // route for the about page
            .when('/login', {
                templateUrl : 'views/Login.html',
                controller  : 'UserController'
            })
            .when('/addblog', {
		        templateUrl:'views/blogform.html', //V to Controller
		        controller:'BlogPostController'
	        })
	        .when('/getblogs',  {
		        templateUrl:'views/blogslist.html',//Controller to V
		        controller:'BlogPostController'
	        })
	        .when('/admin/getblog/:id',{
		        templateUrl:'views/approvalform.html',
		        controller:'BlogPostDetailsController'
	        })
	        .when('/getblog/:id',{
		        templateUrl:'views/blogdetails.html',
		        controller:'BlogPostDetailsController'
	})
	           .when('/savejob',{
	        		templateUrl:'views/jobform.html',
	        		controller:'JobController'
	        	})
	        	.when('/getalljobs',{
	        		templateUrl:'views/jobtitle.html',
	        		controller:'JobController'
	        	})
	        	
	        	
	        	.when('/profilepic', {
		        templateUrl : 'views/profilepic.html'
	           }) 
	         .when('/edituserprofile', {
		     templateUrl : 'views/updateprofile.html',
		     controller : 'UserController'
	})
.when('/suggestedusers',{
		templateUrl:'views/suggestedusers.html',
		controller:'FriendController'
	})
	.when('/pendingrequests',{
		templateUrl:'views/pendingrequests.html',
		controller:'FriendController'
	})
	.when('/friends',{
		templateUrl:'views/friendslist.html',
		controller:'FriendController'
	})
            // route for the contact page
            .when('/Home', {
                templateUrl : 'views/Home.html',
                controller  : 'HomeController'
            })
            
  .when('/chat',{
		templateUrl:'views/chat.html',
		controller:'ChatCtrl'
	})
})