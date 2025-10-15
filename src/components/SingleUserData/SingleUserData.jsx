import React from 'react'

const SingleUserData = ({singleData}) => {
   const {name , phone , website} =  singleData;
    
  return (
    <div>
        <h1 className='m-3 p-4 bg-sky-300 '> Name : {name} </h1>
        <p className='m-3 p-4 bg-red-600  '> Name : {phone} </p>
        <p className='m-3 p-4 bg-red-600  '> Name : {website} </p>
    </div>
  )
}

export default SingleUserData