import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useUsers from '../../Hook/useUsers'
import SingleUsers from '../SingleUsers/SingleUsers';

const Home = () => {

  const usersData = useUsers('https://jsonplaceholder.typicode.com/users')


  if(usersData.length){
    // console.log(usersData.length)// = 10
    // console.log(usersData)
    usersData.length = 4;
  }
  // console.log(usersData)
  return (
    <div className='container'>
      <h1>total users {usersData.length}</h1>
      <div className="row">
        {
          usersData?.map(user=><SingleUsers key={user.id} user={user}></SingleUsers>)
        }
      </div>

      <Link to="/users">Load more....</Link>
    </div>
  )
}

export default Home