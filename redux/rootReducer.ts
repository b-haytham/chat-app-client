import { combineReducers } from '@reduxjs/toolkit'

import usersSlice from './users/usersSlice'

const rootReducer = combineReducers({
  users: usersSlice
})
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;


