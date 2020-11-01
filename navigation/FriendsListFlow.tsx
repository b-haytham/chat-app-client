import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {View, Text} from 'react-native';
import Friends from '../screens/Friends';
import RequestsRecieved from '../screens/RequestsRecieved';
import RequestsSent from '../screens/RequestsSent';
import {FriendsListsTopTabParamsList} from './types';

const Tab = createMaterialTopTabNavigator<FriendsListsTopTabParamsList>();

const FriendsListFlow = () => {
  return (
    <Tab.Navigator
      initialRouteName="Friends"
      tabBarOptions={{
        labelStyle: {color: 'black', fontSize: 12},
        indicatorStyle: {backgroundColor: 'black'},
        style: {
          borderBottomRightRadius: 25,
          borderBottomLeftRadius: 25,
          overflow: 'hidden',
        },
      }}>
      <Tab.Screen
        name="Friends"
        component={Friends}
        options={{tabBarLabel: 'Friends'}}
      />
      <Tab.Screen
        name="RequestsSent"
        component={RequestsSent}
        options={{tabBarLabel: 'Requests Sent'}}
      />
      <Tab.Screen
        name="RequestsRecieved"
        component={RequestsRecieved}
        options={{tabBarLabel: 'Requests Recieved'}}
      />
    </Tab.Navigator>
  );
};

export default FriendsListFlow;
