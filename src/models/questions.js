const mongoose = require("mongoose");
// const validator = require("validator");



const questionSchema = new mongoose.Schema({
    skilltype_id :{
        type:Number,
        required:true},
    question : { 
        type:String,
        required:true},
    option1 : String,
    option2 : String,
    option3 : String,
    option4 : String,
    option5 : String,
    answer : {
        type:String,
        required:true},
    active : Boolean,
    date : {
        type:Date,
        default : Date.now,
    }
})


const Questions = new mongoose.model("Question",questionSchema)
module.exports=Questions;