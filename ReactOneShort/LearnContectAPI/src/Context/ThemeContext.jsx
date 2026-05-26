import React, { createContext } from 'react'
//export must be always outside of a function.
   export const ThemeDataContext = createContext();
const ThemeContext = (props) => {

  return (
    <div>
      <ThemeDataContext.Provider value={'sumit'}>
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext
