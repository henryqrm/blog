'use strict';
(function(){
    class ProtifolioHomeCtrl {
        constructor($scope) {
            $scope.imageProfile = 'assets/images/profile.jpg';
            $scope.name = 'Henrique Rodrigues';
            $scope.text = 'Olá, meu nome é Henrique Rodrigues';
            $scope.profession = 'Analista de Sistemas';
        }
    }
    angular.module('sampleApp.portifolio.home.controller',[])
    .controller('ProtifolioHomeCtrl', ProtifolioHomeCtrl);
})();
