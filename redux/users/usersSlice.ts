import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserType} from '../dataTypes';

type UsersState = {
  loading: boolean;
  error: null | string;
  suggestedUser: UserType[] | null;
};

const initialState: UsersState = {
  loading: false,
  error: null,
  suggestedUser: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getSuggestedUsersStart(state) {
      state.loading = true;
    },
    getSuggestedUsersSuccess(state, action: PayloadAction<UserType[]>) {
      state.loading = false;
      state.suggestedUser = action.payload;
    },
    getSuggestedUsersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getSuggestedUsersFailure,
  getSuggestedUsersStart,
  getSuggestedUsersSuccess,
} = usersSlice.actions;



export default usersSlice.reducer;
