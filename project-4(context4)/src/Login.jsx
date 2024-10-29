import React, {useState, useContext} from 'react'
import Usercontext from './Usercontext/Usercontext'
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setdata} = useContext(Usercontext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setdata({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login