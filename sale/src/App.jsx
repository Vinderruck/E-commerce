
import { BrowserRouter, Routes, Route } from 'react-router-dom';

 import { Login } from "./Components/Admin";
import Component from '../Component';
 

const App=() =>{
  
  return (
    
    <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<Component/>}/>
      <Route path ="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  
     
  )
}

export default App
