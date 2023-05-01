import React, { useState } from 'react'

function HookCounter() {
    const init =0;
    const [count,setCount] =useState(init)
  return (
    <div>
    <h1>HookCounter</h1>
    <div>{count}</div>
    <button onClick={() =>setCount((prev)=>prev+1)}>+</button>
    <button onClick={() =>setCount((prev)=>prev-1)}>-</button>
    <button onClick={() =>setCount(init)}>Reset</button>
    
    </div>
  )
}

export default HookCounter