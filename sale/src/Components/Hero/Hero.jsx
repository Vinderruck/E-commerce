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
  men1,men2,women1,women2,shoes1,child1
 ]
 const image = [
  Elec1,Acce2,phone1
 ]
 const funiture = [
  funi1,funi2
 ]
 const [currentIndex, setCurrentIndex] = useState(0);
 const [currentIndex1, setCurrentIndex1] = useState(0);
 const [currentIndex2, setCurrentIndex2] = useState(0);
useEffect(() => {
  const intervalId = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesale.length);   
    setCurrentIndex1((prevIndex) => (prevIndex + 1) % image.length);   
    setCurrentIndex2((prevIndex) => (prevIndex + 1) % funiture.length);   
  },10000);

 return () => clearInterval(intervalId);
}, []);

const currentImage1 =image[currentIndex1]
const currentImage2= funiture[currentIndex2]
const currentImage = imagesale[currentIndex];
  return (
    <div className="flex justify-center items-center shadow-black shadow-lg mt-12 p-2 rounded-lg w-full h-1/2 Hero">

<div className="border-slate-300 shadow-md border rounded-xl w-full h-full center">
      <div className="flex justify-center items-center m-2">
        <h1 className="font-bold text-[16px] text-center text-orange-500 heading">All your Shopping is right here</h1></div>
      <div className="flex sm:flex-row flex-col justify-between items-center gap-5 shadow-black shadow-lg m-3 p-3 rounded-xl w-11/12 heroimg w">
      <img src={currentImage} alt="Product image" className="shadow-md rounded-xl w-full h-[200px] image" />
      <img src={currentImage1} alt="Product image" className="shadow-md rounded-xl w-full h-[200px] image" />
      <img src={currentImage2} alt="Product image" className="shadow-md rounded-xl w-full h-[200px] image" />
      
    </div>
      
        </div>
         
          
        </div>
  )
}

export default Hero