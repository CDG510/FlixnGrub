myApp.factory('searchFactory', function ($http) {
		var movies = [];
		var Food = [];
		var factory = {};

		factory.searchMovie = function (query, callback){
			//  $http.get('/searchMovie', post).success(function(movie){
			//  	movies = movie;
			//  	callback(movies);
			//  })
		}

		factory.searchYelp = function(query, callback){
			// $http.get("/searchYelp", query).success(function(food){
			// 	Food = food;
			// 	callback(food);
			// })
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
