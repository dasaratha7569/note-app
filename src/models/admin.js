const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    note1:{
        type:String, 
        required: true,
        unique :true,   
    },
    text1:{
        type:String,
        required: true,
    }
});
const adminSchema=new  mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    pass:{
        type:String,
        required:true,
    
    }
}, {timestamps: false});
const Admin=mongoose.model('Admin',adminSchema);
const notepad = mongoose.model('Note', noteSchema);
module.exports = {Admin,notepad};
