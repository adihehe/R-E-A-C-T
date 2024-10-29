import React, {useContext} from 'react'
import Usercontext from './Usercontext/Usercontext'
function Profile() {
    const {data} = useContext(Usercontext)
    
    if (!data) return <div>please login</div>

    return <div>Welcome {data.username}</div>
}

export default Profile