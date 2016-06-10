(function() {
  'use strict';

  angular
    .module('ArtVinWebApp')
    .controller('AreasController', AreasController);

  /** @ngInject */
  function AreasController() {
    var vm = this;
    vm.totalItems = 5;
    vm.currentPage = 1;

    vm.list_of_areas = [
      {
        name: "Алиготе 6",
        brigade: "2",
        geometry: {
          type: 'Rectangle',
          coordinates: [
            [33.7161, 44.6897],
            [33.7193, 44.6874]
          ]
        }
      }
    ]
  }
})();
