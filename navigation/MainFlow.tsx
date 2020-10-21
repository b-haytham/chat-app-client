
import React from 'react'

import HomeScreen from '../screens/HomeScreen'
import { MainTabParamList } from './types'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from '../screens/Profile'
import FriendsFlow from './FriendsFlow'
import SettingFlow from './SettingFlow'

const Tab =  createBottomTabNavigator<MainTabParamList>()

const MainFlow = () => {
    return(
        <Tab.Navigator tabBarOptions={{keyboardHidesTabBar: true}}>
            <Tab.Screen name='Home' component={HomeScreen}   />
            <Tab.Screen name='Friends' component={FriendsFlow} options={{tabBarVisible: false}}  />
            <Tab.Screen name='Profile' component={Profile}  options={{tabBarVisible: false}} />
            <Tab.Screen name='Settings' component={SettingFlow}  />
        </Tab.Navigator>
    )
}

export default MainFlow