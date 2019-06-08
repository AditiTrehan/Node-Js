var express = require('express');

var app = express ();

app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/index.html')
})

app.get('/contact',(req,res)=>{
    res.sendFile(__dirname +'/index.html')
})

app.get('/profile/:id',(req,res)=>{
    res.send('You requested a page with id of  ' + req.params.id)
})

app.listen(3000);