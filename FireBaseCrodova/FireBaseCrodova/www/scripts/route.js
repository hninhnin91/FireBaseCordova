
app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/company', {
            templateUrl: 'pages/company.html',
            controller: 'companyCtrl'
        }).
        when('/product', {
            templateUrl: 'pages/product.html',
            controller: 'productCtrl'
        }).
        otherwise({
            redirectTo: '/maninCtrl'
        });
  }]);

