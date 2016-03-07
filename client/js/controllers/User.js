myApp.controller('UsersController', function ($scope, $location, $routeParams, searchFactory, geolocation) {

		$scope.Users = [];
		$scope.advancedMovieSearch = false
		$scope.advanedFoodSearch = false;



		$scope.searchBoth = function() {
			console.log("roulette1")
			geolocation.getLocation().then(function(data){
		  $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
		  	console.log($scope.coords)
			searchFactory.searchYelp({lat: $scope.coords.lat,
				long: $scope.coords.long,
				term: "food",
				limit: 5,
				actionlinks: true  }, function(food){
					console.log(food)
		});
			// searchFactory.searchMovie({stuff: "stuff"}, function(movie){
			// 	$scope.movie = movie
			// 	//need to get location OR request from user in input field
			//
			// })
		};


		$scope.advancedMovieSearch = function() {

		}

		// $scope.advanedFoodSearch = function() {
		//
		// }

		// $scope.openMovieSearch = function(){
		// 	$scope
		// }
		//
		// $scope.addUser = function(){
		// 	 user = {name: $scope.newUser.name};
		// 	 UsersFactory.addUser(user, function(data){
		//
		// 	 	$scope.user = data;
		// 	     //once added, go the /dashboard and take the $scope.newUser too
        //          $location.path('/dashboard').search({user: $scope.newUser.name});
		// 	 });
		// }
	})
