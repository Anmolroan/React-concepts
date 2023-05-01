import React, { useState } from 'react'

function HookCounterFour() {
    const [items,setItems] =useState([])
    const addItems = ()=>{
        setItems([...items,{id:items.length,value:items.length+1}])
        alert(JSON.stringify(items))
    }
  return (
    <div>
        <h2>HookCounterFour</h2>
        <div>{items.map(el=>(
            <div key={el.id}>{el.value}</div>
        ))}</div>
        <button onClick={()=>addItems()}>Button</button>
    </div>

  )
}

export default HookCounterFour