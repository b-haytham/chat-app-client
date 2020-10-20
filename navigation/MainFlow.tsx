
import React from 'react'

import HomeScreen from '../screens/HomeScreen'
import { MainTabParamList } from './types'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Friends from '../screens/Friends'
import Profile from '../screens/Profile'
import Settings from '../screens/Settings'

const Tab =  createBottomTabNavigator<MainTabParamList>()

const MainFlow = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen}  />
            <Tab.Screen name='Friends' component={Friends}  />
            <Tab.Screen name='Profile' component={Profile}  />
            <Tab.Screen name='Settings' component={Settings} />
        </Tab.Navigator>
    )
}

export default MainFlow