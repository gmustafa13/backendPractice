const express = require('express');
const app = express();
module.exports={
    function (err,data,res) {
        console.log("from callback",err,data,res)
        if(err){
            res.json({
                error:err,
                value:false
            })
        }else{
            res.json({
                data:data,
                value:true
            })
        }
        
    }
}