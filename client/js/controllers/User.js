myApp.controller('simpleController', function ($scope, $location, $state, searchFactory, geolocation) {

		// $scope.Users = [];
		$scope.noMoreFood = false
		$scope.advancedMovieSearch = false
		// $scope.advanedFoodSearch = false;

		$scope.findCoords = function(){
			if(!$scope.coords){
				searchFactory.userCoords( function(data){
					$scope.coords = data;
				})
			}
		}();
		$scope.advanced = function(){
			$state.go('/advanced');
		};



		$scope.searchBoth = function() {
		  	searchFactory.searchYelp({lat: $scope.coords.lat,
				long: $scope.coords.long
			  }, function(food){
					$scope.food= food.businesses;
					$scope.foundFood = food.businesses[0]
			})
			searchFactory.searchMovie({title: "food"}, function(movie){
				$scope.movies = movie
				$scope.movie = $scope.movies[0]
		//need to get location OR request from user in input field
	})

	};

		$scope.nextFood = function() {
			var current = $scope.food.indexOf($scope.foundFood)
			if(current === $scope.food.length-2){
				$scope.noMoreFood = true;
				// $scope.foundFood = $scope.food[0]
			} else {
			$scope.foundFood = $scope.food[current+1]
			}
		}

		$scope.nextMovie = function() {
			var current = $scope.movie.indexOf($scope.foundFood)
			if(current === $scope.food.length-2){
				$scope.noMoreFood = true;
				// $scope.foundFood = $scope.food[0]
			} else {
			$scope.foundFood = $scope.food[current+1]
			}
		}


	})
