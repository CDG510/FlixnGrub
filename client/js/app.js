var myApp = angular.module('myApp', ['ngRoute' , 'geolocation' ]);
//other dependancies injected here
myApp.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/',{templateUrl: '/static/partials/intro.html'})

  .otherwise({
    redirectTo: '/'
  });

});
