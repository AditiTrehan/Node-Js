var express = require('express');

var app = express ();

app.get('/',(req,res)=>{
    res.send('this is homepage')
})

app.get('/contact',(req,res)=>{
    res.send('this is the contact page')
})

app.get('/profile/:id',(req,res)=>{
    res.send('You requested a page with id of  ' + req.params.id)
})

app.listen(3000);