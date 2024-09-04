import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'


const Users = () => {
    const [searchParams , setSearchParams ] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active';
  return (
    <div>
        <h1>user 1</h1>
        <h1>user 2</h1>
        <h1>user 3</h1>
        <h1>user 4</h1>
        <h1>user 5</h1>
        <Outlet />
        <button onClick={()=>setSearchParams({filter : 'active'}) }>Active user</button>
        <button onClick={()=>setSearchParams({})}>Reset Filter</button>
        {
            showActiveUsers ? <h1>Active Users</h1> : null
        }
    </div>
  )
}

export default Users