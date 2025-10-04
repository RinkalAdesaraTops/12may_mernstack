import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFunc, minusFunc } from './redux/CounterAction'

const CounterComponent = () => {
    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch()
  return (
    <div>
      <h3>Count is =-- {count}</h3>
      <button onClick={()=>dispatch(addFunc())}>Add</button>
      <button onClick={()=>dispatch(minusFunc())}>Minus</button>
    </div>
  )
}

export default CounterComponent
