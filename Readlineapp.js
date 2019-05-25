// To prompt the user as well as to get user input
const readline = require('readline') //import a module named readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); //created an interface to radline
let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);

let answer = num1 + num2;

rl.question(`What is ${num1} + ${num2}?`,
    (userInput) => {
        if(userInput.trim() == answer){
            rl.close();
        }
        else{
            rl.setPrompt("Incorrect response please try again\n")
            rl.prompt();
            rl.on('line',(userInput)=>{
                if(userInput.trim() == answer)
                rl.close(); 
                else{
                    rl.setPrompt(`Your answer of ${userInput} is incorrect`)
                    rl.prompt();//once we have set a prompt we have to call it
                }
            })
        }
    }
)

rl.on("close",()=>{
    console.log("Correct!!")
})