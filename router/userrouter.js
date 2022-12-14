const { Router } = require("express");
const express= require("express");
const router=express.Router();
const usermodel=require("../model/usermodel");

//post  OR insert
router.post("/",async(req,res)=>{
    const newuser= new usermodel(req.body);
    try{
        await newuser.save();
        res.status(200).json({
            "message": "user has been inserted succesfully"
        });


    }catch{

        res.status(500).json({
            "message": "user not inserted succesfully"
        });

        

    }
});
//update
router.delete("/:id",async(req,res,next)=>{
    const id=req.params.id;
    try{
    const result=await usermodel.findByIdAndDelete(id);
res.send(result);
    }catch(error){

        console.log(error.message);

    }
});

//update

router.put("/:id",async(req,res)=>{
    let upid=req.params.id;
    let upname=req.body.name;
    let upemail=req.body.email;
    let uppassword=req.body.password;

    usermodel.findOneAndUpdate({id:upid},{$set:{name:upname,email:upemail,password:uppassword}},{new:true},
        (err,data)=>{
            if(data==null){
                res.send("NOTHING FOUND");
            }else{
                res.send(data);
            }

    })


})







module.exports = router;
