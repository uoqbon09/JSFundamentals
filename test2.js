/**
 * Created by Carlson on 18/01/2017.
 */
// var noiseArray = ['purr','oink'];
//
// noiseArray.unshift['hiss'];
// noiseArray.push['meow'];
//
// noiseArray[3] = 'growl';

// var pocketmon = ['Charisaur', 'Bulbazard', 'twomew'];
//
// var logger = function(val) {
//     console.log(val);
// };
//
// _.each(pocketmon, logger);

var animalMaker = function (name) {
    return {
        speak: function() {
            console.log("my name is ", name);
        }
    };
};

var animalNames = ['Smokey', 'Fluffy', 'Trigger'];
var farm = [];

// _.each(animalNames, function(i) {
//     farm.push(animalMaker(i));
// });

// farm = _.map(animalNames, function(name) {
//     return animalMaker(name);
// });

farm = _.map(animalNames, animalMaker);


console.log(farm);


var pocketmon = ['Charisaur', 'Bulbazard', 'twomew'];

var excitedMon = function(val) {
    return val + '!!!';
};

pocketmon = _.map(pocketmon, excitedMon);

console.log(pocketmon);