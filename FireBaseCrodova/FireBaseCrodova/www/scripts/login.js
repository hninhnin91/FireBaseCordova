var app = angular.module("sampleApp", ["firebase"]);
app.controller('LoginCtrl', function ($rootScope, $scope, $state, $http, WebUrlService, userService) {
    var datamodules = [];
    $scope.Login = function () {
        $scope.Login_Information = "";
        var names = [];
        var url = WebUrlService.url + "Login/" + $scope.username + "/" + $scope.password;
        $http.get(url)
            .then(function (response) {
                if (response.data.LoginResult.Status) {
                    datamodules = response.data.LoginResult.Modules;
                    for (i = 0; i < datamodules.length ; i++) {
                        names.push(datamodules[i].module_display_name.replace(/ +/g, ""));
                    }
                    $rootScope.$broadcast('refreshevent', names);
                    $state.go(response.data.LoginResult.DefaultPage.replace(/ +/g, ""));
                } else {
                    $scope.Login_Information = " * Your username or password is wrong!";
                }
            });
    }
});