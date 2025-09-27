import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import CounterStore from './redux/CounterStore.js'
import UserStore from './reduxcrud/UserStore.js'
import Rtkstore from './Rtk/Rtkstore.js'
import RtkUserStore from './RTKCrud/RtkUserStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={RtkUserStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
