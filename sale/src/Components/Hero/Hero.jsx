import React, { useEffect,useState } from 'react'
import './Hero.css';
 
import  {women1,women2,women3,women4,women5,shoes1,shoes2,
  men1,
  men2,
  men3,
  men4,
  Elec1,
  Elec2,
  Elec3,
  phone1,
  phone2,
  funi1,
  funi2,
  funi3,
  Acce1,
  Acce2,
  Acce3,
  Acce4,
  Acce5,
  Acce6,
  child1,
  child2,
  child3

} from '../../assets';
 
const Hero = () => {

 const imagesale = [
  men1,men2,women1,Acce1
 ]
 const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const intervalId = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesale.length);   

  },10000);

 return () => clearInterval(intervalId);
}, []);

const currentImage = imagesale[currentIndex];
  return (
    <div className="justify-between shadow-black shadow-lg mt-12 p-2 rounded-lg w-full h-auto Hero">

<div className="border-slate-300 shadow-md p-2 border rounded-xl w-full h-auto">
  <div className="m-2"><h1 className="font-bold text-[16 text-center text-orange-500 heading px]">All your Shopping is right here</h1></div>
  <div className="flex justify-center items-center w-11/12">
  <img src={currentImage} alt="Product image" className="shadow-md rounded-xl w-1/2 h-[300px] sm:h-[400px] object-cover" />
  </div>

  
    </div>
     
      
    </div>
  )
}

export default Hero