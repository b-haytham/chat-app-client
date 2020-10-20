
import React from 'react'
import { View, Text } from 'react-native'
import { FriendsSceenNavigationProps, FriendsSceenRouteProps } from './types'



type Props = {
    navigation: FriendsSceenNavigationProps
    route: FriendsSceenRouteProps
  }

const Friends: React.FC<Props> = () => {
    return (
        <View>
            <Text>Fiends</Text>
        </View>
    )
}

export default Friends
