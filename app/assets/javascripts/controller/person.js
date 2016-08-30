(function(){
  "use strict";
  
  angular.module("app").controller("peopleCtrl", function($scope) {
    $scope.persons = [
    {
      name: "John",
      bio: "He is a man",
      bioVisible: false
    },
    {
      name: "David",
      bio: "Currently in a bootcamp learning how to code",
      bioVisible: false
    },
    {
      name: "Madison",
      bio: "He likes to relax by going traveling and sleeping.",
      bioVisible: false
    }
    ];

    $scope.toggleBio = function(person){
      person.bioVisible = !person.bioVisible;
    };

    $scope.addPerson = function(person){
      person.bioVisible = false
      $scope.persons.push(person)
    };

    $scope.deletePerson = function(){

    };


  });
})();
