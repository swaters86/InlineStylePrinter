var app = angular.module('inlineStylePrinter', ["ngResource"]).
  config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $routeProvider
        .when("/test", {
          templateUrl: "views/test.jade"
        })
        .otherwise({ redirectTo: "/contacts" });
    }
  ]
);