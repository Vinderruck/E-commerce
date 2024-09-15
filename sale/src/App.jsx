
import { BrowserRouter, Routes, Route } from 'react-router-dom';

 import { Login, Nav } from "./Components/Admin";
import Component from '../Component';
 

const App=() =>{
  
  return (
    
    <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<Component/>}/>
      <Route path ="/Login" element={<Login/>}/>
      <Route path ="/Dash" element={<Nav/>}/>
    </Routes>
    </BrowserRouter>
  
     
  )
}

export default App
