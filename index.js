const express = require('express');
const app = express();
const mongoose =require('mongoose');

app.set('views',"view");
app.set('view engine','pug')

app.use(express.static('public'))

app.get('/',function(req,res){
    res.sendFile("index.html")
})

app.get('/hello',function(req,res){
    res.render('hello',{title:'hello',massage:"pug testing",massage1:'hhgjhgjhghjg'})
})

app.listen('3000',function(){
    console.log("listening port 300!")
})