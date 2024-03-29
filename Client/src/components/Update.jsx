import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Update() {
  const[product_name,setProduct_name] = useState('')
  const[product_price,setProduct_price] = useState('')
  const[product_image,setFiles] = useState()
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getData();
    },[])
    const getData=async()=>{
      console.log(params)
      let result = await fetch(`http://localhost:8000/uploads/${params.id}`);
      result = await result.json()
      setProduct_name(result.product_name)
      setProduct_price(result.product_price)
      setFiles(result.product_image)
    }

    const update=async()=>{
        console.log({product_name,product_price,file})
        let result = await fetch(`http://localhost:8000/uploads/${params.id}`,{
          method:"put",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({product_name,product_price,product_image})
        });
        result = await result.json()
        navigate('/')
    }
  return (
    <div className='form'><h2 style={{textAlign:"center",fontFamily:"georiya"}}>Update</h2>
    <input type="text" value={product_name} onChange={(e)=>{setProduct_name(e.target.value)}} placeholder='Enter Your Updated Name' className='form-control' /><br/>
    <input type="number" value={product_price} onChange={(e)=>{setProduct_price(e.target.value)}} placeholder='Enter Your Updated Price' className='form-control' /><br/>
       <input type="file"  className='form-control' onChange={(e)=>{setFiles(e.target.files[0])}} />
        <br/><button onClick={update} className='btn btn-primary w-100'>Update</button>
    </div>
  )
}
