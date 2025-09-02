import React, { useEffect, useState } from 'react'

const LifecycleFunction = () => {
  //hooks
    const [count,setCount] = useState(10)
    useEffect(()=>{
        setTimeout(()=>{
            setCount(15)
        },3000)
})
  return (
    <div>
        <h3>Count is -- {count}</h3>
    </div>
  )
}

export default LifecycleFunction
