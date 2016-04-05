var myApp = angular.module('myApp', ['ui.router' , 'geolocation' ]);
//other dependancies injected here
myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('/', {
      url: "/",
      templateUrl: "static/partials/intro.html",
      controller: "simpleController"
    })

    .state('advanced', {
      url: "/advanced",
      templateUrl: "static/partials/advancedSearch.html",
      controller: "advancedController"
    })
    // .state('state2.list', {
    //   url: "/list",
    //   templateUrl: "partials/state2.list.html",
    //   controller: function($scope) {
    //   }
    // });
});
