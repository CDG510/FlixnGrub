myApp.controller('advancedController', function ($scope, $location, searchFactory) {

    $scope.noMoreFood = false
    $scope.advancedMovieSearch = false

    $scope.findCoords = function(){
        if(!$scope.coords){
            searchFactory.userCoords( function(data){
                $scope.coords = data;
                console.log($scope.coords)
            })
        }
    }();

    $scope.advancedFoodSearch = function() {
        console.log($scope.advancedFood)
    }

    $scope.openMovieSearch = function(){
    	$scope
    }
    //


})
