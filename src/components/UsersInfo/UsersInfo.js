import React from 'react'
import { useParams } from 'react-router-dom';
import useUsers from '../../Hook/useUsers';
import SingleUsers from '../SingleUsers/SingleUsers';

const UsersInfo = () => {
    let {userId} = useParams();


    const allUsers = useUsers(`https://jsonplaceholder.typicode.com/users?id=${userId}`)


    console.log(allUsers[0])

  return (
    <div>
        <h1>{userId}</h1>
        <SingleUsers user={allUsers[0]}>
            {
                {email:allUsers[0]?.email, phone: allUsers[0]?.phone}
            }
        </SingleUsers>
    </div>
  )
}

export default UsersInfo