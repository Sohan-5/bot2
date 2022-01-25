const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    email : { 
        type:String,
        required:true,
        unique:[true,"Email id already in use"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },

    phone:{
        type:Number,
        min:10,
        max:10,
        required:true,
        unique:true

    },
    response1 : String,
    response2 : String,
    response3 : String,
    response4 : String,
    response5 : String,
    response6 : String,
    response7 : String,
    response8 : String,
    response9 : String,
    response10 : String,
    active : Boolean,
    date : {
        type:Date,
        default : Date.now,
    }
})

const User =new mongoose.model('User',userSchema);

module.exports=User;