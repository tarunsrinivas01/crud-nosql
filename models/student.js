const mongoose=require('mongoose')
const schema=mongoose.Schema;

const Student=new schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('students',Student)