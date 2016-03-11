myApp.factory('searchFactory', function ($http) {
		var movies = [];
		var Food = [];
		var factory = {};

		factory.searchMovie = function (query, callback){
			console.log(query)
			 $http.post('/searchMovies', query).success(function(movie){
				 console.log(movie)
			 	movies = movie;
			 	callback(movies);
			 })
		}

		factory.searchYelp = function(query, callback){
			console.log(query)
			$http.post("/searchYelp", query).success(function(food){
				console.log(food)
				for (var i = food.businesses.length -1; i>=0; i--){
					if (!food.businesses[i].eat24_url){
						food.businesses.splice(i, 1)
					}
				}
				Food = food;
				console.log('yay! left with', Food )
				callback(Food);
			})
		}

		// factory.addUser = function (user, callback){
		//
		// 	 $http.post('/newUser', user).success(function(output){
		// 	 	users.push(output);
		// 	 	callback(users);
		// 	 });
		// }
		//
		// factory.keepUser = function(callback){
		// 	$http.get('/showUsers').success(function(output){
		// 		user = output[output.length-1]
		// 		callback(user);
		// })
		// }

	return factory;
	});
