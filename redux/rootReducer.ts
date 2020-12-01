import {combineReducers} from '@reduxjs/toolkit';

import authSlice from './auth/authSlice';
import usersSlice from './users/usersSlice';
import roomsSlice from './rooms/roomsSlice';
import postsSlice from './posts/postsSlice';
import friendShipRequestsSlice from './friendsRequests/friendsRequestsSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  users: usersSlice,
  rooms: roomsSlice,
  posts: postsSlice,
  friendShipRequests: friendShipRequestsSlice,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
