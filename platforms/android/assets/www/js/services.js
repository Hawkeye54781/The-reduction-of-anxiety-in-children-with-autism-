angular.module('starter.services', [])

.factory('Subjects', function() {
  // Might use a resource here that returns a JSON array

  var subjects = [{
    id: 1,
    name: 'Maths',
    lastText: 'Room 3',
    //icon: 'http://icons.iconarchive.com/icons/icons8/ios7/256/Science-Math-icon.png',
    date: new Date(2016, 1, 5, 14, 00)
  }, {
    id: 2,
    name: 'English',
    lastText: 'Room 1',
      //icon: 'https://t2.ftcdn.net/jpg/00/37/49/01/400_F_37490194_8mej2cvsAd1K0clbfYc0ynbhIgBdDkZC.jpg'
    date: new Date(2016, 1, 5, 9, 00)
  }, {
    id: 3,
    name: 'Irish',
    lastText: 'Room 2',
      //icon: 'http://i556.photobucket.com/albums/ss2/irishgirlx/Randomnesss%20xXx/irish.png'
    date: new Date(2016, 1, 5, 12, 00)
  }, {
    id: 4,
    name: 'History',
    lastText: 'Room 4',
      //icon: 'https://cdn2.iconfinder.com/data/icons/vacation-landmarks/512/35-512.png'
    date: new Date(2016,1,5,15,00)
  }, {
      id: 5,
      name: 'SNA',
    lastText: 'Room 2',
    //icon: 'http://i556.photobucket.com/albums/ss2/irishgirlx/Randomnesss%20xXx/irish.png'
    date:new Date(2016,1,5,10,00)
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
