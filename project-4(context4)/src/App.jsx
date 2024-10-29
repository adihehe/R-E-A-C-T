import { useState } from 'react'
import Login from './Login'
import Profile from './profile'
import Uscontextprovider from './UsercontextProvider/uscontextprovider'
function App() {
  const [count, setCount] = useState(0)

  return (
   <Uscontextprovider>
    <Login/>
    <Profile/>
   </Uscontextprovider>
  )
}

export default App
