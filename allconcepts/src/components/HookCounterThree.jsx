import React, { useState } from 'react'

function HookCounterThree() {
    const init ={
        firstName: '',
        lastName: ''
    }
    const [name,setName] =useState(init)
  return (
    <div>
        <h1>HookCounterThree</h1>
        <input type="text" onChange={(e)=>setName({...name,firstName:e.target.value})} value={name.firstName}/>
        <input type="text" onChange={(e)=>setName({...name,lastName:e.target.value})} value={name.lastName}/>
        <h2> FirstName: {name.firstName}</h2>
        <h2> lastName: {name.lastName}</h2>
        <button onClick={()=>{
            alert(JSON.stringify(name,undefined,2))
            setName(init)
            }} >Submit</button>
    </div>
  )
}

export default HookCounterThree