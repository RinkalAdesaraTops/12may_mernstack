import React, { useEffect, useState } from 'react'

const Contact = () => {
    let [count,setCount] = useState(0)
    useEffect(()=>{
        for(let i=1;i<=10000;i++){
            count+=1
        }
        setCount(count)
    },[])
  return (
    <div>
      Count is - {count}
    </div>
  )
}

export default Contact
