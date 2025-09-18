import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'
import Emp from './EMp'
import Customer from './Customer'
import ApiExample from './ApiExample'
import ApiCrud from './ApiCrud'
import Menu from './Menu'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Home'
import Contact from './Contact'
import About from './About'


function App() {
  return (
    <>
      {/* <User /> */}
      {/* <Emp /> */}
      {/* <Customer /> */}
      {/* <ApiExample /> */}
      {/* <ApiCrud /> */}
      <Menu />
      {/* <BrowserRouter> */}
      <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/about' element={<About />}/>
      </Routes>
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
