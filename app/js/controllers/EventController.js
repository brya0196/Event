'use strict';

eventsApp.controller('EventController',
  function EventController($scope) {

    $scope.sortorder = 'name';
    $scope.event = {
      name: "Angular Boot Camp",
      date: 1359781015626,
      time: '10:30 am',
      location: {
        address: "Google Headquaters",
        city: "Mountain View",
        province: "CA"
      },
      imgUrl: '/img/angularjs-logo.png',
      sessions: [
        {
          name: "Directives Masterclass introductory",
          creatorName: "Bob Smith",
          duration: 1,
          level: "Advanced",
          abstract: "In this sesion you will learn the ins and outs of directives!",
          upVoteCount: 0
        },
        {
          name: "Scopes for fun and profit",
          creatorName: "John Doe",
          duration: 2,
          level: "Introductory",
          abstract: "This session will take a closer look at scopes. Learn what they do, how they do it, and how to get them to do it for you.",
          upVoteCount: 0
        },
        {
          name: "Well Behaved Controller",
          creatorName: "John Doe",
          duration: 4,
          level: "Intermediate",
          abstract: "Controllers are the beginning of everything Angular does. Learn how to craft.",
          upVoteCount: 0
        }
      ]
    };

    $scope.upVoteSession = function(session) {
      session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
      session.upVoteCount--;
    };

  }
);