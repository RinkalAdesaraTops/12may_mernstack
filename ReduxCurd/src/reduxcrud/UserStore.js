import React from 'react'
import UserReducer from './UserReducer'
import { createStore } from 'redux'

const UserStore = createStore(UserReducer)

export default UserStore
