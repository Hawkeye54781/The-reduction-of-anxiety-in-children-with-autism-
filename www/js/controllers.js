
angular.module('starter.controllers', ['ionic'])


.controller('DashCtrl', function ($scope) { })

.controller('SubjectsCtrl', function ($scope, Subjects) {
    $scope.subjects = Subjects.all();
    $scope.remove = function (subject) {
        Subjects.remove(subject);
    }
})

.controller('ListCtrl', function ($ionicPopup, $rootScope, $scope, $ionicModal) {

    $scope.class1 = [];

    $scope.setClass = function (item) {
        $rootScope.classname = item;
    };


    $rootScope.student = [
            {
                id: 1,
                name: 'Maths',
                room: 'Room 3',
                date: new Date(2016, 1, 5, 14, 00),
                info: 'doing sums'
            },
            {
                id: 2,
                name: "English",
                room: 'Room 1',
                date: new Date(2016, 1, 5, 9, 00),
                info: 'test'
            },
            {
                id: 3,
                name: 'Irish',
                room: 'Room 2',
                date: new Date(2016, 1, 5, 12, 00),
                info: 'test'
            },
            {
                id: 4,
                name: 'History',
                room: 'Room 4',
                date: new Date(2016, 1, 5, 15, 00),
                info: 'test'
            },
            {
                id: 5,
                name: 'SNA',
                room: "Room 2",
                date: new Date(2016, 01, 5, 10, 00),
                info: 'test'
            }
    ];

    $scope.classes = [
        {
            name: 'MATH'
        },
        {
            name: 'ENGLISH'
        },
        {
            name: 'IRISH'
        },
        {
            name: 'HISTORY'
        },
        {
            name: 'GEOGRAPHY'
        },
        {
            name: 'DRAMA'
        },
        {
            name: 'SCIENCE'
        },
        {
            name: 'RELGION'
        },
        {
            name: 'P.E'
        },
        {
            name: 'ART'
        },
        {
            name: 'S.P.H.E'
        },
        {
            name: 'SNA'
        },
        {
            name: 'MUSIC'
        }
    ];

    $ionicModal.fromTemplateUrl('templates/modal.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    $scope.createClass = function (u) {
        for (var s in $scope.student) {
            if ($scope.student[s]["name"] == $rootScope.classname) {
                console.log("Already there");
                $scope.alreadyThere = true;
            } else {
                $scope.alreadyThere = false;
            }
        }

        if (!$scope.alreadyThere) {
            $scope.student.push({
                id: $scope.student.length + 1,
                name: $rootScope.classname,
                room: u.setRoom,
                date: u.setDate,
                info: u.setInfo
            });
            u = null;
            console.log($scope.student);
        }
        $scope.modal.hide();
    };

    $scope.showAlert = function (subject) {
        console.log("in arlert")
        var alertPopup = $ionicPopup.alert({
            title: "Today's Class",
            template: subject.info
        });
        alertPopup.then(function (res) {
            console.log('Thank you for not eating my delicious ice cream cone');
        });
    };

})

.controller('SubjectDetailCtrl', function ($scope, $stateParams, Subjects) {
    $scope.subject = Subjects.get($stateParams.subjectid);
})

.controller('TeachCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
});


