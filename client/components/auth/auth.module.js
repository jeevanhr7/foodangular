'use strict';

angular.module('foodangularApp.auth', [
  'foodangularApp.constants',
  'foodangularApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
