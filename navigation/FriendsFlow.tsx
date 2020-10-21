import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Conversation from '../screens/Conversation'
import Friends from '../screens/Friends'


import { FriendsStackParamList } from './types'


const Stack = createStackNavigator<FriendsStackParamList>()

const FriendsFlow = () => {
    return (
        <Stack.Navigator initialRouteName='FriendList'>
            <Stack.Screen name='FriendList' component={Friends} options={{headerShown: false}} />
            <Stack.Screen name='Conversation' component={Conversation} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default FriendsFlow
