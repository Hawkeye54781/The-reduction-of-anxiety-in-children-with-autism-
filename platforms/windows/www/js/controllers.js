angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('SubjectsCtrl', function($scope, Subjects) {
  $scope.subjects = Subjects.all();
  $scope.remove = function(subject) {
    Subjects.remove(subject);
  }
})

.controller('SubjectDetailCtrl', function($scope, $stateParams, Subjects) {
  $scope.subject = Subjects.get($stateParams.subjectid);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
