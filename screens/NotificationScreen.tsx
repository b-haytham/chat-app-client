
import React from 'react'
import { View, Text } from 'react-native'
import { NotificationSceenNavigationProps, NotificationSceenRouteProps } from './types'


type Props = {
    navigation: NotificationSceenNavigationProps
    route: NotificationSceenRouteProps
}

const NotificationScreen = () => {
    return (
        <View>
            <Text>Notification</Text>
        </View>
    )
}

export default NotificationScreen
