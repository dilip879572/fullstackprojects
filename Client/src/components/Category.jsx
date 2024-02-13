import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const[category_name,setCategory_name] = useState('')
  const[created_at,setCreated_at] = useState('')
  const[updated_at,setUpdated_at] = useState('')
    const navigate = useNavigate()
//console.log("ye date hai..."+ date)
    const create=async()=>{
    //  let ele={create_date,category_name,update_date}
    //   console.log(ele)
       var result =await fetch('http://localhost:8000/add_category',{
        method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({created_at,updated_at,category_name})
       })
       result = await result.json()
       navigate('/all')
    }
  return (
    <div className='form'>
      <h3 style={{textAlign:"center",fontFamily:"Georiya",}}>Create User</h3><hr/>
  <label>Category Name</label>
   <input type="text" className='form-control' placeholder='Enter Your Category Name' value={category_name} onChange={(e)=>{setCategory_name(e.target.value)}} /><br/>
   <label>Created Date</label>
   <input type="date" className='form-control' placeholder='Enter Your Created Date' value={created_at} onChange={(e)=>{setCreated_at(e.target.value)}} /><br/>
   <label>Updated Date</label>
   <input type="date" className='form-control' placeholder='Enter Your Email Updated Date' value={updated_at} onChange={(e)=>{setUpdated_at(e.target.value)}} /><br/>
      <button onClick={create} className='form-control'>Created Now</button> 
    </div>
  )
}

