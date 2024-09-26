import React,{useContext} from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { Appcontext } from '../../../Global/Global';

const OrderManagement = () => {
    const {mood}=useContext(Appcontext)
  return (
    <div className="flex flex-col justify-between items-center bg-white m-7 rounded-md w-11/12 h-full">
    <h1 className="text-[20px] text-center text-orange-700 heading">ORDER MANEGMENT</h1>
    <div className="flex justify-center items-center shadow-md shadow-orange-700 rounded-md w-11/12 h-full">
    <Form className="shadow-orange-700 shadow-sm m-2 p-3 rounded-md w-11/12 h-full" >
    <h2 className="shadow-md shadow-orange-700 m-3 text-[20px] text-center text-orange-700 heading">Customer Details</h2>
        <Form.Group className="flex justify-between items-center m-2">
        <Form.Label className="text-[16px paragraph">Customers Name</Form.Label>
        <Form.Control type="text" placeholder='Customers Name' className="bg-sky-100 rounded-md w-1/2 text-center" disabled  />
        </Form.Group>
        <Form.Group className="flex justify-between items-center m-2">
        <Form.Label className="text-[16px paragraph"> Phone Number</Form.Label>
        <Form.Control type="number" placeholder=' Phone Number' className="bg-sky-100 rounded-md w-1/2 text-center"  disabled/>
        </Form.Group>
        <Form.Group className="flex justify-between items-center m-2">
        <Form.Label className="text-[16px paragraph"> Email</Form.Label>
        <Form.Control type="number" placeholder=' Customer Email' className="bg-sky-100 rounded-md w-1/2 text-center" disabled />
        </Form.Group>
        <Form.Group className="flex justify-between items-center m-2">
        <Form.Label className="text-[16px paragraph"> Address</Form.Label>
        <Form.Control type="text" placeholder=' Customer Address' className="bg-sky-100 rounded-md w-1/2 text-center"  disabled/>
        </Form.Group>
        
        
         <div className="flex flex-col justify-center items-center">
    <h2 className="shadow-md shadow-orange-700 m-3 w-full text-[20px] text-center text-orange-700 heading">Product Selection</h2>
       
        
         
       <Table hover striped  border className="w-full" >
       <thead>
    <tr>
      <th>Product Name</th>
      <th>Image</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Product 1</td>
      <td>img</td>
      <td>2</td>
      <td>$29.99</td>
      <td>$59.98</td>
    </tr>
    <tr>
      <td>Product 2</td>
      <td>img</td>
      <td>1</td>
      <td>$45.00</td>
      <td>$45.00</td>
    </tr>
    <tr>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
  </tbody>
       </Table>
       </div>
    </Form>
    </div>
</div>
  )
}

export default OrderManagement