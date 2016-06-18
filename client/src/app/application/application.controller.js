(function() {
  'use strict';

  angular
    .module('ArtVinWebApp')
    .controller('ApplicationController', ApplicationController);

  /** @ngInject */
  function ApplicationController(USER_ROLES, AuthService) {
    var vm = this;
    vm.currentUser = null;
    vm.userRoles = USER_ROLES;
    vm.isAuthorized = AuthService.isAuthorized;

    vm.setCurrentUser = function (user) {
      vm.currentUser = user;
    };
  }
})();

