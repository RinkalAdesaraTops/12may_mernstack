import React from 'react'
import { createStore } from 'redux'
import CounterReducer from './CounterReducer'

const CounterSTore = createStore(CounterReducer)

export default CounterSTore
