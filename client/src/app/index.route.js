(function() {
  'use strict';

  angular
    .module('ArtVinWebApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('admin', {
        abstract: true,
        templateUrl: 'app/admin/admin.html'
      })
      .state('users', {
        url: '/users',
        templateUrl: 'app/users/users.html',
        controller: 'UsersController',
        controllerAs: 'users',
        parent: 'admin'
      })
      .state('taskmasters', {
        url: '/taskmasters',
        templateUrl: 'app/taskmasters/taskmasters.html',
        controller: 'TaskmastersController',
        controllerAs: 'taskmasters',
        parent: 'admin'
      })
      .state('brigades',{
        url: '/brigades',
        templateUrl: 'app/brigades/brigades.html',
        controller: 'BrigadesController',
        controllerAs: 'brigades',
        parent: 'admin'
      })
      .state('workers', {
        url: '/workers',
        templateUrl: 'app/workers/workers.html',
        controller: 'WorkersController',
        controllerAs: 'workers',
        parent: 'admin'
      })
      .state('areas',{
        url: '/areas',
        templateUrl: 'app/areas/areas.html',
        controller: 'AreasController',
        controllerAs: 'areas',
        parent: 'admin'
      })
      .state('authorization', {
        url: '/authorization',
        templateUrl: 'app/authorization/authorization.html',
        controller: 'AuthorizationController',
        controllerAs: 'authorization'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
