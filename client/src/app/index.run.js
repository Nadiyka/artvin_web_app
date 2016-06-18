(function() {
  'use strict';

  angular
    .module('ArtVinWebApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, AUTH_EVENTS, AuthService) {
    var vm = this;
    $rootScope.$on('$stateChangeStart', function (event, next) {
      var authorizedRoles = next.data.authorizedRoles;
      if (!AuthService.isAuthorized(authorizedRoles)) {
        event.preventDefault();
        if (AuthService.isAuthenticated()) {
          // user is not allowed
          $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
        } else {
          // user is not logged in
          $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
        }
      }
    });
  }

})();
