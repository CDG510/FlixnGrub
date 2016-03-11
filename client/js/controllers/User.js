myApp.controller('UsersController', function ($scope, $location, $routeParams, searchFactory, geolocation) {

		$scope.Users = [];
		$scope.noMoreFood = false
		$scope.advancedMovieSearch = false
		// $scope.advanedFoodSearch = false;
		geolocation.getLocation().then(function(data){
			$scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
			console.log($scope.coords)
		});


		$scope.searchBoth = function() {
		  	searchFactory.searchYelp({lat: $scope.coords.lat,
				long: $scope.coords.long
			  }, function(food){
					console.log(food)
					$scope.food= food.businesses;
					console.log($scope.food)

					$scope.foundFood = food.businesses[0]
			})
			searchFactory.searchMovie({title: "food"}, function(movie){
				$scope.movie = movie
				console.log(movie)
		//need to get location OR request from user in input field
	})

		};


		// $scope.advancedMovieSearch = function() {
		//
		// }

		$scope.nextFood = function() {
			var current = $scope.food.indexOf($scope.foundFood)
			if(current === $scope.food.length-2){
				$scope.noMoreFood = true;
				// $scope.foundFood = $scope.food[0]
			} else {
			$scope.foundFood = $scope.food[current+1]
			}
		}

		// $scope.advanedFoodSearch = function() {
		//
		// }

		// $scope.openMovieSearch = function(){
		// 	$scope
		// }
		//

	})
