'use strict';

angular.module('sampleApp.portifolio.router',[])
.config(function ($stateProvider) {
	$stateProvider
    .state('portifolio', {
        url: '/',
        templateUrl: 'app/portifolio/portifolio.html',
        controller: 'PortifolioCtrl',
        controllerAs: 'portifolio'
	});
});
