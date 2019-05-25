const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',()=>{
    console.log("tutorial event has occured")
}) //'tutorial' (1st argument) is listener
//second argument is function we want to execute

eventEmitter.emit("tutorial") //to emit listener to let it work
//tutorial event gets triggered when emit it


eventEmitter.on("sum",(num1,num2)=>{
    console.log(num1+num2)
})

eventEmitter.emit("sum",3,4)

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name=name;
    }

    get name(){
        return this._name;
    }
}

let pedro = new Person('Pedro');
pedro.on("name",()=>{
    console.log("my name is " + pedro.name)
})

let christina = new Person("Christina");
christina.on("name",()=>{
    console.log("name is " + christina.name)
})

pedro.emit("name")
christina.emit("name")