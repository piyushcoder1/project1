require('dotenv').config();
const express= require('express');
const mongoose=require('mongoose');
const app=express();
app.use(express.json());
app.use('/api/auth', require('./routes/authRoutes'));

mongoose.connect("mongodb://localhost:27017/User",{
}).then(()=>{
    console.log('Mongodb Connected')
}).catch(err => console.error(err));

const PORT=process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server runnning on port ${PORT}`));
