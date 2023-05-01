import React,{useState} from 'react'

function Counter() {
    const [value,setValue] = useState(0)
  return (
    <div>
    <h1>Counter</h1>
    <div>{value}</div>
    <button onClick={()=>{setValue(value+1)}}>+</button>
    <button onClick={()=>{setValue(value-1)}}>-</button>
    </div>
  )
}

export default Counter