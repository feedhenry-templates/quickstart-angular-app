/*
 *  Re-useable Angular service module using FeedHenry Hybrid API "$fh.cloud" call.
 *  See developers docs, http://docs.feedhenry.com/
 */
angular.module('fhcloud', [])
.factory('fhcloud', ['$q', '$fh', function($q, $fh) {

  return function(cloudEndpoint, data) {
    var defer = $q.defer();

    var params = {
      path: cloudEndpoint,
      method: "GET",
      contentType: "application/json",
      data: data,
      timeout: 15000
    };

    $fh.cloud(params, defer.resolve, defer.reject);

    return defer.promise;
  };
}]);