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
        rank: 2,
        user: 'Jesse',
        scores: [
          {
            user: 'mark',
            burger: 9,
            venue: 9,
            comments: 'huge'
          }
        ]
      },
      {
        title: 'Cheapo',
        slug: 'cheapo',
        price: 8.50,
        rank: 3,
        user: 'mark',
        scores: [
          {
            user: 'emil',
            burger: 7,
            venue: 6,
            comments: 'cheap and cheerful'
          },
          {
            user: 'mark',
            burger: 6.5,
            venue: 5,
            comments: 'not bad...'
          }
        ]
      },
      {
        title: 'NSHRY Umami',
        slug: 'nshry-umami',
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
            user: 'mark',
            burger: 9.5,
            venue: 9,
            comments: 'lawd rekus'
          },
          {
            user: 'Jesse',
            burger: 9,
            venue: 8.5,
            comments: 'delicious'
          },
          {
            user: 'emil',
            burger: 8.0,
            venue: 7,
            comments: 'mmm burger'
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

      getVotedBurgers: function(username){
        return _(burgers).filter(function(burger){
          if(!burger.scores || !burger.scores.length) return false;
          var userscore = _(burger.scores).find(function(score){
            return score.user === username;
          });
          return userscore;
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

      // calculate scores
      if(!burger.scores) burger.scores = [];
      var total = 0;
      _(burger.scores).each(function(score){
        // consolidated score. double the burger rating and add the venue, then average
        var consolidated = ((score.burger*2) + score.venue)/2;

        // value. consolidated divided by price/2. multiply and fix to 3dp for readability.
        var value = ((consolidated/(burger.price/2))*10).toFixed(3);
        score.value = value;
        score.score = (consolidated * value).toFixed(3);
        total += Number(score.score);
      });

      burger.score = (total/burger.scores.length).toFixed(3);

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
