'use strict';

angular.module('sampleApp.auth', [
  'sampleApp.constants',
  'sampleApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
