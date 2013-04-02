'use strict';

angular.module('burgerquestApp')
  .factory('burgerService', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    var users = [
      {
        name: 'mark',
        slug: 'mark',
        rank: 3,
        cred: 5.7,
        thumb: 'mark.jpg'
      },
      {
        name: 'emil',
        slug: 'emil',
        rank: 2,
        cred: 4
      },
      {
        name: 'Jesse',
        slug: 'jesse',
        rank: 1,
        cred: 10
      }
    ];

    var burgers = [
      {
        title: 'Merriwell',
        slug: 'merriwell',
        price: 21.5,
        score: 8.8,
        rank: 2,
        user: 'Jesse'
      },
      {
        title: 'Cheapo',
        slug: 'cheapo',
        price: 8.5,
        score: 7,
        rank: 3,
        user: 'mark'
      },
      {
        title: 'NSHRY Umami',
        slug: 'nshry-umami',
        score: 9.7,
        rank: 1,
        user: 'Jesse',
        joint: 'NSHRY',
        price: 24,
        images: [
          {
            url: 'nshry-umami.jpg',
            caption: 'The NSHRY Umami burger'
          },
          {
            url: 'nshry.jpg',
            caption: 'NSHRY'
          }
        ],
        scores: [
          {
            user: 'Mark',
            score: 9.4
          }
        ]
      }
    ];


    // Public API here
    var api = {

      getUsers: function () {
        return users;
      },

      getUserByName: function(username){
        return _(users).find(function(user){
          return user.name === username;
        });
      },

      getUserBySlug: function(slug){
        return _(users).find(function(user){
          return user.slug === slug
        });
      },

      getBurgers: function(){
        return burgers;
      },

      getBurgerBySlug: function(slug){
        return _(burgers).find(function(burger){
          return burger.slug === slug;
        });
      },

      getBestBurger: function(){
        return _(burgers).max(function(burger){
          return burger.score;
        });
      },

      getBurgersByRecommender: function(slug){
        return _(burgers).filter(function(burger){
          return burger.user.slug === slug;
        });
      },

      getBurgerMaster: function(){
        return _(users).max(function(user){
          return user.cred;
        });
      }

    };

    // parse burgers
    _(burgers).each(function(burger){

      // link burger.user to a user
      burger.user = api.getUserByName(burger.user);

      // calculate .value
      burger.value = (burger.score / burger.price).toFixed(3)*10;

      if(!burger.images || !burger.images.length){
        burger.images = [
          {
            url: 'defaultthumb.jpg',
            caption: ''
          }
        ];
      }
    });

    // parse users
    _(users).each(function(user){
      if(!user.thumb) user.thumb = 'defaultthumb.jpg';
    });


    return api;
  });
