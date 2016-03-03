'use strict';

angular.module('sampleApp', [
  'sampleApp.auth',
  'sampleApp.admin',
  'sampleApp.constants',
  'sampleApp.portifolio',


  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'ngMaterial'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
