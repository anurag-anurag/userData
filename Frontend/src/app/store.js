import {configureStore}  from '@reduxjs/toolkit'
import userReduser from '../feature/userSlice'
export const store = configureStore({
    reducer:{
        users:userReduser
    }
})