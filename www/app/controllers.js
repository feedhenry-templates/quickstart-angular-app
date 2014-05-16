'use strict';

var myApp = angular.module('myApp.controllers', ['fhact']);

myApp.controller('MainCtrl', function($scope, fhact) {
    console.log('MainCtrl', $scope);

    // add function to pass userInput to cloud via
    // $fh.act call to controller scope
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
            // fn to fhact service
            fhact.act('exampleAction', reqJson, success, error);
        }
    };

    // success callback function
    var success = function(res) {
        console.log("fhact > exampleAction > success", res);

        // if successful redirect to home
        if (res.response.payload.statusCode == 200) {
            //  if success do something
            alert("You entered " + res.response.payload.strLength + " characters!");
        } else {
            alert("Successcb > Something is wrong!!");
        }
    };


    // error callback function
    var error = function(msg, err) {
        alert("fhact > exampleAction > failed " + JSON.stringify(err));
    };
});