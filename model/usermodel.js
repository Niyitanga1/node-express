const mongoose =require("mongoose");
const User=mongoose.Schema({
    CarType:{
        type:String,
        require:true, },
        CustomerTel:{
         type:String,
        require:true, },
 
            District:{
                type:String,
                require:true, },
                Sector:{
                 type:String,
                require:true, },
        
                Cell:{
                    type:String,
                    require:true, },  
                    Village:{
                        type:String,
                        require:true, },      
                        StreetNo:{
                            type:String,
                            require:true, },     
                            disiredhour:{
                                type:String,
                                require:true, },                                                              
                  

})

const usermodel=mongoose.model("User",User);
module.exports=usermodel;