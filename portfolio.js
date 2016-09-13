var portfolio = angular.module('portfolio', ['ngRoute']);

portfolio.config(function($routeProvider) 
    {
    $routeProvider
        .when('/', 
              {
              templateUrl : 'pages/home.html',
              controller  : 'mainController'
			  })
        .when('/planets', 
              {
              templateUrl : 'pages/planets/planets.html',
              controller  : 'planetController',
              css         : 'pages/planets/planets.css'
			  })
        .when('/array', 
              {
              templateUrl : 'pages/array.html',
              controller  : 'arrayController'
              })
        .when('/input', 
              {
              templateUrl : 'pages/input.html',
              controller  : 'inputController'
			  });
	});

portfolio.controller('mainController', function($scope) 
    {
    $scope.message = 'Come see what we have learned';
	});

portfolio.controller('planetController', function($scope) 
    {
    document.getElementById("redPlanet").innerHTML = "Green Planet";
    document.getElementById("redPlanet").className = "planet";
    document.getElementById("redPlanet").setAttribute ("style", "color: limegreen");
    });

portfolio.controller('arrayController', function($scope)
    {
    $scope.characters =
        [
            {
            name: "Aragorn",
            race: "Human Ranger",
            image: "images/aragorn200.png"
            },
            {
            name: "Gollum/Smeagol",
            race: "Hobbit",
            image: "images/gollum200.png"
            },
            {
            name: "Legolas",
            race: "Elf",
            image: "images/legolas200.png"
            }
        ];
   });

portfolio.controller('inputController', function($scope) 
    {
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.fullName = function() 
        {
        return $scope.firstName + " " + $scope.lastName;
        }
	});

$(document).on('click','.navbar-collapse.in',function(e)
    {
    if( $(e.target).is('a') ) 
        {
        $(this).collapse('hide');
        }
    });
