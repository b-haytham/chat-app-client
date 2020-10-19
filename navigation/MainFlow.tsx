
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import { MainStackParamList } from './types'

const Stack =  createStackNavigator<MainStackParamList>()

const MainFlow = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default MainFlow