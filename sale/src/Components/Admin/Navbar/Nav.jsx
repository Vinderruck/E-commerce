 import React,{useState,useContext,useEffect} from 'react'
import { logo } from '../../../assets';
import { CiMenuKebab } from "react-icons/ci";
import { MdLightMode} from "react-icons/md";
import { Appcontext } from '../../../Global/Global';
 
 
 const Nav = () => {
const {mood,handlethemechange} =useContext(Appcontext);
useEffect(() => {
    document.documentElement.style.background = mood === 'light' ? 'white' : 'black';
  }, [mood]);

//statechanger
const [Links, setLinks] = useState(false)

   return (
     <div className="flex flex-col justify-between items-start">
        <div className="z-10 fixed flex justify-between items-start bg-slate-200 opacity-80 backdrop-blur-md w-full">
            <img src={logo} alt="logo" className="object-cover"/>
            <div className="flex justify-center items-center bg-slate-200 hover:bg-white shadow-md mt-7 rounded w-[30px] h-[30px] r-0">  
    <MdLightMode onClick={()=>handlethemechange()}  />

    </div>
        </div>
        <div className="fixed flex justify-center items-center bg-slate-200 opacity-80 shadow shadow-black backdrop-blur-md mt-24 rounded-md w-[35px] h-[35px]"> 
            <CiMenuKebab  onClick={()=>setLinks(!Links)} className="p-1 w-full h-full font-bold"/>
                {Links && (
                <div> hello</div>
                )}
            </div>
     </div>
   )
 }
 
 export default Nav