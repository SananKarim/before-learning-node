// const xyz = require('./people');

// console.log(xyz);
// console.log(xyz.people);             // WITHOUT DESTUCTURING ARRAY
// console.log(xyz.ages);

const { people, ages } = require("./people");

console.log(people,ages);
console.log(people);                  //WITH DESTUCTURING ARRAY
console.log(ages);

const os = require('os');    //built in  node module operating system

console.log(os);  //object that tell us about the current os 

console.log(os.platform(),os.homedir()); //two methods 
