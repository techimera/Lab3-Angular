angular.module('app', [])
  .controller('mainCtrl', mainCtrl)
  .directive('avatar', avatarDirective);
  
function link (scope) {
    if(!scope.user.name){
      scope.user.name = 'Unkown User';
    }
    if(!scope.user.email){
      scope.user.email = 'Unkown Email';
    }
    if (!scope.user.avatarUrl) {
      scope.user.avatarUrl = 'https://www.drupal.org/files/issues/default-avatar.png';
    }
}


function mainCtrl ($scope) {
  
    $scope.users = [];
    
    $scope.addNew = function (user) {
    $scope.users.push({ 
      name: user.name,
      email: user.email,
      avatarUrl: user.url
    }); /* [1] */
    
    user.name = ''; /* [2] */
    user.email = '';
    user.url = ''; /* [2] */
    };
    
}


function avatarDirective () {
  return {
    scope: {
      user: '='
    },
    restrict: 'E',
    replace: 'true',
    template: (
      '<div class="Avatar" class="list-group-item">' +
        '<img ng-src="{{user.avatarUrl}}" />' +
        '<h4>{{user.name}}</h4>' +
        '<h5>{{user.email}}</h5>' +
      '</div>'
    ),
    link: link
  };
}