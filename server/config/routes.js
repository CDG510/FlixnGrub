//require controllers
var User = require('./../controllers/User.js')
var Yelp = require('yelp');
var yelp = new Yelp({
consumer_key: 'YhbupDqigDNcvvCdNXAmXA',
consumer_secret: 'DCszu5XGogDPhjKYepW1o1MsBEU',
token: 'kisAi9Wy0zYmx6GU4pOs56EKxBvHRxmc',
token_secret: '-US0kvao_qY7Ex-7ABxJzXWyzZw',
});

var NetflixRoulette = require('netflix-roulette');



var mongoose = require('mongoose');

module.exports = function(app){



app.post("/searchYelp", function(req, res){
    console.log(req.body, "is getting my foods yo")
    console.log(''+req.body.lat+','+req.body.long+'')
        yelp.search({ term: req.body.term, ll:''+req.body.lat+','+req.body.long+'' , limit: 20, actionlinks: true})
        .then(function (data) {
res.send(JSON.stringify(data))        })
        .catch(function (err) {
          console.error(err);
        });
})

app.post('/searchMovies', function(req, res){
    console.log(req.body, "IS GETTING FOUND>>>>>")
    // JSON Response, resp is a JSON object
// NetflixRoulette.createRequest({
//     title: req.body.title
// }, function (resp) {
//     console.log("The Boondocks' Summary = " + resp.summary);
// });

    NetflixRoulette.actor("james", function(error, data){
        if (error){
            console.log(err)
        } else {
            console.log(data, "~~~~~~~~~~~~~~~~")
            res.send(JSON.stringify(data));
        }
    });
})

    // yelp.search({ term: 'food', location: 'Montreal' })
    // .then(function (data) {
    //   console.log(data);
    // })
    // .catch(function (err) {
    //   console.error(err);
    // });
}
