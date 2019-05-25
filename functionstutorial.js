const sum =(num1,num2) => num1+num2;


const PI = 3.14
class someMathObject{
    constructor(){
        console.log("object created")
    }
}

// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.someMathObject = someMathObject;
//way to export functions and classes seperately

module.exports = {sum : sum, PI:PI, someMathObject:someMathObject}
//way to export all functions & classes together