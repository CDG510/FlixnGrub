//require controllers
var User = require('./../controllers/User.js')
var Yelp = require('yelp');
var yelp = new Yelp({
consumer_key: 'YhbupDqigDNcvvCdNXAmXA',
consumer_secret: 'DCszu5XGogDPhjKYepW1o1MsBEU',
token: 'kisAi9Wy0zYmx6GU4pOs56EKxBvHRxmc',
token_secret: '-US0kvao_qY7Ex-7ABxJzXWyzZw',
});

var mongoose = require('mongoose');

module.exports = function(app){



    // yelp.search({ term: 'food', location: 'Montreal' })
    // .then(function (data) {
    //   console.log(data);
    // })
    // .catch(function (err) {
    //   console.error(err);
    // });
}
