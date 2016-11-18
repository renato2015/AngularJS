var app = angular.module('aplicacao',[]);
app.controller('primeiroController', ['$scope', function ($scope){
   $scope.nome = 'Renato Borges'; 
   $scope.iniciado = true;
   
    $scope.alunos = ['Aluno1','Aluno2','Aluno3'];
    
    $scope.finalizar = function(){
        $scope.iniciado = false;
    };
    $scope.iniciar = function (){
        $scope.iniciado = true;
    };
    
    $scope.nome_aluno;
    $scope.submeter = function (){
        if($scope.form_1.$valid){
        $scope.alunos.push($scope.nome_aluno);
    }else{
        alert("usuario menor do que 3");
    }
        
    };
}]);

