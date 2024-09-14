import React from 'react'
import { useState } from 'react'

const Shopping = () => {
 const [products, setproducts] = useState(0);
//Function updating the number of product

const handleProduct =()=>{
  setproducts(()=> products + 1 )
}

// function that handle product decreas
const handleProductdecrease =()=>{
  setproducts(()=> products - 1 )
}
  return (
    <div className="flex flex-col justify-center items-center w-full h-full Product">
        <div className="flex justify-center items-center bg-slate-200 m-9 w-full h-1/2"> hello</div>
       <div className='flex justify-center items-center w-full'>
 
       <div className="flex justify-center items-center w-5/6" >
        <button className="items-center border-slate-300 bg-slate-200 hover:bg-white shadow-md m-0.5 p-1 border rounded w-3/10 text-[16px] text-center paragraph" onClick={handleProductdecrease }>-</button>
       <button className="items-center border-slate-300 bg-slate-200 hover:bg-white shadow-md m-0.5 p-1 border rounded w-3/12 text-[16px] text-center paragraph">{products} </button>
       <button className="items-center border-slate-300 bg-slate-200 hover:bg-white shadow-md m-0.5 p-1 border rounded w-3/10 text-[16px] text-center paragraph" onClick={handleProduct}>+</button>
       </div>
        </div> 
       <div className="flex flex-col justify-center items-center m-5 p-2 w-full">
        <h1 className="font-bold">Recent views</h1>
       <div className="flex flex-col justify-center items-center -mt-10 w-full h-full">
       <div className="flex justify-center items-center bg-slate-200 m-9 w-full h-1/2"> hello</div>
        </div></div>
        </div>
  )
}

export default Shopping