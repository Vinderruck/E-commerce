 import React,{useState,useContext,useEffect} from 'react'
import { logo } from '../../../assets';
import { CiMenuKebab } from "react-icons/ci";
import { MdLightMode} from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Appcontext } from '../../../Global/Global';
import './Navbar.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 
 
 const Nav = ({onLinkClick}) => {
const {mood,handlethemechange} =useContext(Appcontext);
useEffect(() => {
    document.documentElement.style.background = mood === 'light' ? 'white' : 'black';
  }, [mood]);

//statechanger
const [Links, setLinks] = useState(false)
 
const [active, setActive] = useState(false);
const [active1, setActive1] = useState(false)
const [active2, setActive2] = useState(false)
const [active3, setActive3] = useState(false)
const [active4, setActive4] = useState(false)
const [active5, setActive5] = useState(false)
const [active6, setActive6] = useState(false)
const [active7, setActive7] = useState(false)
const [active8, setActive8] = useState(false)
const [active9, setActive9] = useState(false)
const handleactive =()=>{
 
  setActive(true)
  setActive1(false) , setActive2(false) , setActive3(false) , setActive4(false),  setActive5(false), 
   setActive6(false),  setActive7(false),  setActive8(false),  setActive9( false)
} 
const handleactive1 =()=>{
  setActive1(true)
  setActive(false) , setActive2(false) , setActive3(false) , setActive4(false),  setActive5(false), 
   setActive6(false),  setActive7(false),  setActive8(false),  setActive9( false)
} 
const handleactive2 =()=>{
  setActive2(true)
  setActive(false) , setActive1(false) , setActive3(false) , setActive4(false),  setActive5(false), 
   setActive6(false),  setActive7(false),  setActive8(false),  setActive9( false)
} 
const handleactive3 =()=>{
  setActive3(true)
  setActive(false) , setActive2(false) , setActive1(false) , setActive4(false),  setActive5(false), 
   setActive6(false),  setActive7(false),  setActive8(false),  setActive9( false)
} 
const handleactive4 =()=>{
  setActive4(true)
  setActive(false) , setActive2(false) , setActive3(false) , setActive1(false),  setActive5(false), 
   setActive6(false),  setActive7(false),  setActive8(false),  setActive9( false)
} 
const handleactive5 =()=>{
  setActive5(true)
  setActive1(false) , setActive2(false) , setActive3(false) , setActive4(false),  setActive(false), 
   setActive6(false),  setActive7(false),  setActive8(false),  setActive9( false)
} 
const handleactive6 =()=>{
  setActive6(true)
  setActive1(false) , setActive2(false) , setActive3(false) , setActive4(false),  setActive5(false), 
   setActive(false),  setActive7(false),  setActive8(false)
} 
const handleactive7 =()=>{
  setActive7( true)
  setActive1(false) , setActive2(false) , setActive3(false) , setActive4(false),  setActive5(false), 
   setActive6(false),  setActive(false),  setActive8(false),  setActive9( false)
} 
const handleactive8 =()=>{
  setActive8( true)
  setActive1(false) , setActive2(false) , setActive3(false) , setActive4(false),  setActive5(false), 
   setActive6(false),  setActive(false),  setActive7(false),  setActive9( false)
} 
const handleactive9 =()=>{
  setActive9( true)
  setActive1(false) , setActive2(false) , setActive3(false) , setActive4(false),  setActive5(false), 
   setActive6(false),  setActive(false),  setActive7(false), setActive8(false)
} 
   return (
     <div className="flex flex-col justify-between items-start bg-sky-200">
    
        <div className="fixed flex justify-center items-center bg-slate-200 opacity-80 backdrop-blur-md w-full">
       
        <img src={logo} alt="logo" className="object-cover"/>
           
        </div>
        <div className="flex justify-between items-center mt-20 w-full">
        <div className="z-10 flex justify-center items-center bg-slate-300 hover:bg-white shadow-black shadow-md ml-1 rounded w-[35px] h-[35px] r-0">
<CiMenuKebab onClick={()=> setLinks(true)} className="p-1 w-full h-full"/>
{Links && (
  <div className="top-0 right-0 left-0 z-0 fixed flex flex-col justify-center items-center shadow-black shadow-md rounded-md w-full run:w-2/5 sm:w-1/5 overflow-auto slide">
  <div  className="top-0 right-0 absolute bg-slate-300 hover:bg-white shadow-black shadow-md rounded-md w-[30px] h-[30px]">
      < IoCloseCircleOutline onClick={()=> setLinks(false)} className="w-full h-full" /></div>
<p className="active:bg-white p-2 text-center paragraph" ><a href="#" className= {active ? "active" : ""} onClick={()=>{handleactive(); onLinkClick('Component2')}}>Product Management</a></p>
<p className="active:bg-white p-2 text-center paragraph"><a href="#"  className= {active1 ? "active" : ""} onClick={()=>{handleactive1(); onLinkClick('Component3')}}>Order Management</a></p>
<p className="active:bg-white p-2 text-center paragraph"><a href="#" className= {active2 ? "active" : ""} onClick={handleactive2}>Payment and Shipping</a></p>
<p className="active:bg-white p-2 text-center paragraph"><a href="#"className= {active3 ? "active" : ""} onClick={handleactive3}>Reporting and Analytics</a></p>
<p className="active:bg-white p-2 text-center paragraph"><a href="#" className= {active4 ? "active" : ""} onClick={handleactive4}>Marketing and Promotion</a></p>
<p className="active:bg-white p-2 text-center paragraph"><a href="#" className= {active5 ? "active" : ""} onClick={handleactive5}>Content Management</a></p>
<p className="active:bg-white p-2 text-center paragraph"><a href="#" className= {active6 ? "active" : ""} onClick={handleactive6}>Setting and Configuraton</a></p>
<p className="active:bg-white p-2 text-center paragraph"><a href="#" className= {active7 ? "active" : ""} onClick={handleactive7}>Intergrations</a></p>
<p className="active:bg-white p-2 text-center paragraph"><a href="#"className= {active8 ? "active" : ""} onClick={handleactive8}>Security</a></p>
<p className="active:bg-white p-2 text-center paragraph"><a href="#" className= {active9 ? "active" : ""} onClick={handleactive9}>Other Features</a></p>
<Button className="items-center bg-sky-800 hover:bg-sky-200 m-1 p-1 rounded-lg w-1/5 text-center text-white hover:text-black">Logout</Button>
  </div>
)}

        </div>
        <div className="z-0 flex justify-center items-center bg-slate-300 hover:bg-white shadow-black shadow-md mr-1 rounded w-[35px] h-[35px] r-0">  
    <MdLightMode onClick={()=>handlethemechange()}  />

    </div>
    </div>
     </div>
   )
 }
 
 export default Nav