import { configureStore } from '@reduxjs/toolkit'
import RtkReducer from './RtkReducer'

const Rtkstore = configureStore({
    reducer:{
        "Counter":RtkReducer
    }
})

export default Rtkstore
