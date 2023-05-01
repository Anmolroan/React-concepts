import React, { useEffect, useState } from 'react'

function HookCounterOne() {
    const [count,setCount] =useState(0);
    const [value,setValue] = useState(1);
    useEffect(()=>{
        console.log("came in useEffect")
        document.title = `You clicked ${count} Times`
    },[count])
  return (
    <div>
        <h1>HookCounterOne</h1>
        <button onClick={()=>setValue(value+1)}>Value :{value}</button>
        <button onClick={()=>setCount(count+1)}> Count :{count}</button>

    </div>
  )
}

export default HookCounterOne