import React, { useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { submit } from '../Redux/formSlicer';
const Form = () => {
    const[username,setUsername]=useState('');
    const [userage,setUserage]=useState(0);
    const {name,age}=useSelector(state=>state.form)
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            Name:<input type='text' value={username} onChange={(e)=>setUsername(e.target.value)}/>
            Age:<input type='text' value={userage} onChange={(e)=>setUserage(e.target.value)}/>
            <button onClick={()=>dispatch(submit({username,userage}))}>Submit</button>
        </form>
        <h1>Name:{name}</h1>
        <h1>Age:{age}</h1>
    </div>
  )
}

export default Form