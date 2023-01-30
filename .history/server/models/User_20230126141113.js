import mongoose from 'mongoose'
const UserShcema=new mongoose.Schema({
    name:{
        type:String,
        requiered:true,
        min:2,
        max:100,
    },
    email:{
        type:String,
        requiered:true,
        max:50,
        unique:true,
         
    },
    password:{
        type:String,
        requiered:true,
        min:5,
         
    },
    city:String,
    state:String,
    country:String,
    occupation:String,
    phoneNumber:String,
    transactions:Array,
    role:{
        type:String,
        enum:['user','admin','superadmin'],
        default:'admin'
    },
},{timestamps:true})

const User= mongoose.model("User",UserShcema)

export default User