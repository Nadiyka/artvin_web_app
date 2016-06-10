(function() {
  'use strict';

  angular
    .module('ArtVinWebApp')
    .controller('BrigadesController', BrigadesController);

  /** @ngInject */
  function BrigadesController() {
    var vm = this;
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
