 import React,{useState,useContext,useEffect} from 'react'
import { logo } from '../../../assets';
import { CiMenuKebab } from "react-icons/ci";
import { MdLightMode} from "react-icons/md";
import { Appcontext } from '../../../Global/Global';
import './Navbar.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 
 
 const Nav = () => {
const {mood,handlethemechange} =useContext(Appcontext);
useEffect(() => {
    document.documentElement.style.background = mood === 'light' ? 'white' : 'black';
  }, [mood]);

//statechanger
const [Links, setLinks] = useState(false)
const [active, setActive] = useState(false)
   return (
     <div className="flex flex-col justify-between items-start">
        <div className="z-10 fixed flex justify-between items-center bg-slate-200 opacity-80 backdrop-blur-md w-full">
        <div className="flex justify-center items-center bg-slate-200 hover:bg-white shadow-md ml-1 rounded w-[35px] h-[35px] r-0">
<CiMenuKebab onClick={()=> setLinks(!Links)} className="p-1 w-full h-full"/>
{Links && (
  <div className="top-0 right-0 left-0 fixed flex flex-col justify-center items-center shadow-md shadow-white mt-24 rounded-md w-1/2 sm:w-1/5 overflow-auto slide">
<p className="active:bg-white p-2 paragraph" ><a href="" ClassName={active ? "active" : ""}  onClick={()=>setActive(!active)}>Product Management</a></p>
<p className="p-2 paragraph"><a href="">Order Management</a></p>
<p className="p-2 paragraph"><a href="">Payment and Shipping</a></p>
<p className="p-2 paragraph"><a href="">Reporting and Analytics</a></p>
<p className="p-2 paragraph"><a href="">Marketing and Promotion</a></p>
<p className="p-2 paragraph"><a href="">Content Management</a></p>
<p className="p-2 paragraph"><a href="">Setting and Configuraton</a></p>
<p className="p-2 paragraph"><a href="">Intergrations</a></p>
<p className="p-2 paragraph"><a href="">Security</a></p>
<p className="p-2 text-[16px] paragraph"><a href="">Other Features</a></p>
<Button className="items-center bg-sky-800 p-1 rounded-lg text-center text-white">Logout</Button>
  </div>
)}

        </div>
            <img src={logo} alt="logo" className="object-cover"/>
            <div className="flex justify-center items-center bg-slate-200 hover:bg-white shadow-md mr-1 border border-black rounded w-[35px] h-[35px] r-0">  
    <MdLightMode onClick={()=>handlethemechange()}  />

    </div>
        </div>
       
     </div>
   )
 }
 
 export default Nav