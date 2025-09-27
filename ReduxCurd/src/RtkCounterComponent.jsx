import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Rtk/RtkReducer'

const RtkCounterComponent = () => {
  let count = useSelector((state)=>state.Counter.count)
  const dispatch = useDispatch()
  return (
    <div>
      <h3>Redux example</h3>
      <h4>Count is -- {count}</h4>
      <button onClick={()=>dispatch(increment())}>Add</button>
      <button onClick={()=>dispatch(decrement())}>Minus</button>
    </div>
  )
}

export default RtkCounterComponent
