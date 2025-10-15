import React from 'react'

const SingleUserData = ({ singleData }) => {
    const { name, phone, website, username, email, id, company } = singleData;

    return (
        <div>
            <span className='m-10 p-1 bg-red-600  '> ID : {id} </span>
            <h1 className='m-3 p-4 bg-sky-300 '> Name : {name} </h1>
            <p className='m-3 p-4 bg-green-600  '> Phone : {phone} </p>
            <p className='m-3 p-4 bg-emerald-600  '> Website : {website} </p>
            <p className='m-3 p-4 bg-blue-600  '> Username : {username} </p>
            <p className='m-3 p-4 bg-pink-300  '> Email : {email} </p>
            <p className='m-3 p-4 bg-indigo-600  '> company : {company.name} </p>
        </div>
    )
}

export default SingleUserData