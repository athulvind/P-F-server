const mongoose = require('mongoose')

const connectionString = process.env.DBCONNECTION

mongoose.connect(connectionString).then(res=>{
    console.log("MONGODB Atlas Connected Successfully");  
}).catch(err=>{
    console.log("MONGODB Atlas connection Failed");
    console.log(err);   
})