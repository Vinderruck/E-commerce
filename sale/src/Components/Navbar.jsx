import React,{useState,useContext} from 'react'
import { CiMenuKebab } from "react-icons/ci";
import { MdAddShoppingCart } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdLightMode } from "react-icons/md";
import { Appcontext } from '../Global/Global';
 
 

 
 
const Navbar = () => {
  const {mood,handlethemechange} =useContext(Appcontext)
  const [Sign, setSign] = useState(false)

   
 
 
  return (
    <div className="fixed flex flex-col justify-center items-center bg-blue-200 bg-opacity-60 backdrop-blur-md rounded-2xl w-full nav"> 


        <div className="flex justify-center items-center bg-slate-200 w-full text-center"> 
        <h1 className="p-3 font-bold text-[20px] text-black heading">E-COMMERCE</h1></div>
   
   <div className="flex justify-between items-center shadow-black shadow-md border w-full">
   <div className="flex justify-center items-center bg-slate-200 hover:bg-white shadow-md ml-6 rounded w-[30px] h-[30px] r-0"> 
    <CiMenuKebab  className="p-1 w-full h-full"/></div>
   <div className="sm:flex flex-1 justify-center items-center hidden m-4 w-1/2">
    <input type="text" placeholder="enter your search " className="items-center border-x-slate-100 bg-slate-100 hover:bg-white shadow-md m-1 border rounded w-1/2 text-black text-center"/>
  &nbsp; <button className="items-center border-slate-300 bg-slate-200 hover:bg-white shadow-md p-1 border rounded w-3/10 text-center">search</button>

 </div>
   
 <div onClick={()=>setSign(!Sign)}className="flex justify-center items-center bg-slate-200 hover:bg-white shadow-md mr-6 rounded w-[30px] h-[30px]">
   < IoMdArrowDropdown/>
   {Sign &&(
    <div className="z-4 fixed flex justify-between items-center bg-blue-200 bg-opacity-90 shadow-black shadow-md backdrop-blur-md border rounded-md w-[10rem] h-[auto] sign">
    <div className="p-2"><button className="items-center border-slate-300 bg-slate-200 hover:bg-white shadow-md p-1 border rounded w-3/10 text-center">sign in</button></div>
    <div className="p-2"><button className="items-center border-slate-300 bg-slate-200 hover:bg-white shadow-md p-1 border rounded w-3/10 text-center">sign up</button></div>
    </div>
   )}
 </div>
 
   <div className="flex justify-center items-center bg-slate-200 hover:bg-white shadow-md mr-6 rounded w-[30px] h-[30px]">  
    <MdLightMode onClick={()=>handlethemechange()}  /></div>
 <div className="flex justify-center items-center bg-slate-200 hover:bg-white shadow-md mr-6 rounded w-[30px] h-[30px] r-0">
    <MdAddShoppingCart  className="p-1 w-full h-full"/></div>  </div>


    </div>
  )
}

export default Navbar