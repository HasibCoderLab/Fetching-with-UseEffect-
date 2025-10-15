import React from 'react'

const SingleUserData = (props) => {
    console.log(props);
    
  return (
    <div>
        <h1 className='m-3 p-4 bg-sky-300 '> Name : {props.singleData.name} </h1>
    </div>
  )
}

export default SingleUserData