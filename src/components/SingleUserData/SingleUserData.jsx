import React from 'react'

const SingleUserData = ({singleData}) => {
    console.log(singleData);
    
  return (
    <div>
        <h1 className='m-3 p-4 bg-sky-300 '> Name : {singleData.name} </h1>
        <p className='m-3 p-4 bg-red-600  '> Name : {singleData.phone} </p>
    </div>
  )
}

export default SingleUserData