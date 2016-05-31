var express = require('express');
var router = express.Router();
var mongoose = require('mongoose-q')(require('mongoose'));
var Year = require('../models/years.js');
var State = require('../models/states.js');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.post('/years', function(req, res, next) {
  var newYear = new Year(req.body);
  newYear.save(function(err, data) {
    if (err) { res.json('Error saving year');}
    else
    {
      res.json(data);
    }
  })
});

router.put('/year/:yearNum/state', function(req, res, next) {
  var newState = new State(req.body);
  newState.save(function(err, data) {
    if(err) { res.json('Error saving state')}
    else {
      Year.findOne({ year : req.params.yearNum}, function(err, year) {
        if(err)
        { res.json('could not find year') }

        else {
          var update = { $push : {state : newState}};
          var options = {new:true};
          var id = year.id
          Year.findByIdAndUpdate(id, update, function(err, updatedYear) {
            if (err){res.json('error adding state to year')}

            else { res.json(updatedYear) }
          })
        }
      })
    }
  })
})

//list a users events

// router.get('/user/:userid/events', function(req, res, next) {
//     User.findByIdQ(req.params.id)
//     .populate('events')
//     .populate('comments')
//     .exec(function(err, user) {
//         if(err) {
//             res.send(err);
//         } else {
//             res.json(user.events);
//         }
//     });
// });