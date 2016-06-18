(function() {
  'use strict';

  angular
    .module('ArtVinWebApp')
    .controller('AuthorizationController', AuthorizationController);

  /** @ngInject */
  function AuthorizationController(AUTH_EVENTS, AuthService) {
    var vm = this;
    vm.credentials = {
      username: '',
      password: ''
    };
    vm.login = function (credentials) {
      AuthService.login(credentials).then(function (user) {
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        $scope.setCurrentUser(user);
      }, function () {
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
      });
    };
  }
})();
