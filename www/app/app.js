'use strict';

var myApp = angular.module('myApp', ['ngRoute',
    'ngSanitize',
    'myApp.controllers',
    'myApp.directives',
    'myApp.services',
    'myApp.filters',
    'snap',
    'fhact'
]);

myApp.config(function($routeProvider) {

    $routeProvider
        .when('/example', {
            templateUrl: 'views/example.html',
            controller: 'MainCtrl'
        })

    .otherwise({
        redirectTo: '/example'
    });
});