(function() {
  'use strict';

  angular
    .module('ArtVinWebApp')
    .controller('BrigadesController', BrigadesController);

  /** @ngInject */
  function BrigadesController($resource) {
    var vm = this;
    vm.brigades_api = $resource('http://localhost:8000/brigades');
    vm.brigades_list = vm.brigades_api.query();
    vm.list_of_brigades = [
      {
        number: "2",
        taskmaster: "Сидорова Елена Михайловна"
      },
      {
        number: "3",
        taskmaster: "Петрова Ольга Николавена"
      },
      {
        taskmaster: "Николаеа Егор Михайлович",
        number: 1
      },
      {
        taskmaster: "Королев Василий Алексеевич",
        number: 4
      }
    ]
  }
})();
