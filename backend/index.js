import express from 'express';
import cors from 'cors';
import Login from './router/routes.js';
import mongoose from 'mongoose'
 
const App = express();


App.use(express.json())
App.use(cors())
App.use('/admin',Login)

try {
    

mongoose.connect("mongodb+srv://vinmeanon:9wCUgHBUxEGffmVk@cluster0.eumkl.mongodb.net/")
 console.log('conncted')
} catch (error) {
 console.log('failed toconect')   
}

const Port =5001;




App.listen(Port,()=> console.log(`Server runnining in port:${Port}`))