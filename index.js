const express = require("express");
const mongoose = require("mongoose");
const userrouter=require("./router/userrouter")
const morgan = require("morgan");


const app= express();
app.use(express.json());
app.use(morgan('dev'));


mongoose.connect("mongodb+srv://admin:AydamcDFhOXOyFwF@cluster0.hcj3zr6.mongodb.net/USERDB",{
useNewUrlParser:true,
//useUnifiedTopology:true
})

.then((res)=>{
    console.log("DATABASE IS CONNECTED SUCCESFULLY")
})
.catch((err)=>{
console.log(err);
})


//router  

app.use("/user",userrouter)




app.listen(1010,() =>{
    console.log("the srver is running  posrt 1010")
})


