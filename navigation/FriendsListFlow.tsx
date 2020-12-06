import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import Friends from '../screens/Friends';
import RequestsRecieved from '../screens/RequestsRecieved';
import RequestsSent from '../screens/RequestsSent';
import {Icon} from 'react-native-elements';

import {FriendsListsTopTabParamsList} from './types';

const Tab = createMaterialTopTabNavigator<FriendsListsTopTabParamsList>();

const FriendsListFlow = () => {
  return (
    <Tab.Navigator
      initialRouteName="Friends"
      tabBarOptions={{
        // labelStyle: {color: 'black', fontSize: 12},
        indicatorStyle: {backgroundColor: 'black'},
        showLabel: false,
        showIcon: true,
        iconStyle: {
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        },
        style: {
          borderBottomRightRadius: 25,
          borderBottomLeftRadius: 25,
          overflow: 'hidden',
        },
      }}>
      <Tab.Screen
        name="Friends"
        component={Friends}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon type="font-awesome-5" name="user-friends" />
          ),
        }}
      />
      <Tab.Screen
        name="RequestsSent"
        component={RequestsSent}
        options={{
          tabBarIcon: () => (
            <Icon
              name="trending-up"
              iconStyle={{fontWeight: 'bold', fontSize: 40}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="RequestsRecieved"
        component={RequestsRecieved}
        options={{
          tabBarIcon: () => (
            <Icon
              name="trending-down"
              iconStyle={{fontWeight: 'bold', fontSize: 40}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default FriendsListFlow;
