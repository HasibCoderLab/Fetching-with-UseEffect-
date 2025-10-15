
import { useEffect, useState } from 'react'
import './App.css'

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
        allData.map(data => <p> {data.name}</p>)
      }
    </div>
  )
}

export default App
