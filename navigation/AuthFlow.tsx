
import React from 'react'


import Login from '../screens/Login'
import Register from '../screens/Register'
import Launch from '../screens/Launch'

import { createStackNavigator } from '@react-navigation/stack'
import { AuthStackParamList } from './types'

const Stack = createStackNavigator<AuthStackParamList>()

const AuthFlow = () => {

    return (
       <Stack.Navigator initialRouteName='Launch'>
           <Stack.Screen name='Launch' component={Launch} options={{headerShown: false}} />
           <Stack.Screen name='Register' component={Register} options={{headerShown: false}} />
           <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
       </Stack.Navigator>
    )
}

export default AuthFlow
