import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import AuthFlow from './AuthFlow';
import MainFlow from './MainFlow';

import client from '../utils/feathersClient';
import {RootState} from '../redux/rootReducer';
import {useAppDispatch} from '../redux/store';
import {reAuthenticate} from '../redux/auth/authSlice';
import {Text} from 'react-native';
import {getSuggestedUser} from '../redux/users/thunkActions';
import { getRooms } from '../redux/rooms/thunkActions';

const Navigation = () => {
  const dispatch = useAppDispatch();

  const {isAuthenticated, error, loading, currentUser} = useSelector(
    (state: RootState) => state.auth,
  );
  console.log(isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getSuggestedUser());
      dispatch(getRooms(currentUser._id))
    }
  }, [isAuthenticated]);

  useEffect(() => {
    dispatch(reAuthenticate());
  }, []);

  if (loading) {
    return <Text>...Loading</Text>;
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainFlow /> : <AuthFlow />}
    </NavigationContainer>
  );
};

export default Navigation;
