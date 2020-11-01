import React from 'react'
import { View, Text } from 'react-native'
import { RequestsSentSceenNavigationProps, RequestsSentSceenRouteProps } from './types'



type Props = {
    navigation: RequestsSentSceenNavigationProps
    route: RequestsSentSceenRouteProps
}


const RequestsSent: React.FC<Props> = ({}) => {
    return (
        <View>
            <Text>RequestsSent</Text>
        </View>
    )
}

export default RequestsSent
