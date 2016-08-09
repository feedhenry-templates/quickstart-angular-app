window.angular = require("angular");
require("angular-route");
require("angular-sanitize");
require("angular-resource");

var myApp = angular.module('myApp', ['ngRoute',
    'ngSanitize',
    'myApp.controllers',
    'myApp.directives',
    'myApp.services',
    'myApp.filters',
    'fhcloud'
]).constant('$fh', require("fh-js-sdk"));

myApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/example.html',
            controller: 'MainCtrl'
        });
});