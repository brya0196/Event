'use strict';

eventsApp.controller("CompileSimpleController", function CompileSimpleController($scope, $compile, $parse) {

  

  $scope.appendDivToElement = function(markup) {
    return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
  }
});