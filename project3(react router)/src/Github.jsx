import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
  return (
    <div className='mx-auto'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="picture" />
    Name : {data.login}
    </div>
  )
}

export default Github