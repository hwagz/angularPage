angular
  .module('app',[
    'ui.router'
  ])
  .config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'home.html',
        controller: 'homeCtrl',
        resolve: {
          friends: ['$http',function($http){
            return $http.get(friends.json).then(function(response){
              return response.data;
            }))
          }]
        }
      })
      .state('about',{
        url: '/',
        templateUrl: 'about.html',
        controller: 'aboutCtrl'
      })
  }])
