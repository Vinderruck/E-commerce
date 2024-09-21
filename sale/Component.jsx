
 
 import { useEffect } from "react";
 import { Navbar,Products,Hero, Shopping} from "./src/Components"
 import { useContext, useState } from "react";
 import {Appcontext} from './src/Global/Global'
 
 const Component = () => {

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
     <div><Navbar onLinkClick={Display}/>
     <div >
      
      {Render()}
      
      </div></div>
   )
 }
 
 export default Component