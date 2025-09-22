import React, { useRef, useState } from 'react'

const UseRefexample = () => {
    const [count,setCount] = useState(0)
    let a=useRef(10)
    const addCount = ()=>{
        setCount(count+1)
         a.current=a.current+1
        console.log(a);     
    }
  return (
    <div>
        <h3>Count is -- {count}</h3>
        <button onClick={addCount}>Add</button>
    </div>
  )
}
export default UseRefexample
