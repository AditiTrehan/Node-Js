// create files, delete files, create folders == to deal with file system

const fs = require('fs'); //importing file system module
//create file
// fs.writeFile('example.txt',"this is an example",(err)=>{
//     if(err)
//     console.log(err);
//     else{
//     console.log("file successfully created");
//     fs.readFile('example.txt',"utf8",(err,file)=>{
//         if(err)
//         console.log(err);
//         else
//         console.log(file)
//     })
//     }
// })

//rename file
// fs.rename('example.txt','example2.txt',(err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log("file renamed successfully")
// })

//append data to file
// fs.appendFile('example2.txt','some data being appended',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('Successfully appended data to file')
//     }
// })

//delete file
// fs.unlink('example2.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("successfully deleted file")
//     }
// })

// fs.readFileSync("readMe.txt","utf8")to read contents of file
// fs.writeFileSync('readMe.txt',readMe) to write in file

console.log(__dirname)//to view in which directory we are working in
console.log(__filename)//to view in which file we are working in

var counter =  require('./count')
console.log(counter(["abc","def","ghi"]))