
import { useEffect, useState } from 'react'
import './App.css'
import SingleUserData from './components/SingleUserData/SingleUserData';

function App() {
 const [allData , setAllData] = useState([]);
useEffect(() =>{
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => setAllData(data));
},[]);

  return (
    <div>
      <h1> Data Length {allData.length} </h1>
      <h1></h1>
     {
      allData.map(singleData => <SingleUserData
      key = {singleData.id}
     singleData = {singleData}
      ></SingleUserData>)
     }
    </div>
  )
}

export default App
