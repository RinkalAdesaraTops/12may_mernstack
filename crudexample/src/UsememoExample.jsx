import React, { useMemo, useState } from 'react'

const UsememoExample = () => {
    const [count,setCount] = useState(0)
    const [num,setNum] = useState(0)
    const addCount = ()=>{
        console.log('add count called..');        
        setCount(count+1)
    }
    const addNum = ()=>{
        console.log('add num called..');
        setNum(num+1)
    }
    const addCalc = (count)=>{
        console.log('add calc func called... ');      
        for(let i=1;i<=10000;i++){
            count+=i
        }
        return count
    }
    const calc = useMemo(()=>{
         return addCalc(count)
    },[count])   

  return (
    <div>
        <h3>Count is -- {count}</h3>
        <button onClick={addCount}>Add </button>
        <h3>Number is -- {num}</h3>
        <button onClick={addNum}>Add </button>
        <h3>Calc is = {calc}</h3>

    </div>
  )
}

export default UsememoExample
