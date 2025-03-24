const express=require('express');
const app=express();
const dotenv=require('dotenv');
const path=require('path');
dotenv.config({path:path.join(__dirname,'config','.env')})
const connectdb=require('./config/connect');

const authcontact=require('./router/authcontact');


app.use(express.json());
app.use('/api/v1',authcontact);

connectdb();



app.listen(process.env.port,()=>{
    console.log(`server is connected to ${process.env.port}`)

});

