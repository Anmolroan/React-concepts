import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {
    const [count,setCount] =useState(0);
    // const tick =()=>{
    //     setCount(count+1)
    // }
    // useEffect(()=>{
    //     let interval = setInterval(tick,1000);
    //     console.log("rendring ")
    //     return ()=>{
    //         clearInterval(interval);
    //     }
    // },[count])
  return (
    <div>
        <h1>IntervalHookCounter</h1>
    <div>{count}</div>
    </div>
  )
}

export default IntervalHookCounter