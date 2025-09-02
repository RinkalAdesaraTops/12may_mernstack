import React, { useState } from 'react'

const StateExample = () => {
    const [name,setName] = useState("Test123")
    const [age,setAge] = useState(31)
    var [salary,setSalary] = useState(25000)
    const setNewName = ()=>{
        setName("ABCD")
    }
  return (
    <div>
      <h3>Name is -- {name}</h3>
      <h3>Age is -- {age}</h3>
      <button onClick={setNewName}>CHange Name</button>
      <button onClick={()=>setAge(24)}>Change Age</button>
    </div>
  )
}
export default StateExample
