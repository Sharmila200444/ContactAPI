const mongoose=require('mongoose');

const connectdb=()=>{
    mongoose.connect(process.env.db_url).then((con)=>{
        console.log("server is connected to:"+con.connection.host)
    });

}

module.exports=connectdb;