const express=require("express");
const mongoose=require("mongoose");
const fs = require('fs');
const Path = require('path');
const PORT=3000;

connectDB();

app.set("view engine","ejs")

app.get(express.urlencoded,{extended:true})
exports.URLSearchParams = URLSearchParams;


app.get("/",(req,res)=>{
    console.log("home page");
    
})
app.get("/student/add",(req,res)=>{

    try{
        const
        name,
        email,
        district,
        pincode,
        state,
        gender


    }
    catch(error){
        console.log("failed to load student data");
        error.message;
        
    }

})
app.get("student/edit/:id",(req,res)=>{
    
})

app.listen(PORT,()=>{
    console.log(`server is running on localhost:${PORT}`);
    
})