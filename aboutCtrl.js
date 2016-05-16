angular
  .module('app')
  .controller('aboutCtrl', ['$scope',function($scope){
    $scope.title = "About";
    $scope.items = ['info1','info2','info3'];
  }])
