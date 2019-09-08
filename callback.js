var express=require('express')
// var mongoose = require('mongoose')
// var app=express();
var router = express.Router();

// app.get('callback',function(err,data,next){

// })

module.exports=function(req,res,next){
    return function(err,data){
        if(err){
            res.json({
                error:err,
                value:false,
                status:res.status(404)
               
                
            });
            next();
        }else if(data){
            res.json({
                data:data,
                value:true,
                status:res.status(200)

               
                
            });
            next();
        }else{
            res.send("No Data Found");
            next();
        }
    }
}
