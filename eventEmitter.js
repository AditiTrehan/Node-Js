var events = require('events');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent',(msg)=>{
//     console.log(msg,"msg event has occured")
// })
//.on is used to describe the event that when the event will occur.
//listener
// myEmitter.emit('someEvent',"the event was emitted")
//when this event is emitted the callback function will be executed

var util = require('util'); //module

var Person = function(name){
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary,ryu]

people.forEach((person)=>{
    person.on('speak',(msg)=>{
        console.log(person.name + 'said :' + msg)
    })
})

james.emit('speak','hey dudes')
ryu.emit('speak',"I want chocolate")