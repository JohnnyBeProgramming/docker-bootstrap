// Including required files

// Define the main application
const app = {
  init: function () {
    console.log('Hello World from app...!');
  }
};

// Bootstrap an angular app
angular
  .module('app', [
    'ngAnimate',
    'ngMaterial',
  ])
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('amber');
  })
  .run(function ($rootScope, $http) {
    console.info('App Starting: ', app);
    $rootScope.catalog = [];
    $rootScope.apps = [];
    $rootScope.apis = [];
    $http
      .get('/consul-host-8500/v1/catalog/services?stale=&wait=60000ms')
      .then(function (response) {
          if (response.data) {
            var apps = [];
            var apis = [];
            var data = response.data;
            for (var key in data) {
              var item = data.hasOwnProperty(key) ? data[key] : null;
              if (item.length) {
                if (item.indexOf('app') >= 0) {
                  apps.push({
                    name: key,
                    tags: item
                  })
                }
                if (item.indexOf('api') >= 0) {
                  apis.push({
                    name: key,
                    tags: item
                  })
                }
              }
            }
            $rootScope.catalog = data;
            $rootScope.apps = apps;
            $rootScope.apis = apis;
          }
        }
      );
  });
