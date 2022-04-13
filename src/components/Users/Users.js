import React from 'react'
import useUsers from '../../Hook/useUsers'
import SingleUsers from '../SingleUsers/SingleUsers';

const Users = () => {

  const allUsers = useUsers('https://jsonplaceholder.typicode.com/users');

  // console.log(allUsers)

  return (
    <div className='row container'>
       {
         allUsers?.map(user => <SingleUsers key={user.id} user={user}></SingleUsers>)
       }
    </div>
  )
}

export default Users