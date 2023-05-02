import React,{createContext, useState} from 'react'
 export const LoveContext =createContext()
function LoveContextProvider({children}) {
    const [loveBox,setLoveBox] =useState("I love you");
    const   afterYears = (years)=>{
        if(years<=10){
            setLoveBox("I still love you ")
        }else if(years>10){
            setLoveBox("f*** you")
        }
       
    }
  return (
    <LoveContext.Provider value={{loveBox,afterYears}}>
        {children}
    </LoveContext.Provider>
  )
}

export default LoveContextProvider