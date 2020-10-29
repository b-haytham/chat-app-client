import { combineReducers } from '@reduxjs/toolkit'

import authSlice from './auth/authSlice'
import usersSlice from './users/usersSlice' 

const rootReducer = combineReducers({
  auth: authSlice,
  users: usersSlice

})
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;


