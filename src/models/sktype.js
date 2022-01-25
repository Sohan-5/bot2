const mongoose = require("mongoose");



const sktypeSchema = new mongoose.Schema({
    skilltype_id :{
        type:Number,
        required:true},
    skilltype : {
        type:String,
        required:true},
    active : Boolean,
    date : {
        type:Date,
        default : Date.now,
    }
})


const skill_types = new mongoose.model("skill_type",sktypeSchema)
module.exports=skill_types;