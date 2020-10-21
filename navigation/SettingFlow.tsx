
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text} from 'react-native'
import Appearance from '../screens/Appearance'
import EditProfile from '../screens/EditProfile'
import Settings from '../screens/Settings'
import { SettingStackParamList } from './types'


const Stack = createStackNavigator<SettingStackParamList>()

const SettingFlow = () => {
    return (
        <Stack.Navigator initialRouteName='SettingsMain'>
            <Stack.Screen name='SettingsMain' component={Settings} options={{headerShown: false}} />
            <Stack.Screen  name='Appearance' component={Appearance} options={{headerShown: false}} />
            <Stack.Screen  name='EditProfile' component={EditProfile} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default SettingFlow
