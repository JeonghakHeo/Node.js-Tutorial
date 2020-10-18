const events = require('events');

// const myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(message){
//   console.log(message)
// })

// myEmitter.emit('someEvent', 'the event was emitted');

// To inherit events emitter on our custom constructor
const util = require('util');

var Person = function(name){
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

const james = new Person('james');
const mario = new Person('mario');
const yoshi = new Person('yoshi');

const people = [james, mario, yoshi];

people.forEach(person => {
  person.on('speak', function(mssg){
    console.log(person.name + ' said: ' + mssg);
  });
});

james.emit('speak', 'hey dudes');
mario.emit('speak', 'hey! I am Mario');



// var Person = function(name){
//   this.name = name;
// };

// util.inherits(Person, events.EventEmitter);

// const Jay = new Person('Jay');
// const Charlie = new Person('Charlie');

// const Jeonghak = [Jay, Charlie];

// Jeonghak.forEach(person => {
//   person.on('speak', function(mssg){
//     console.log(`${person.name} said ${mssg}`)
//   });
// });

// Jay.emit('speak', 'just do it!');