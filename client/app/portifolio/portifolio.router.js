'use strict';

angular.module('sampleApp.portifolio.router')
.config('$stateProvider', [function ($stateProvider) {
	$stateProvider.state('portifolio', {
		templateUrl: 'app/portifolio/portifolio.html',
        url: '/portifolio',
        controller: 'PortifolioCtrl',
        controllerAs: 'portifolio'
	});
}]);
