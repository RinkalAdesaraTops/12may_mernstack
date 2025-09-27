import { configureStore } from '@reduxjs/toolkit'
import RtkUserReducer from './RtkUserReducer'

const RtkUserStore = configureStore({
    reducer:{
        "User":RtkUserReducer
    }
})

export default RtkUserStore
