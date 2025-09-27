import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterComponent from './CounterComponent'
import UserCOmponent from './UserCOmponent'
import RtkCounterComponent from './RtkCounterComponent'
import RtkUserCrud from './RtkUserCrud'

function App() {

  return (
    <>
       {/* <CounterComponent /> */}
       {/* <UserCOmponent /> */}
       {/* <RtkCounterComponent /> */}
       <RtkUserCrud />
    </>
  )
}

export default App
