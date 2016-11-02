//The Office - Populating an array
var employeeSatisfaction = function () {
  var array = [];
  var fillDepto = function () { array.push(_.times(10, function () {return _.random(1, 20);}));};
  _.times(6, function() {return fillDepto();});
  return array;
};
employeeSatisfaction();


// Harry Potter - Chunking the array
var pairsOfBirthdays = _.chunk(birthdays, 2);
// Adding extra birthdays to the array
var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                     "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];
var allBirthdays = _.concat(pairsOfBirthdays, _.chunk(moreBirthdays, 2));


// The Password Problem
var goodPsswd = "1234567890";
var badPsswd = "1123456";
//Unique Characters
var noRepeatChar = function (password) {
  var result = _.filter(password, function (value, index, iteratee) {
    return _.includes(iteratee, value, index + 1);
    });
    if (result.length < 1) {
      console.log("good password");
    } else {
      console.log("AUCH, bad password");
    }
};
noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);
// Only digits
var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
  return _.dropRight(password.split(""), 10).join("");
};
trimPassword(badPsswd);


// Abbey Road Studios
// November is a good month
var novemberArtists = function () {
  return _.uniq(_.map(_.filter(abbeyRoadRecords, ["month", 11]), "artist"));
};
console.log(novemberArtists());
// Artist who recorded the most times
var bestArtist = function () {
  return _.first(_.orderBy(_.groupBy(abbeyRoadRecords, "artist"), ['Array', 'length'], ['asc', 'desc']))[0].artist;
};
console.log(bestArtist());
// The Beatles and Abbey Road
var lastBeatlesSong = function () {
  return _.orderBy(_.filter(abbeyRoadRecords, ["artist", "The Beatles"]), 'year', ['desc'])[0].year;
};
console.log(lastBeatlesSong());
