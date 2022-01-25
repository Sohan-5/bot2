const mongoose = require("mongoose");

const usertempSchema = new mongoose.Schema({
   
    score:Number,
    result:Boolean,
    active : Boolean,
    date : {
        type:Date,
        default : Date.now,
    }
})

const Usertemp =new mongoose.model('Userscore',usertempSchema);

module.exports=Usertemp;