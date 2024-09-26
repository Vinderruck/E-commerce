import React,{useContext} from 'react';
import { Button, Form } from 'react-bootstrap';
import { Appcontext } from '../../../Global/Global';

const Productmanagemnet = () => {

    const {mood}=useContext(Appcontext)
  return (
    <div className="flex flex-col justify-between items-center bg-white m-7 rounded-md w-11/12 h-full">
        <h1 className="text-[20px] text-center text-orange-700 heading">PRODUCT MANEGMENT</h1>
        <div className="flex justify-center items-center shadow-md shadow-orange-700 rounded-md w-11/12 h-full">
        <Form className="shadow-orange-700 shadow-sm m-2 p-3 rounded-md w-11/12 h-full" >
            <Form.Group className="flex justify-between items-center m-2">
            <Form.Label className="text-[16px paragraph">Product Name</Form.Label>
            <Form.Control type="text" placeholder='Products Name' className="bg-sky-100 rounded-md w-1/2"  />
            </Form.Group>
            <Form.Group className="flex justify-between items-center m-2">
            <Form.Label className="text-[16px paragraph">Product Quatity</Form.Label>
            <Form.Control type="number" placeholder='Products  Quality' className="bg-sky-100 rounded-md w-1/2"  />
            </Form.Group>
            <Form.Group className="flex justify-between items-center m-2">
            <Form.Label className="text-[16px paragraph">Product Price</Form.Label>
            <Form.Control type="number" placeholder='Products Price' className="bg-sky-100 rounded-md w-1/2"  />
            </Form.Group>
            <Form.Group className="flex justify-between items-center m-2">
            <Form.Label className="text-[16px paragraph">Product Category</Form.Label>
            <Form.Control type="text" placeholder='Products Caregory' className="bg-sky-100 rounded-md w-1/2"  />
            </Form.Group>
            <Form.Group className="flex justify-between items-center m-2">
            <Form.Label className="text-[16px paragraph">Product Description</Form.Label>
            <textarea className="border border-black rounded-md w-1/2 text-center" placeholder=' What about your product'/>
            </Form.Group>
            <Button className="items-center bg-sky-800 hover:bg-sky-200 m-1 p-1 rounded-lg w-1/5 text-center text-white hover:text-black">Add</Button> 
        </Form>
        </div>
    </div>
  )
}

export default Productmanagemnet