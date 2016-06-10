(function() {
  'use strict';

  angular
    .module('ArtVinWebApp')
    .controller('UsersController', UsersController);

  /** @ngInject */
  function UsersController() {
    var vm = this;
    vm.list_of_users = [
      {
        name: "Сидоров Петр Михайлович",
        email: "petr@mail.ru",
        password: "password",
        type: 0
      },
      {
        name: "Спорыш Надежда Ярославовна",
        email: "nadiya@gmail.com",
        password: "password",
        type: 1
      },
      {
        name: "Ульяненко Андрей Олегович",
        email: "andruha@mail.ru",
        password: "password",
        type: 1
      },
      {
        name: "Потапенко Ольга",
        email: "nadiya@gmail.com",
        password: "password",
        type: 1
      }
    ]
  }
})();

