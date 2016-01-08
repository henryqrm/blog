(function(angular, undefined) {
'use strict';

angular.module('sampleApp.constants', [])

.constant('appConfig', {userRoles:['guest','user','admin']})

;
})(angular);