import { Navbar,Products,Hero, Shopping} from "./Components"
 import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Appcontext } from "./Global/Global";
 import { useEffect } from "react";
 

const App=() =>{
  const {mood}=useContext(Appcontext)

  useEffect(() => {
    document.documentElement.style.background = mood === 'light' ? 'white' : 'black';
  }, [mood]);

const [render, setrender] = useState('Component1');
const Components ={
  Component1:<Products/>,
  Component2:<Shopping/>,

}
 

 const Display =(NameComponent)=>{
setrender(NameComponent)
 }

const Render=()=>{
return Components[render]
}
  
  return (
    
    <div>
   <Navbar onLinkClick={Display}/>
   <div >
    {Render()}
    
    </div>
    </div>
  
     
  )
}

export default App
