import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import CounterSTore from './redux/CounterSTore.js'
import Rtkstore from './rtk/Rtkstore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Rtkstore}>
    <App />
    </Provider>
  </React.StrictMode>,
)
