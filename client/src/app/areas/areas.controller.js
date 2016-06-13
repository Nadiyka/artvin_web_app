(function() {
  'use strict';

  angular
    .module('ArtVinWebApp')
    .controller('AreasController', AreasController);

  /** @ngInject */
  function AreasController($resource) {
    var vm = this;
    vm.totalItems = 5;
    vm.currentPage = 1;
    vm.areas_api = $resource('http://localhost:8000/areas');
    vm.areas_list=[];
    /*
    *
    * TODO: Fix showing info
    *
    * */
    vm.areas_api.query().$promise.then(function(data) {
        for (var d in data) {
        var k = {};
        k.geometry = {
          type: 'Rectangle',
          coordinates: [
            [Number(d.coordLat1), Number(d.coordLat2)],
            [Number(d.coordLon1), Number(d.coordLon2)]
          ]
        };
        k.name = d.name;
        k.brigade = d.brigade;
        vm.areas_list.push(k);
          console.log(d.name);
          console.log(k);
      }
    });
  }
})();
