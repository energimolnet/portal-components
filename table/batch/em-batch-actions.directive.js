angular.module('portal-components')

.directive('emBatchActions', function() {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    template: '<div class="dropdown" dropdown>' +
                '<div class="btn btn-primary dropdown-toggle" dropdown-toggle style="padding: 6px">' +
                  '<input type="checkbox" ng-model="batchMgr.allSelected" ng-change="change()" ng-click="stopProp($event)">' +
                  '<span class="caret" style="margin-left: 10px"></span>' +
                '</div>' +
                '<ul class="dropdown-menu" ng-transclude></ul>' +
              '</div>',
    scope: {},
    require: '^emResourceTable',
    link: function(scope, element, attrs, resourceTableCtrl) {
      var batchMgr = resourceTableCtrl.batchMgr;
      scope.batchMgr = batchMgr;

      scope.change = function change() {
        batchMgr.selectAll(batchMgr.allSelected);
      };

      scope.stopProp = function(event) {
        event.stopPropagation();
      };
    }
  };
});
