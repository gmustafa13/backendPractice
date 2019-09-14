var user = require('../schema/User');
var mongoose =require('mongoose');
var express =require('express');
var app= express();
// var callback= require('../callback')

var userModel={
    save:function(req,callback){
        // console.log("in modal",req)

        var userModel =new user(req)

        userModel.save(function(err,saveData){
            if(err){
                callback(err,[])
            }else{
                // app.use(callback,callback(null,saveData))
                callback(null,saveData)
            }
        })
    //     console.log("userModel",userModel)
    //     userModel.save().then(function(data){
    //         res.send("save successfully")
    //     }).catch(function(err){
    //         res.send(err)
    //     })
    },

    getOne:function(req,res){
        user.findOne({_id:id}).exec(function(err,foundOne){
            if(err){
                res.send(err)
            }else{
                res.send(foundOne)
            }
        })
    },
    getAll:function(data,callback){
user.find().exec(function(err,foundData){
    if(err){
        callback(err,[])
    }else{
        callback(null,foundData)
    }
})
    }
}

module.exports =userModel;
