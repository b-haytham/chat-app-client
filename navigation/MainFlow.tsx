import React from 'react';

import {MainTabParamList} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import FriendsFlow from './FriendsFlow';
import SettingFlow from './SettingFlow';
import {Icon} from 'react-native-elements';
import HomeFlow from './HomeFlow';
import NotificationScreen from '../screens/NotificationScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

const getTabBarVisibility = (route: any) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : '';
  if (routeName === 'Conversation') {
    return false;
  }
  return true;
};
const MainFlow = () => {
  return (
    <Tab.Navigator
      lazy={false}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: 'black',
        inactiveTintColor: 'grey',
        labelStyle: {fontWeight: 'bold'},
        tabStyle: {paddingTop: 10, borderTopRightRadius: 15},
        style: {
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 9,
          },
          shadowOpacity: 0.5,
          shadowRadius: 12.35,

          elevation: 19,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeFlow}
        options={{
          tabBarIcon: () => <Icon type="font-awesome" name="home" />,
        }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsFlow}
        options={({route}) => {
          return {
            tabBarVisible: getTabBarVisibility(route),
            tabBarIcon: () => <Icon type="font-awesome" name="users" />,
          };
        }}
      />
      {/* <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarVisible: false,
          tabBarIcon: () => <Icon type="font-awesome" name="user-circle" />,
        }}
      /> */}
      <Tab.Screen
        name="Settings"
        component={SettingFlow}
        options={{tabBarIcon: () => <Icon type="font-awesome" name="cogs" />}}
      />
    </Tab.Navigator>
  );
};

export default MainFlow;
