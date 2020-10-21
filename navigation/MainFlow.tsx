
import React from 'react'

import HomeScreen from '../screens/HomeScreen'
import { MainTabParamList } from './types'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from '../screens/Profile'
import Settings from '../screens/Settings'
import FriendsFlow from './FriendsFlow'

const Tab =  createBottomTabNavigator<MainTabParamList>()

const MainFlow = () => {
    return(
        <Tab.Navigator tabBarOptions={{keyboardHidesTabBar: true}}>
            <Tab.Screen name='Home' component={HomeScreen}   />
            <Tab.Screen name='Friends' component={FriendsFlow} options={{tabBarVisible: false}}  />
            <Tab.Screen name='Profile' component={Profile}  options={{tabBarVisible: false}} />
            <Tab.Screen name='Settings' component={Settings}  />
        </Tab.Navigator>
    )
}

export default MainFlow