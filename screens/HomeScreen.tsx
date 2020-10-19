import React from 'react'
import { Text, View } from 'react-native'
import { LaunchScreenNavigationProps, LaunchSceenRouteProps } from './types'


type Props = {
    navigation: LaunchScreenNavigationProps
    route: LaunchSceenRouteProps
}
  

const  HomeScreen:React.FC<Props> = ({route}) => {
    
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
           <Text> Hello from Home </Text>
        </View>
    )
}


export default HomeScreen