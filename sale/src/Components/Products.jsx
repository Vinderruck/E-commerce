import React from 'react'
import Hero from './Hero/Hero'

const Products = () => {
  return (
    <div className="justify-between p-2 rounded w-full Product">
 
 <div className="m-3"><Hero/></div>


<div className="border-slate-300 shadow-md mt-10 p-2 border rounded-xl w-full">
<h1 className="bg-slate-200 rounded text-center">Shoes</h1>
<div className="flex flex-wrap justify-center gap-0">
<div className="bg-slate-200 shadow-md m-1 border border-black rounded w-[100px] h-[100px]">
</div>
<div className="bg-slate-200 shadow-md m-1 border border-black rounded w-[100px] h-[100px]"></div>
<div className="bg-slate-200 shadow-md m-1 border border-black rounded w-[100px] h-[100px]">
</div>
<div className="bg-slate-200 m-1 border border-black rounded w-[100px] h-[100px] ronded"></div>
<div className="bg-slate-200 shadow-md m-1 border border-black rounded w-[100px] h-[100px]">
</div>
<div className="bg-slate-200 shadow-md m-1 border border-black rounded w-[100px] h-[100px]"></div>

<div className="bg-slate-200 shadow-md m-1 border border-black rounded w-[100px] h-[100px]">
</div>
<div className="bg-slate-200 shadow-md m-1 border border-black rounded w-[100px] h-[100px]"></div>
</div>
<div className="flex justify-center items-center p-1 w-full">
<button className="items-center border-slate-300 bg-slate-200 hover:bg-white shadow-md p-1 border rounded w-3/10 text-center">see more</button></div>

</div>

    </div>
  )
} 

export default Products