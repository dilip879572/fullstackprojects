import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const[product_name,setProduct_name] = useState('');
  const[product_price,setProduct_price] = useState('');
  const[file,setFiles] = useState();
    const navigate = useNavigate()

    const create=async()=>{
       var result =await fetch('http://localhost:8000/uploads',{
        method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({product_name,product_price,file})
       })
       result = await result.json()
       navigate('/')
    }
  return (
    <div className='form'>
      <h3 style={{textAlign:"center",fontFamily:"Georiya"}}>Create User</h3>
      <input type="text" className='form-control' placeholder='Enter Your Product Name' value={product_name} onChange={(e)=>{setProduct_name(e.target.value)}} /><br/>
      <input type="number" className='form-control' placeholder='Enter Your Product Price' value={product_price} onChange={(e)=>{setProduct_price(e.target.value)}} /><br/>
      <input type="file" className='form-control' placeholder='Enter Your number' onChange={(e)=>{setFiles(e.target.files[0])}} /><br/>
        <button onClick={create} className='form-control'>Created Now</button>
    </div>
  )
}
