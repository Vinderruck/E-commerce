import React,{useState} from 'react'
import Nav from '../Navbar/Nav'
import Welcome from '../welcome/Welcome'
import { OrderManagement, Productmanagemnet } from '../Product'
import { Component } from 'react'
 
 

const Dash = () => {
  const [component, setcomponent] = useState("Component1")

  const components ={
Component1:<Welcome/>,
Component2:<Productmanagemnet/>,
Component3:<OrderManagement/>
  }
  const handlerender =(ComponentName)=>{
setcomponent(ComponentName)
  }

  const rendering =()=>{
    return components[component]
  }
  return (
    <div>
      <div>
        <Nav onLinkClick={handlerender}/>
      </div>
    
      
      <div>
      {rendering()}
        </div></div>
  )
}

export default Dash