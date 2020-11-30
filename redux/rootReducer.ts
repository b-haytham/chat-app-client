import {combineReducers} from '@reduxjs/toolkit';

import authSlice from './auth/authSlice';
import usersSlice from './users/usersSlice';
import roomsSlice from './rooms/roomsSlice';
import postsSlice from './posts/postsSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  users: usersSlice,
  rooms: roomsSlice,
  posts: postsSlice,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
