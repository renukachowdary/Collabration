app.controller("HomeController",function($rootScope,$location,HomeService){
	
	function getNotification(){
		
		HomeService.getNotificationNotViewed().then(function(response){
		$rootScope.notificationNotViewed=response.data
		$rootScope.notficationNotViewedLength=$rootScope.notificationNotViewed.length
		},function(response){
			if(response.status==401)
				$location.path('/login')
				
		})
		HomeService.getNotificationViewed().then(function(response){
		$rootScope.notificationViewed=response.data	
		},function(response){
			if(response.status==401)
				$loaction.path('/login')
		})
			
		}
		getNotification()
		$rootSCope.updateLength=function(){
			$rootScope.notificationNotViewedLength=0
		}
		
		$rootScope.updateNoifiation=function(notificationId){
			HomeService.updateNotification(notificationId).then(function(response){
				getNotification()
			},function(response){
				if(response.status==401)
					$location.path('/login')
			
			})
			
		}
	
	
	
	
})