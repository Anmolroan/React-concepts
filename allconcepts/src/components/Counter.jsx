import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
function Counter() {
    const [value,setValue] = useState(0)
    const navigate = useNavigate();
  return (
    <div>
    <h1>Counter</h1>
    <div>{value}</div>
    <button onClick={()=>{setValue(value+1) ;navigate('/')}}>+</button>
    <button onClick={()=>{setValue(value-1)}}>-</button>
    </div>
  )
}

export default Counter