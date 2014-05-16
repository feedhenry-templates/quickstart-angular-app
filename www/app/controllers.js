'use strict';

var myApp = angular.module('myApp.controllers', ['fhcloud']);

myApp.controller('MainCtrl', function($scope, fhcloud) {
    console.log('MainCtrl', $scope);

});