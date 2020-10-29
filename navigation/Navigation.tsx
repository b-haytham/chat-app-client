import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AuthFlow from './AuthFlow';
import MainFlow from './MainFlow';

import client from '../utils/feathersClient';
import { RootState } from '../redux/rootReducer';
import { useAppDispatch } from '../redux/store';
import { reAuthenticate } from '../redux/users/usersSlice';
import { Text } from 'react-native';

const Navigation = () => {
  const dispatch = useAppDispatch()
  
  const {isAuthenticated ,error,loading } = useSelector((state: RootState)=> state.users)
  console.log(isAuthenticated)


  useEffect(()=>{
    dispatch(reAuthenticate())
  },[])

  if(loading) {
    return <Text>...Loading</Text>
  }

  return (
    
    <NavigationContainer >
     {isAuthenticated ?  <MainFlow /> :  <AuthFlow /> }
    </NavigationContainer>
  );
};

export default Navigation;
