(function(angular) {
  'use strict';
angular.module('sourcesdk_app', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
      .when('/sourcesdk', {
        templateUrl: 'sourcesdk.html'
      })
      .when('/oprojeto', {
        templateUrl: 'oprojeto.html'
      })
      .when('/faq', {
        templateUrl: 'faq.html',
        controller: 'cont_collapseCtrl'
      })
      .when('/artigos', {
        templateUrl: 'artigos.html'
      })
      .when('/downloads', {
        templateUrl: 'downloads.html',
        controller: 'cont_collapseCtrl'
      })
      .when('/A-Seriedade-de-ser-um-Level-Designer', {
        templateUrl: 'artigos/A-Seriedade-de-ser-um-Level-Designer.html'
      })
      .otherwise({
        templateUrl: 'sourcesdk.html',
      });

      $locationProvider.hashPrefix('!');
  }])
})(window.angular);

angular.module('sourcesdk_app').controller('cont_collapseCtrl', ['$scope', function ($scope) {

   $scope.load = function() {
       $(".cont-collapse").click(function () {
					$header = $(this);
					$content = $header.next();
					$content.slideToggle(250);
				});
   };

   $scope.load();
}]);