'use strict';

angular.module('sampleApp', [
    //dependence internal
  'sampleApp.auth',
  'sampleApp.admin',
  'sampleApp.constants',
  'sampleApp.portifolio',

  //dependence external
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'ngMaterial' // Angular material design
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
