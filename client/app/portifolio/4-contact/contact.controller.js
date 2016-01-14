'use strict';

(function(){
    class PortifolioContactCtrl {
        constructor($scope, $templateCache, $http) {
            var method = 'POST';
        var urlPost = 'http://10.10.1.108:9000';
        $scope.codeStatus = '';
        $scope.jdata = 't';
        $scope.send = function() {
          var data = {
            'name': this.name,
            'email': this.email,
            'message': this.message
          };
          var jdata = JSON.stringify(data);
          $scope.jdata = jdata;
          $http({
              method: method,
              url: urlPost,
              data: jdata,
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              cache: $templateCache
            })
            .success(function(response) {
              console.log('success'); // Getting Success Response in Callback
              $scope.codeStatus = response.data;
              console.log($scope.codeStatus);
            })
            .error(function(response) {
              console.log('error'); // Getting Error Response in Callback
              $scope.codeStatus = response || 'Request failed';
              console.log($scope.codeStatus);
            });
          return false;
        };
        }

    }
    angular.module('sampleApp.portifolio.contact.controller',[])
    .controller('PortifolioContactCtrl', PortifolioContactCtrl);
})();
