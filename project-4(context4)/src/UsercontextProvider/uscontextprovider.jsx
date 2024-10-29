import React from 'react'
import Usercontext from '../Usercontext/Usercontext'
import { useState } from 'react'

function Uscontextprovider({children}) {
    let [data,setdata] = useState(null);
  return (
    <Usercontext.Provider value={{data,setdata}}>
        {children}
    </Usercontext.Provider>
  )
}

export default Uscontextprovider