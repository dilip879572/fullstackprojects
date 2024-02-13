import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {AiFillEdit} from 'react-icons/ai'


export default function Home() {
  const[data,setData] = useState([]);
  const navigate = useNavigate()
  useEffect(()=>{
    getDetails()
  },[])
  const getDetails=()=>{
    fetch('http://localhost:8000/uploads',{
      method:"get"
    }).then((res)=>{
      res.json().then((resp)=>{
         setData(resp)
            }) })
  }
  const deleteData =async(id)=>{
   //console.log(id)
   var result =await fetch(`http://localhost:8000/uploads/${id}`,{
    method:"delete"
  })
  result = await result.json()
  alert('Are You Sure to delete data...?')
  getDetails()
  }
  const all=()=>{
    navigate('/all')
  }

  const addRecord=()=>{
    navigate('/create')
  }
 
  return (
    <div> 
      <h1 style={{textAlign:"center"}}>--Show Details--</h1>
      <button className='btn btn-outline-success add' onClick={addRecord} >Add New Details</button><button className='btn btn-success all' onClick={all} >All-Category</button><hr/>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Image</th>
            <th>Delete || Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,index)=>
            <tr key={item._id}>
              <td>{index+1}</td>
              <td>{item.product_name}</td>
              <td>{item.product_price}</td>
              <td><img width="100px" src={`http://localhost:8000/uploads/${item.product_image}`}/></td>
              <td><button onClick={()=>deleteData(item._id)} >Delete</button>
              <Link to={"/update/"+item._id}><AiFillEdit/></Link>
              </td>
   </tr>
  
            )
          }
        </tbody>
      </table>
    </div>
    
  )
  
}
