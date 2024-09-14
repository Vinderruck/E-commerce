
import { BrowserRouter, Routes, Route } from 'react-router-dom';

 import { Login } from "./Components/Admin";
import Component from '../Component';
 

const App=() =>{
  
  return (
    
    <BrowserRouter>
   
    <Routes>
      <Route path="/l" element={<Component/>}/>
      <Route path ="/" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  
     
  )
}

export default App
