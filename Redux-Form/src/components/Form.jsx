import React from 'react'
import {  useSelector } from 'react-redux'
const Form = () => {
    const {name,age}=useSelector(state=>state.form)
    
  return (
    <div>
        <form>
            Name:<input type='text'/>
            Age:<input type='text'/>
            <button>Submit</button>
        </form>
        <h1>Name:{name}</h1>
        <h1>Age:{age}</h1>
    </div>
  )
}

export default Form