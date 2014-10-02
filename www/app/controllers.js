'use strict';

var myApp = angular.module('myApp.controllers', ['fhcloud']);

myApp.controller('MainCtrl', function($scope, $q, fhcloud) {
    // add function to pass userInput to cloud via
    // $fh.cloud call to controller scope
    $scope.getNumberOfCharacters = function() {
      var userInput = $scope.userInput;

      //Notifying the user that the cloud endpoint is being called.
      $scope.noticeMessage = "Calling Cloud Endpoint";
      $scope.textClassName = "text-info";

      //Creating an AngularJS promise as the $fh.cloud function is asynchronous.
      var defer = $q.defer();

      var promise = defer.promise;

      //When the promise has completed, then the notice message can be updated to include result of the $fh.cloud call.
      promise.then(function(res){
        // If successfull, display the length  of the string.
        if (res.strLength != null && typeof(res.strLength) !== 'undefined') {
          $scope.noticeMessage = "You entered " + res.strLength + " characters!";
          $scope.textClassName = "text-success";
        } else {
          $scope.noticeMessage  = "Error: Expected a strLength parameter in the response from $fh.cloud.";
          $scope.textClassName = "text-danger";
        }
      }, function(err){
        //If the function
        $scope.noticeMessage = "$fh.cloud failed. Error: " + JSON.stringify(err);
      });

      var reqJson = {
        "payload": {
          "userInput": userInput
        }
      };
      // check if userInput is defined
      if (reqJson.payload.userInput) {
        /**
         * Pass the userInput to the module containing the $fh.cloud call.
         *
         * Notice that the defer.resolve and defer.reject functions are passed to the module.
         * One of these functions will be called when the $fh.cloud function has completed successully or encountered
         * an error.
         */
        fhcloud.cloud('count', reqJson, defer.resolve, defer.reject);
      }
    };
});