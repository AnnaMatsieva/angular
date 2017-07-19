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

/*app.controller('moneyCtrl', function(){
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
});*/


/*--TemplateUrl, Кэширование, Restrict, Директивы--*/
/*app.run(function ($templateCache) {
    $templateCache.put('bookmarks.html', "<div ng-repeat='bookmark in bookmarks'>{{bookmark.name}}</div>");
});

app.directive('fooBar', function () {
    var bookmarks = [
        {
            id: 1,
            name: 'EmberJS'
        },
        {
            id: 2,
            name: 'AngularJS'
        }
    ];
    return {
        restrict: 'E',
        templateUrl: "bookmarks.html",
        link: function (scope, element, attrs) {
            console.log('directive');
            scope.bookmarks = bookmarks;
        }
    };
});*/

/* scope true on directive так как в scope true, то меняется текст только в одном месте, если бы было false то текст менялся бы и в контроллере и в директиве*/
app.controller('booksCtrl', function ($scope){
    $scope.name = 'Harry';
    console.log('scope from ctrl', $scope);
});

app.directive('book', function () {
    return {
        scope: true,
        template: "<div>My name is {{name}} <input type='text' ng-model='name'></div>",
        link: function (scope, element, attrs) {
            console.log('scope from directive', scope);
            console.log(scope.name);
        }
    };
});