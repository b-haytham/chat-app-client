import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeStackParamList} from './types';

import HomeScreen from '../screens/HomeScreen';
import UsersProfile from '../screens/UsersProfile';
import PostDetail from '../screens/PostDetail';

const Stack = createStackNavigator<HomeStackParamList>();

const HomeFlow = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UsersProfile"
        component={UsersProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PostDetail"
        component={PostDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeFlow;
