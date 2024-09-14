import express from 'express'; 
    import { LoginContorll } from '../controllers/contoller.js';


const route =express.Router();


route.post('/', LoginContorll)


export default  route