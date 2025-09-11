import React, { useState } from 'react'
import styled from 'styled-components'
import mystyle from './Mystyle.module.css'
const StateExample = () => {
    const [name,setName] = useState("Test123")
    const [age,setAge] = useState(31)
    const setNewName = ()=>{
        setName("ABCD")
    }
    const H3 = styled.h3 `
          color:red;
          background-color:yellow;
    `
  return (
    <div>
      <H3>Name is -- {name}</H3>    
      <h3 className={mystyle.abc}>Age is -- {age}</h3>
      <button onClick={setNewName}>CHange Name</button>
      <button onClick={()=>setAge(24)}>Change Age</button>
    </div>
  )
}
export default StateExample
