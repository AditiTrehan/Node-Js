var http = require('http');

var fs = require('fs');

var server = http.createServer((req,res)=>{
    console.log("request was made"+ req.url)
    if(req.url === "/home" || req.url === "/"){
        res.writeHead(200,{"Content-Type":"text/html"})
        fs.createReadStream(__dirname+'/index.html').pipe(res)
    }
    else if(req.url === "/api/ninjas"){
    var ninjas = [{name:"aditi",age:21},{name:"abc",age:9}] 
        res.writeHead(200,{"Content-Type":"application/json"})
        res.end(JSON.stringify(ninjas))
    }
})

server.listen(3000,"127.0.0.1");
