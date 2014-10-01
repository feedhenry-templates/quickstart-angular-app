'use strict';

var myApp = angular.module('myApp.controllers', ['fhcloud']);

myApp.controller('MainCtrl', function($scope, fhcloud) {
    console.log('MainCtrl', $scope);
    // add function to pass userInput to cloud via
    // $fh.cloud call to controller scope
    $scope.getNumberOfCharacters = function(userInput) {
      console.log("getNumberOfCharacters", userInput);
      var reqJson = {
        "head": {},
        "payload": {
          "userInput": userInput
        }
      };
      // check if userInput is defined
      if (reqJson.payload.userInput) {
        // if defined, pass userInput and callback
        // fn to fhcloud service
        fhcloud.cloud('example', reqJson, success, error);
      }
    };
    // success callback function
    var success = function(res) {
      console.log("fhcloud > exampleAction > success", res);
      // if successful redirect to home
      if (res.strLength != null || undefined) {
        //  if success do something
        alert("You entered " + res.strLength + " characters!");
      } else {
        alert("Successcb > Something is wrong!!");
      }
    };
    // error callback function
    var error = function(msg, err) {
      alert("fhcloud > example > failed " + JSON.stringify(err));
    };
});