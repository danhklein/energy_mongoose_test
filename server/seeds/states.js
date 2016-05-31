var State = require('../models/states.js');
var statesArray = require('../../state_array.js');
var energyData = require('../energyData.js')
const yearArray =
[ { year: '1990' },
  { year: '1991' },
  { year: '1992' },
  { year: '1993' },
  { year: '1994' },
  { year: '1995' },
  { year: '1996' },
  { year: '1997' },
  { year: '1998' },
  { year: '1999' },
  { year: '2000' },
  { year: '2001' },
  { year: '2002' },
  { year: '2003' },
  { year: '2004' },
  { year: '2005' },
  { year: '2006' },
  { year: '2007' },
  { year: '2008' },
  { year: '2009' },
  { year: '2010' },
  { year: '2011' },
  { year: '2012' },
  { year: '2013' },
  { year: '2014' },
  { year: '2015' } ];


//We will have the
//1)prev created hashed json (energy_data)
//2)array of year objects (yearArray)
//3 array of state objects [name: '', abbreviation: ''] (stateArray);

//
function seedStates (data){
  yearArray
  .forEach((el) => {
    var nowYear = el['year']
    var allStatesForYearData = data[nowYear];
    statesArray
    .forEach((elem) => {
      var newState = new State();
      newState.name = elem.name;
      newState.abbreviation = elem.abbreviation;
      newState.producer = allStatesForYearData[elem.abbreviation]];
        //may need to wrap this in promise
      newState
      .save((err,data) => {
        if (err) {res.json('Error saving state')
      } else {
          Year
          .findOne({ year: nowYear}, (err, data) => {
            if (err) {res.json('Could not find year: ' + nowYear)
          } else {
              var update = { $push: {state : newState}};
              var options = {new: true};
              var id = year.id;
              Year
              .findByIdAndUpdate(id, update, (err, updatedYear) =>{
                if (err){ res.json('error adding state to year')
              } else { res.json(updatedYear) }
            })
          }
          })
        }
      })
    })
  })
}

seedStates(energyData);




//Refactored

