/*  
 *  Author: Colum Bennett <colum.bennett@feedhenry.com>
 *  Re-useable Angular service module using FeedHenry Hybird API "$fh.act"" call.
 *  See developers docs, http://docs.feedhenry.com/v2/api_js_client_api.html
 */

/*
 *  @endpoint : name of required cloud endpoint.
 *  @params : request parameters for given endpoint.
 *  @succesCb : if act call is successful, preform this operation.
 *  @errCb : if call fails, preform this operation.
 */

angular.module('fhact', ['ngResource']).service("fhact", function() {
    this.act = function(endpoint, params, successCb, errCb) {
        $fh.act({
                act: endpoint,
                req: params
            },
            successCb,
            errCb
        );
    };
});