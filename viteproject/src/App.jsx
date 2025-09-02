import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropsExample from './PropsExample'
import StateExample from './StateExample'
import ClasscomponentExample from './ClasscomponentExample'
import LifecycleClass from './LifecycleClass'
import LifecycleFunction from './LifecycleFunction'

function App() {
  let name="TEST"
  let age=26
  return (
   <>
   <div>
      <h3>Vite Project called..</h3>
      {/* <PropsExample myname={name} myage={age} /> */}
      <StateExample />
      {/* <ClasscomponentExample /> */}
      {/* <LifecycleClass /> */}
      {/* <LifecycleFunction /> */}
   </div>
   </>
  )
}
export default App
