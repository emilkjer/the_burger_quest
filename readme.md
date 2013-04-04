# BurgerQuest

## Work-in-progress notes

* Mark scaffolded the project with yeoman (http://yeoman.io). You shouldn't need to install yeoman to get started, but you _should_ use grunt (http://gruntjs.com).  See my notes below...
* Have added dummy JSON in burgerService.js, currently there's no persistence or backend.


## Views

* Burger list
    * List all the burgers in a table, sortable by different properties (burgerscore, venue, value, name, recommending user, etc)
* Burger Detail
    * Burger in detail
    * Show all scores, comments, etc
    * 'Add a score' form
* User List
    * List all users, compact view with little thumbnails, sortable and filterable
* User Detail
    * All user details, all scores the user has submitted, list of the user's highest ranked burgers, burgers they have recommended
* Homepage/dashboard
    * Quick overview. Maybe the best burger, highest ranked user, etc.


## BurgerCred & BurgerScore calculation

* Scoring a burger should be broken into parts:  _marked with a (?) are a maybe_
    * Burger - the actual burger itself
    * Extras (?) - fries, sauces, etc
    * Venue - atmosphere, service, cooking time
    * Value for money - this could simply be the aggregate of the other scores divided by the price
* BurgerScore can be calculated by weighting the scores above and making a consolidated score.
    * Burger should be highest priority. Venue and extras shouldn't be as important.
    * The BurgerScore should be calculated for each vote, and then averaged.
* BurgerCred
    * Could either be a total of the BurgerScores of the burgers you've recommended, or maybe 10 points for the #1 burger, 8 for #2, etc...



### Getting started with the Yeoman workflow
see http://gruntjs.com/getting-started

Step by step: 

* First you need Node and NPM installed. 
* Clone the repo. 
* Install Yeomani, Grunt Command Line Tools & Bower with `npm -g install yo grunt-cli bower`
* In the project root run `npm install` to install all our NPM dependencies.
    * These are just dev environment deps, the backend probably won't even use node
* Now run `bower install` to install all clientside libraries.
* You can run a test server with auto-reload and sass compilation etc by using `grunt server`
* For more grunt workflow commands hit `grunt`
