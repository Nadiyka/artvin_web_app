(function() {
  'use strict';

  angular
    .module('ArtVinWebApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, USER_ROLES) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        resolve: {
          areas: function($resource){
            var areas_api = $resource('http://localhost:8000/areas');
            return areas_api.query().$promise;
          }
        },
        data: {
          authorizedRoles: [USER_ROLES.head]
        }
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
        parent: 'admin',
        data: {
          authorizedRoles: [USER_ROLES.admin]
        }
      })
      .state('taskmasters', {
        url: '/taskmasters',
        templateUrl: 'app/taskmasters/taskmasters.html',
        controller: 'TaskmastersController',
        controllerAs: 'taskmasters',
        parent: 'admin',
        data: {
          authorizedRoles: [USER_ROLES.admin]
        }
      })
      .state('brigades',{
        url: '/brigades',
        templateUrl: 'app/brigades/brigades.html',
        controller: 'BrigadesController',
        controllerAs: 'brigades',
        parent: 'admin',
        data: {
          authorizedRoles: [USER_ROLES.admin]
        }
      })
      .state('workers', {
        url: '/workers',
        templateUrl: 'app/workers/workers.html',
        controller: 'WorkersController',
        controllerAs: 'workers',
        parent: 'admin',
        data: {
          authorizedRoles: [USER_ROLES.admin]
        }
      })
      .state('areas',{
        url: '/areas',
        templateUrl: 'app/areas/areas.html',
        controller: 'AreasController',
        controllerAs: 'areas',
        parent: 'admin',
        resolve: {
          areas: function($resource){
            var areas_api = $resource('http://localhost:8000/areas');
            return areas_api.query().$promise;
          }
        },
        data: {
          authorizedRoles: [USER_ROLES.admin]
        }
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
