(function() {
  'use strict';

  angular
    .module('ArtVinWebApp')
    .controller('WorkersController', WorkersController);

  /** @ngInject */
  function WorkersController() {
    var vm = this;
    vm.list_of_workers = [
      {
        name: "Сидоров Вячеслав Анатолиевич",
        brigade_number: "2"
      },
      {
        name: "Козлов Иван Александрович",
        brigade_number: "2"
      },
      {
        name: "Коваль Александр Алексеевич",
        brigade_number: "2"
      },
      {
        brigade_number: "3",
        name: "Бондарь Ольга Павловна"
      },
      {
        brigade_number: "3",
        name: "Павлов Андрей Леонидович"
      }
    ]
  }
})();
