(function() {
  'use strict';

  angular
    .module('ArtVinWebApp')
    .controller('WorkDisplayController', WorkDisplayController);

  /** @ngInject */
  function WorkDisplayController($modalInstance, work, reports, year, rows) {
    var vm = this;
    vm.work = work;
    vm.year = year;
    vm.reports = reports.filter(function(value){
      return (value.date == year) && (value.workType == work.id)
    });
    vm.area = vm.reports[0].area;

    vm.rows = rows.filter(function(value){
      return value.area == vm.area;
    });

    vm.status = {
      total: (function(){
        var sum = 0;
        vm.rows.forEach(function(item){
          sum += item.bushes;
        });
        return sum;
      })(),
      done: (function() {
        var sum = 0;
        var donerows = vm.rows.filter(function(value){
          var isdone = false;
          vm.reports.forEach(function(item){
            isdone = (value.id == item.row);
          });
          return isdone;
        });
        donerows.forEach(function(item){
          sum += item.bushes;
        });
        return sum;
      }) ()
    };
    vm.percentage = (vm.status.done/vm.status.total)*100;
    vm.ok = function () {
      $modalInstance.close();
    };
  }
})();
