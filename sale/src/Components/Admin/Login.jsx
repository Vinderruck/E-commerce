 import React,{useState} from 'react'
 import {Form,Button} from "react-bootstrap";
 import axios from 'axios';
import { logo } from '../../assets';
 
 const   login = () => {
  document.documentElement.style.background = "white";

 const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("")
  const [Error, setError] = useState(null)

  //function hanling submit of form
  const handlesubmit = async(e) =>{
    e.preventDefault();
    try {
      
   
    const response = await axios.post("http://localhost:5001/admin",{
     Email,
    
     password,
      headers: {
        "Content-Type": "application/json"
      },
   
    }).then(res=>(console.log(res)))
  } catch (error) {
      console.log(error)
      setError(Error)
  }
  }
 
   return (
<section className="flex justify-center items-center w-full h-full">
  <div className="flex flex-col justify-center items-center bg-slate-200 shadow-black shadow-md mt-20 mr-5 ml-5 rounded-md w-full">
    <img src={logo} alt="logo" className="object-cover"/>
    <h1 className="text-[20px] paragraph">Admin login</h1>

    <Form onSubmit={handlesubmit} className='flex flex-col justify-center items-center m-4 w-11/12'> 
      <Form.Group className="flex flex-col justify-center items-center m-3 w-full">
        <Form.Label className="m-2 text-[16px]">Email:</Form.Label>
        <Form.Control type="text"  placeholder="Your Email"
         className="p-1 rounded-md text-[16px] text-center input"
         value={Email}
         onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="flex flex-col justify-center items-center w-full">
        <Form.Label className="m-2 text-[16px]">Password:</Form.Label>
        <Form.Control type="password"  
        maxLength="8" minLength="6 "placeholder="Your Password"
         className="p-1 rounded-md text-[16px] text-center input" required
         value={password}
         onChange={(e)=>setpassword(e.target.value)}/>
      </Form.Group  >
     <Form.Group className="flex justify-center items-center w-full"><Button type="submit" className="bg-slate-300 shadow-black shadow-md m-2 border rounded-md w-2/12 text-center">Login</Button></Form.Group> 
     </Form>
  </div>
</section>
   )
 }
 
 export default   login