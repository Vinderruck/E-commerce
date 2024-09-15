import express from 'express';
import cors from 'cors';
import Login from './router/routes.js';

 
const App = express();


App.use(express.json())
App.use(cors())
App.use('/admin',Login)






const Port =5001;




App.listen(Port,()=> console.log(`Server runnining in port:${Port}`))