/*  
 *  Author: Colum Bennett <colum.bennett@feedhenry.com>
 *  Re-useable Angular service module using FeedHenry Hybird API "$fh.cloud"" call.
 *  See developers docs, http://docs.feedhenry.com/
 */

/*
 *  @endpoint : name of required cloud endpoint.
 *  @params : request parameters for given endpoint.
 *  @succesCb : if cloud call is successful, perform this operation.
 *  @errCb : if call fails, perform this operation.
 */

angular.module('fhcloud', ['ngResource']).service("fhcloud", function() {
    this.cloud = function(cloudEndpoint, userInput, successCb, errCb) {
      var params = {
        path: cloudEndpoint,
        method: "GET",
        contentType: "application/json",
        data: {hello: userInput},
        timeout: 15000
      };

      $fh.cloud(params, successCb, errCb);
    };
});
