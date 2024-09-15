 import React,{useState} from 'react'
 import {Form,Button} from "react-bootstrap";
 import axios from 'axios';
 
 const   login = () => {
  document.documentElement.style.background = "white";

 const [Email, setEmail] = useState("")
 const [Name, setName] = useState("")
  const [password, setpassword] = useState("")
  const [Error, setError] = useState(null)

  //function hanling submit of form
  const handlesubmit = async(e) =>{
    e.preventDefault();
    try {
      
    
 const  formData ={Email,Name,password}
    const response = await axios.post("http://localhost:5001",formData,{
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
  
 
      <div className="p-7 w-full h-[80vh]">
       
        <div className="flex justify-center items-center bg-slate-200 bg-opacity-70 mt-12 rounded-xl w-full h-full">
    
      <Form  onSubmit={handlesubmit}  className="flex flex-col justify-center items-center bg-blue-200 bg-opacity-40 rounded-lg w-full h-auto">
      <div className="bg-slate-400 bg-opacity-40 m-4 border rounded-md w-full text-center">
        <h1 className="text-[25px] paragraph">ADMIN LOGIN</h1></div>
<Form.Group className="flex flex-col justify-center items-center m-3 w-11/12">
<Form.Label className="m-2 paragraph">Your Email :</Form.Label>
    <Form.Control placeholder="Enter your Name" value={Email} onChange={(e)=>setEmail(e.value)} type="text" className="hover:bg-slate-300 border w-11/12 text-center paragraph rounnded-lg"/>
    </Form.Group>
    <Form.Group  className="flex flex-col justify-center items-center m-3 w-11/12">
<Form.Label className="m-2 paragraph">Your Name : </Form.Label>
    <Form.Control placeholder="Enter your Name" type="text" value={Name} onChange={(e)=>setName(e.value)}  className="paragraph hover:rounnded-lg border-white hover:bg-slate-300 border w-11/12 text-center"/>
    </Form.Group>
    <Form.Group  className="flex flex-col justify-center items-center m-3 w-11/12">
<Form.Label className="m-2 paragraph">Password :</Form.Label>
    <Form.Control placeholder="Enter your Name"  type="password" value={password} onChange={(e)=>setpassword(e.value)} className= "paragraph hover:rounnded-lg hover:bg-slate-300 border w-11/12 text-center"/>
    </Form.Group>
    <div className="bg-slate-400 bg-opacity-40 m-4 border rounded-md w-[90px] text-center"> 
      <Button type="submit" className="hover:bg-white w-full paragraph">login</Button></div>
        </Form></div>
        </div>
 
   )
 }
 
 export default   login