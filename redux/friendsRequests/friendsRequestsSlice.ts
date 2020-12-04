import {FriendShipRequestType} from '../dataTypes';

import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type FriendShipRequestState = {
  loading: boolean;
  error: string;
  friendshipRequestsSent: FriendShipRequestType[];
  friendShipRequestsRecieved: FriendShipRequestType[];
};

const initialState: FriendShipRequestState = {
  error: null,
  loading: false,
  friendShipRequestsRecieved: [],
  friendshipRequestsSent: [],
};

const friendShipRequestsSlice = createSlice({
  name: 'friendShipRequests',
  initialState,
  reducers: {
    getFriendShipRequestsStart(state) {
      state.loading = true;
    },
    getFriendShipRequestsSuccess(
      state,
      action: PayloadAction<{
        requestsSent: FriendShipRequestType[];
        requestsRecieved: FriendShipRequestType[];
      }>,
    ) {
      state.loading = false;
      state.friendShipRequestsRecieved = action.payload.requestsRecieved;
      state.friendshipRequestsSent = action.payload.requestsSent;
    },
    getFriendShipRequestsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    newRequestRecieved(state, action: PayloadAction<FriendShipRequestType>) {
      state.friendShipRequestsRecieved.unshift(action.payload);
    },
    newRequestSent(state, action: PayloadAction<FriendShipRequestType>) {
      state.friendshipRequestsSent.unshift(action.payload);
    },
    deleteRequestSent(state, action: PayloadAction<string>) {
      state.friendshipRequestsSent = state.friendshipRequestsSent.filter(
        (r) => r._id !== action.payload,
      );
    },
    deleteRequestRecived(state, action: PayloadAction<string>) {
      state.friendShipRequestsRecieved = state.friendShipRequestsRecieved.filter(
        (r) => r._id !== action.payload,
      );
    },
  },
});

export const {
  getFriendShipRequestsFailure,
  getFriendShipRequestsStart,
  getFriendShipRequestsSuccess,
  newRequestSent,
  newRequestRecieved,
  deleteRequestRecived,
  deleteRequestSent,
} = friendShipRequestsSlice.actions;

export default friendShipRequestsSlice.reducer;
