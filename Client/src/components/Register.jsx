import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[mobile,setMobile] = useState('');
    const[password,setPassword] = useState('');
    const navigate = useNavigate();

    const register=async()=>{
        console.log({name,email,mobile,password})
        let result = await fetch('http://localhost:8000/register',{
          method:"post",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({name,email,mobile,password})
        })
        localStorage.setItem('user',JSON.stringify({name,email,mobile,password}))
        result = await result.json()
        setName('')
        setEmail('')
        setMobile('')
        setPassword('')
        navigate('/')
        console.log(result)
    }
  return (
    <div className='form'>
      <h2 style={{textAlign:"center",fontFamily:"georiya"}}>Register</h2><hr/>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}  className='form-control' placeholder='Enter Your name' /><br/>
      <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}  className='form-control' placeholder='Enter Your Email' /><br/>
      <input type="number" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}  className='form-control' placeholder='Enter Your Mobile' /><br/>
      <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className='form-control' placeholder='Enter Your password' /><br/>
        <button onClick={register} className='form-control'>Register Now</button>
    </div>
  )
}
