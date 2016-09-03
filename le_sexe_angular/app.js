App = angular.module("le_sexe",[]);

App.controller("chat_receive", function Receiver($scope){

 
    $scope.add_msg = function add_msg(){
        
        $scope.test_vars.push($scope.inputter);
        $scope.inputter = "";
    };

   

    test_vars = [];
    $scope.test_vars = test_vars
    $scope.inputter = '';
});





