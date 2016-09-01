angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('SubjectsCtrl', function($scope, Subjects) {
  $scope.subjects = Subjects.all();
  $scope.remove = function(subject) {
    Subjects.remove(subject);
  }
})

.controller ('ListCtrl', function ($scope)
{
    $scope.items = {
        "listItems": [
            {
                "id": 1,
                "name": "Maths",
                "lastText": "Room 3",
                /*icon: 'http://icons.iconarchive.com/icons/icons8/ios7/256/Science-Math-icon.png',*/
                "date": new Date(2016, 1, 5, 2, 00)
            },
            {
                "id": 2,
                "name": "English",
                "lastText": "Room 1",
                /*icon: 'https://t2.ftcdn.net/jpg/00/37/49/01/400_F_37490194_8mej2cvsAd1K0clbfYc0ynbhIgBdDkZC.jpg'*/
                "date": new Date(2016, 2, 2, 9, 00)
            },
            {
                "id": 3,
                "name": "Irish",
                "lastText": "Room 2",
                /*icon: 'http://i556.photobucket.com/albums/ss2/irishgirlx/Randomnesss%20xXx/irish.png'*/
                "date": new Date(2016, 1, 18, 12, 00)
            },
            {
                "id": 4,
                "name": "History",
                "lastText": "Room 4",
                /*icon: 'https://cdn2.iconfinder.com/data/icons/vacation-landmarks/512/35-512.png'*/
                "date": new Date(2016, 1, 15, 9, 00)
            },
            {
                "id": 5,
                "name": "SNA",
                "lastText": "Room 2",
                /*icon: 'http://i556.photobucket.com/albums/ss2/irishgirlx/Randomnesss%20xXx/irish.png'*/
                "date": new Date(2016, 02, 21, 10, 00)
            }
        ]}
})

.controller('SubjectDetailCtrl', function($scope, $stateParams, Subjects) {
  $scope.subject = Subjects.get($stateParams.subjectid);
})

.controller('TeachCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});


