import React, { useState } from 'react'
import BarCreate from './BarCreate'

const BarProvider = (props) => {
    const [array,setArray]=useState("zayan")
  return (
    <BarCreate.Provider value={{array,setArray}}>
        {props.children}
    </BarCreate.Provider>
  )
}

export default BarProvider 