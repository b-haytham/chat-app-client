
import React from 'react'


import Login from '../screens/Login'
import Register from '../screens/Register'
import Launch from '../screens/Launch'

import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const AuthFlow = () => {

    return (
       <Stack.Navigator initialRouteName='Launch'>
           <Stack.Screen name='Launch' component={Launch} options={{headerShown: false}} />
           <Stack.Screen name='Register' component={Register} />
           <Stack.Screen name='Login' component={Login} />
       </Stack.Navigator>
    )
}

export default AuthFlow
