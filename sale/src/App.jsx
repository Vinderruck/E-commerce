
import { BrowserRouter, Routes, Route } from 'react-router-dom';

 import { Login, Nav, Dash} from "./Components/Admin";
import Component from '../Component';
 
 

const App=() =>{
  
  return (
    
    <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<Component/>}/>
      <Route path ="/Login" element={<Login/>}/>
      <Route path ="/Dash" element={<Dash/>}/>
    </Routes>
    </BrowserRouter>
  
     
  )
}

export default App
