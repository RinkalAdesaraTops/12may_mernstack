import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFunc, minusFunc, resetFunc } from './redux/CounterAction'

const CounterComponent = () => {
  let count = useSelector((state)=>state.count)
  const dispatch = useDispatch()
  return (
    <div>
      <h3>Redux example</h3>
      <h4>Count is -- {count}</h4>
      <button onClick={()=>dispatch(addFunc())}>Add</button>
      <button onClick={()=>dispatch(minusFunc())}>Minus</button>
      <button onClick={()=>dispatch(resetFunc())}>Reset</button>
    </div>
  )
}

export default CounterComponent
