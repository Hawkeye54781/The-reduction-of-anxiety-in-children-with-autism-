angular.module('starter.services', [])

.factory('Subjects', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var subjects = [{
    id: 0,
    name: 'Maths',
    lastText: 'Room 3',
    icon: 'http://icons.iconarchive.com/icons/icons8/ios7/256/Science-Math-icon.png'
  }, {
    id: 1,
    name: 'English',
    lastText: 'Room 1',
    icon: 'https://t2.ftcdn.net/jpg/00/37/49/01/400_F_37490194_8mej2cvsAd1K0clbfYc0ynbhIgBdDkZC.jpg'
  }, {
    id: 2,
    name: 'Irish',
    lastText: 'Room 2',
    icon: 'http://i556.photobucket.com/albums/ss2/irishgirlx/Randomnesss%20xXx/irish.png'
  }, {
    id: 3,
    name: 'History',
    lastText: 'Room 4',
    icon: 'https://cdn2.iconfinder.com/data/icons/vacation-landmarks/512/35-512.png'
  }];

  return {
    all: function() {
      return subjects;
    },
    remove: function(subject) {
      subjects.splice(subjects.indexOf(subject), 1);
    },
    get: function(subjectId) {
      for (var i = 0; i < subjects.length; i++) {
        if (subjects[i].id === parseInt(subjectId)) {
          return subjects[i];
        }
      }
      return null;
    }
  };
});
