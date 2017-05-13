(function(angular) {
  'use strict';
angular.module('sourcesdk_app', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
      .when('/inicio', {
        templateUrl: 'sourcesdk/inicio.html'
      })
      .when('/oprojeto', {
        templateUrl: 'sourcesdk/oprojeto.html'
      })
      .when('/faq', {
        templateUrl: 'sourcesdk/faq.html',
        controller: 'cont_collapseCtrl'
      })
      .when('/artigos', {
        templateUrl: 'sourcesdk/artigos.html'
      })
      .when('/downloads', {
        templateUrl: 'sourcesdk/downloads.html',
        controller: 'cont_collapseCtrl'
      })
      .when('/A-Seriedade-de-ser-um-Level-Designer', {
        templateUrl: 'sourcesdk/artigos/A-Seriedade-de-ser-um-Level-Designer.html'
      })
      .when('/Uso-de-modelos-na-Source-Engine', {
        templateUrl: 'sourcesdk/artigos/Uso-de-modelos-na-Source-Engine.html'
      })
      .otherwise({
        templateUrl: 'sourcesdk/inicio.html',
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