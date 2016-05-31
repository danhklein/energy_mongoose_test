var Year = require('../models/years.js');


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

Year
.create(yearArray, function (err, years) {
  if (err) {
    console.log ('Year Doc not created');
  } else {
    res.json(years);
  }
});

// var emptyArray = [
// ];

// var obj = {};
// function createYear () {
//   for (var i=0; i<=25; i++) {
//     emptyArray.push({'year': 1990 + i});
//   }
// }

