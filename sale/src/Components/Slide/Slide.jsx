import React from 'react'
import { Slide } from 'react-slideshow-image';
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

const SlideShow = () => {

    const categories =[
        {Shop:"MEN",men1,men2,men3,men4},
        {Shop:"WOMEN_WEAR",women1,women2,women3,women4,women5},
       {shop:"CHILD_WEAR",child1,child2,child3},
       {shop:" ACCESSORIES",Acce1,Acce2,Acce3,Acce4,Acce5,Acce6},
       {shop:" ELECTRONICS",Elec1,Elec2,Elec3},
        {shop:"PHONES",phone1,phone2},
      { shop:"FUNITURE",funi1,funi2,funi3},
        {shop :"SHOES",shoes1,shoes2}
    ]
  
    const slides = Object.entries(categories).map(([key, values]) => (
        <div key={key}>
          <h2>{key}</h2>
         
        </div>
      ));
    
      return (
        <div>
          <Slide>
            {slides}
          </Slide>
        </div>
      );
    };
    

export default SlideShow