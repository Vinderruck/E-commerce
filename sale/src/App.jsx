import { Navbar,Products,Hero} from "./Components"
 import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Appcontext } from "./Global/Global";
 import { useEffect } from "react";

 
const App=() =>{
  const {mood}=useContext(Appcontext)
  useEffect(() => {
    document.documentElement.style.background = mood === 'light' ? 'white' : 'black';
  }, [mood]);


 
  
  return (
    <div>
   <Navbar/>
   <Hero/>
 <Products/>
 </div>
  )
}

export default App
