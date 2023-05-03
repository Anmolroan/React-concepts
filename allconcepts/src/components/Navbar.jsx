import React from 'react'
import {NavLink} from "react-router-dom"
function Navbar() {
    const navLinkstyles =({isActive})=>{
        return {
            fontWeight: isActive?'bold':'normal',
            textDecoration: isActive?'none':'underline'
        }
    }
  return (
    <nav>
    <NavLink to ="/datafetching" style ={navLinkstyles}>
    datafetching
    </NavLink>
    <NavLink to ="/HookCounterOne" style ={navLinkstyles}>
    HookCounterOne
    </NavLink>
    <NavLink to ="/IntervalHookCounter" style ={navLinkstyles}>
    IntervalHookCounter
    </NavLink>
    <NavLink to ="/Counter" style ={navLinkstyles}>
    Counter
    </NavLink>
    <NavLink to ="/HookCounterFour" style ={navLinkstyles}>
    HookCounterFour
    </NavLink>
    </nav>
  )
}

export default Navbar