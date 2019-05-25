var http = require('http');

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt',"utf8"); // created a readstream (from where we have to read data)
var myWriteStream = fs.createWriteStream(__dirname+"/writeMe.txt","utf8");//created a write stream to where we have to send data

myReadStream.pipe(myWriteStream) //pipe method is used only on readable streams

// myReadStream.on("data",(chunk)=>{
//     myWriteStream.write(chunk) // as soon as chunk of data is recieved we are writing it into writeMew.txt file
//     console.log("new chunk recieved"),
//     console.log(chunk)
// }) //created a readstream. here we can read data in chunks

// var server = http.createServer((req,res)=>{
//     console.log('request was made:' + req.url)
//     res.writeHead(200,{'Content-Type': 'text/plain'});
//     res.end("Hey Ninjas")
// })

// server.listen(3000,'127.0.0.1');
// console.log('yo dawgs, now listening at port 3000')


var server = http.createServer((req,res)=>{
    console.log('request was made:' + req.url)
    res.writeHead(200,{'Content-Type': 'application/json'});//to send json in response to client

    var myObj = {
        name:"aditi",
        job:"dev",
    }
    res.end(JSON.stringify(myObj))
})

server.listen(3000,'127.0.0.1');
console.log('yo dawgs, now listening at port 3000')


// var server = http.createServer((req,res)=>{
//     console.log('request was made:' + req.url)
//     res.writeHead(200,{'Content-Type': 'text/plain'});//use text/html to render html
//     var myReadStream = fs.createReadStream(__dirname + '/readMe.txt',"utf8");//change the filename to .html file
//     myReadStream.pipe(res) //sending data through pipes to user in response
//     //data is sent in streams through pipes which is used for better performance
// })

// server.listen(3000,'127.0.0.1');
// console.log('yo dawgs, now listening at port 3000')