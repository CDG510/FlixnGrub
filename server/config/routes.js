//require controllers
var User = require('./../controllers/User.js')
var Yelp = require('yelp');
var Xray =require('x-ray')
var scraperjs = require('scraperjs');
var osmosis = require('osmosis');

var yelp = new Yelp({
consumer_key: 'YhbupDqigDNcvvCdNXAmXA',
consumer_secret: 'DCszu5XGogDPhjKYepW1o1MsBEU',
token: 'kisAi9Wy0zYmx6GU4pOs56EKxBvHRxmc',
token_secret: '-US0kvao_qY7Ex-7ABxJzXWyzZw',
});
xray = new Xray();

var NetflixRoulette = require('netflix-roulette');
var randomMovie
// osmosis
// .get('www.craigslist.org/about/sites')
// .find('h1 + div a')
// .set('location')
// .follow('@href')
// .find('header + div + div li > a')
// .set('category')
// .follow('@href')
// .paginate('.totallink + a.button.next:first')
// .find('p > a')
// .follow('@href')
// .set({
//     'title':        'section > h2',
//     'description':  '#postingbody',
//     'subcategory':  'div.breadbox > span[4]',
//     'date':         'time@datetime',
//     'latitude':     '#map@data-latitude',
//     'longitude':    '#map@data-longitude',
//     'images':       ['img@src']
// })
// .data(function(listing) {
//     // do something with listing data
// })
// .log(console.log)
// .error(console.log)
// .debug(console.log)
// ///random results
osmosis
.get('http://instantwatcher.com') // url of the site you want to scrape
  // .find('.box-synopsis-mode') // selector
  // .set('articleLink') // name of the key in the results
  // .follow("a@href")
  .find('.random-title')
  .set("random-search")
  .follow("@href")
  .find(".webpage@href")
  .set("netflix-page")
  .find(".action-play")
  .set("playMovie")
  .find(".iw-boxart@src")
  .set("imgArt")
  .find("title")
  .set("title")
  // .find(".year@a")
  // .set("yearMade")
  // .find(".average_rating")
  // .set("rating")
  // .find(".runtime")
  // .set("movieLength")
  .data(function(results) { //output
    console.log(results);
    randomMovie = results;
  })
 .log(console.log)
 .error(console.log)
 .debug(console.log)
  ;
// xray('instantwatcher.com/popular_new?q=&days_available=0-30&sort=queue_count+desc&view=synopsis&infinite=on&average_rating=30-max&year=&runtime=&content_type%5B%5D=1&language_audio=', '.list-title', [
//     {
//         title:'.title-link@href'
//     }
// ])(function(err, poster){
//     console.log(poster, 'WAS FOUNDDDDD')
// })

// scraperjs.StaticScraper.create('http://instantwatcher.com/popular?q=&sort=queue_count+desc&view=synopsis&infinite=on&average_rating=30-max&year=&runtime=&content_type%5B%5D=1&content_type%5B%5D=2&language_audio=')
//     .scrape(function($) {
//         var results = {links: []}
//
//         return  $(".iw-title").map(function() {
//             return results.links = $(this).find("data-title-path");
//         }).get();
//     })
//     .then(function(news, utils) {
//         console.log("BEGIN SCRAPE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",news);
//     })
// /random?content_type=1&sort=queue_count%20desc

// var mongoose = require('mongoose');
// console.log(randomMovie," WAS FOUND ~~~~~~~~~~~~~~~~~~")
module.exports = function(app){



app.post("/searchYelp", function(req, res){
        yelp.search({ term: req.body.term, ll:''+req.body.lat+','+req.body.long+'' , limit: 20, actionlinks: true})
        .then(function (data) {
res.send(JSON.stringify(data))        })
        .catch(function (err) {
          console.error(err);
        });
})

// app.post('/searchMovies', function(req, res){
//     console.log(req.body, "IS GETTING FOUND>>>>>")
//     // JSON Response, resp is a JSON object
// // NetflixRoulette.createRequest({
// //     title: req.body.title
// // }, function (resp) {
// //     console.log("The Boondocks' Summary = " + resp.summary);
// // });
//
//     NetflixRoulette.actor("james", function(error, data){
//         if (error){
//             console.log(err)
//         } else {
//             console.log(data, "~~~~~~~~~~~~~~~~")
//             res.send(JSON.stringify(data));
//         }
//     });
// })

app.post('/advancedYelpSearch', function(req, res){
    yelp.search({ term: req.body.food, location: req.body.location })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.error(err);
    });
})

}
