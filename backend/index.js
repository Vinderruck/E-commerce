import express from 'express';
import cors from 'cors';

 
const App = express();


App.use(express.json())
App.use(cors())






const Port =5001;




App.listen(Port,()=> console.log(`Server runnining in port:${Port}`))