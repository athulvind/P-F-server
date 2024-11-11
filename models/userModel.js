const mongoos = require('mongoose')


const userSchema = new mongoos.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
   password:{
        type:String,
        required:true
    },
  github:{
        type:String,
    },
   linkedin:{
        type:String,
    },
     profilepic:{
       type:String,
    }
})

const users = mongoos.model("users",userSchema)
module.exports = users
