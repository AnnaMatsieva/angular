/*1*/
/*input text what print in input*/
/*angular.module('app', []).controller('myCtrl', function($scope){
    $scope.hello = 55;
    $scope.someText = "gwerty";
    $scope.someInputText = "asdf";
});*/


/*2*/
//Factory
var app = angular.module('app', []);

/*app.controller('firstCtrl', function($scope, myFactory){
    $scope.myFactory = myFactory; //заносим значение в scope
    $scope.hello = 'hello';
});

app.controller('secondCtrl', function($scope, myFactory){
    $scope.myFactory = myFactory; //заносим значение в scope
    $scope.hello = 'hello';
});

app.factory('myFactory', function(){
    return{
        hello: 'hello world'
    };
});*/


/*3*/
/*Filter*/

app.controller('moneyCtrl', function(){
    this.money1 = '1.22$';
    this.money2 = '$1.33';
    this.money3 = '1.45';
});

app.filter('moneyFilter', function(){
    return function(str){
        var lastChar = str.slice(-1),
            firstChar = str.slice(0, 1),
            slicePart;
        
        if (lastChar === '$'){
            slicedPart = str.slice(0, str.length - 1);
            return '$' + slicedPart;
        } else if (firstChar === '$'){
            return str;
        } else {
            return '$' + str;
        }
    }    
});
