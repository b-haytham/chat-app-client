import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoginSceenNavigationProps, RegisterScreenNavigationProps} from '../../screens/types';
import client from '../../utils/feathersClient';
import {UserType} from '../dataTypes';
import {AppThunk} from '../store';

type AuthState = {
  isAuthenticated: boolean;
  loading: boolean;
  currentUser: UserType | null;
  error: string | null;
};

const initialState: AuthState = {
  isAuthenticated: false,
  loading: false,
  currentUser: null,
  error: null,
};

const authSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    createUserStart(state) {
      state.loading = true;
    },
    createUserSuccess(state) {
      state.loading = false;
    },
    createUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    authenticateUserStart(state){
        state.loading = true
    },
    authenticateUserSuccess(state, action: PayloadAction<UserType>){
        state.loading = false
        state.currentUser = action.payload
        state.isAuthenticated= true
    },
    authenticateUserFailure(state, action: PayloadAction<string>){
        state.loading = false
        state.error = action.payload
    }
  },
});

export const {
  createUserStart,
  createUserFailure,
  createUserSuccess,
} = authSlice.actions;

export const createUser = (
  username: string,
  email: string,
  password: string,
  navigation: RegisterScreenNavigationProps,
): AppThunk => async (dispatch) => {
  try {
    dispatch(authSlice.actions.createUserStart());
    const user = await client.service('users').create({
      username,
      email,
      password,
    });
    console.log(user);
    dispatch(authSlice.actions.createUserSuccess());
    navigation.navigate('Login')
  } catch (error) {
    console.log('error create User', error);
    dispatch(authSlice.actions.createUserFailure('Error Create User'));
  }
};

export const authenticate = (
    email: string,
    password: string,
    navigation: LoginSceenNavigationProps,
  ): AppThunk => async (dispatch) => {
    try {
      dispatch(authSlice.actions.authenticateUserStart());
      const response = await client.authenticate({
          strategy: 'local',
          email,
          password
      })
      console.log(response);
      dispatch(authSlice.actions.authenticateUserSuccess(response.user));
    } catch (error) {
      console.log('error create User', error);
      dispatch(authSlice.actions.createUserFailure('Error authenticate User'));
    }
  };
  

  export const reAuthenticate = (): AppThunk => async (dispatch) => {
    try {
      dispatch(authSlice.actions.authenticateUserStart());
      const response = await client.reAuthenticate()
      console.log(response);
      dispatch(authSlice.actions.authenticateUserSuccess(response.user));
    } catch (error) {
      console.log('error create User', error);
      dispatch(authSlice.actions.createUserFailure('Error authenticate User'));
    }
  };
  


export default authSlice.reducer;
