import { combineReducers } from '@reduxjs/toolkit'

import authSlice from './auth/authSlice'
import usersSlice from './users/usersSlice' 
import roomsSlice from './rooms/roomsSlice'

const rootReducer = combineReducers({
  auth: authSlice,
  users: usersSlice,
  rooms: roomsSlice

})
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;


