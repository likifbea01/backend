const express = require('express');
const mongoose = require('mongoose');


const userModel = require('./models/userModel');
require('dotenv/config');
const bodyParser = require('body-parser');



const app = express();
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send({
        message:'we are in the root folder'
    });
});
app.get('/users',async(req,res)=>{

    try {
        const getAllUsers = await todoModel.find().length(3);
        res.json({
            date: getAllUsers,
            message:'users fetched'
        })
    } catch (err) {
        res.json({
            message:'err'
        });
    }
});
app.post('/users',async(req,res)=>{
try {
    const postUser = await userModel.create({
        firsName: req.body.firsName,
        lastName: req.body.lastName,
        dateOfBirth :req.body.dateOfBirth,
        school: req.body.school,
        });
        res.json({
            data: postUser,
            message:'user successfully created'
        });
} catch (err) {
    res.json({
        message:err
    });
}
});

mongoose.connect(process.env.DB_URL, ()=>{
    
        console.log('successfully connected');
    
});

// port the server is to listen to for request and response
app.listen(20003);