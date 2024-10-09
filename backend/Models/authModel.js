const mongoose = require('mongoose');

// ________|USER MODEL|_________
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        min:8,
        max:12,
        required:true,
    },
    background:{
        type:Array,
    },
    profile:{
        type:Array,
    },
},{timestamps:true})

const userModel = mongoose.model('user',userSchema);
// ________|USER MODEL|_________


// ________|COMPANY MODEL|_________
const companySchema = new mongoose.Schema({
    companyType:{
        type:String,
        required:true,
    },
    industry:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    website:{
        type:String,
    },
    password:{
        type:String,
        min:8,
        max:12,
        required:true,
    },
    background:{
        type:Array,
    },
    profile:{
        type:Array,
    },
},{timestamps:true})

const companyModel = mongoose.model('company',companySchema);

// ________|COMPANY MODEL|_________



module.exports = {
    userModel,
    companyModel,
};