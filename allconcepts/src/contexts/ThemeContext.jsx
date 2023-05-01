import React, { useState } from 'react'
 export const ThemeContext = React.createContext()
function ThemeContextProvider({children}) {
   const [theme,setTheme] = useState("white")
   const toggleTheme = ()=>{
    setTheme(theme==="white"?"black":"white")
   }
  return (
<ThemeContext.Provider value={{theme,toggleTheme}} >
{children}
</ThemeContext.Provider>
  )
}

export default ThemeContextProvider