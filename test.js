// /**
//  * Created by Carlson on 17/01/2017.
//  */
// var animal = {};
//
// animal.username = 'Mittens';
//
// animal['tagline'] = "Pet me!";
//
// var noises = [];
// animal.noises = noises;
//
// console.log(animal);
//
// var count = 0;
// for (var key in animal) {
//     count++;
//     if (key === 'username') {
//         console.log('Hi my name is ' + animal[key]);
//     } else if (key === 'tagline') {
//         console.log('I like to say ' + animal[key]);
//     }
// }
//
// var noiseArray = ['purr','oink'];
//
// noiseArray.unshift['hiss']; //puts value to the 0 index
// noiseArray.push['meow'];
// noiseArray[3] = 'growl';
//
// animal.noises = noiseArray;
//
// var animals = [];
//
// animals.push(animal);
//
// var quackers = {username: 'DaffyDuck', tagline: 'Yippeeee!', noises: ['quack']};
//
// animals[animals.length] = quackers;
//
// console.log(animals);
//
// var dog = {
//     username: 'Kabosu',
//     tagline: 'Such profile',
//     noises: ['bark','woof','wow!']
// };
//
// var honeyBadger = {};
// honeyBadger.username = 'Randall';
// honeyBadger.tagline = 'Honey badger dont care';
// honeyBadger.noises = ['screech', 'growl'];
//
// animals.push(dog, honeyBadger);
//
// console.log(animals.length);
//
// var animalNames = ['Sheep', 'Liger', 'Big Bird'];
//
// function AnimalMaker(name) {
//     return { //object literal notation, left part will always be a string
//         speak: function() {
//             console.log("my name is ", name)
//         }
//     };
// }
//
// var farm = [];
//
// for (var i=0; i< animalNames.length; i++) {
//     farm.push(AnimalMaker(animalNames[i]));
// }
//
// for (var i=0; i< farm.length;  i++) {
//     farm[i].speak();
// }

// function AnimalCreator(username, species, tagline, noises) {
//     return {
//         'username' : username,
//         'species' : species,
//         'tagline' : tagline,
//         'noises' : noises,
//         'friends' : []
//     };
// }
//
// var sheep = AnimalCreator('Cloud', 'sheep', 'you can count on me!', ['bahhh', 'arrg', 'chewchewchew']);
//
// console.log(sheep);
//
// function addFriend(animal, friend) {
//     animal.friends.push(friend);
// }
//
// var cow = AnimalCreator('Moo', 'cow', 'got milk?', ['moo', 'mooo']);
// console.log(cow);
// var llama = AnimalCreator('Zeny', 'llama', 'kick some llama ass', ['lllll']);
// console.log(llama);
// addFriend(sheep, cow);
// addFriend(sheep, llama);
// console.log(sheep);
//
// var myFarm = [sheep, cow, llama];
// addFriend(cow, sheep);
// addFriend(llama, cow);
//
// function addMatchesArray(farm) {
//     for (var animal in farm) {
//         farm[animal].matches = [];
//     }
// }
//
// addMatchesArray(myFarm);
// console.log(myFarm[0]);
//
// function giveMatches(farm) {
//     for (var animal in farm) {
//         farm[animal].matches.push(farm[animal].friends[0]);
//     }
// }
//
// giveMatches(myFarm);
// console.log(myFarm[0]);

// var closureAlert = function() {
//     var  x = 0;
//     var alerter = function() {
//         alert(++x);
//     };
//     return alerter;
// };
//
// var funcStorer = closureAlert();
// funcStorer();
// // funcStorer();
//
// var toaster = function() {
//     var maxTemp = 500;
//     var temp = 0;
//     return {
//         setTemp: function(newTemp) {
//             if (newTemp > maxTemp) {
//                 console.log("that temp is too high");
//             } else {
//                 this.temp = newTemp;
//             }
//         }
//     };
// };
//
// var myToaster = toaster();
// myToaster.setTemp(300);