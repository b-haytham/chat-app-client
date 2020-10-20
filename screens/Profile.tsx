import React from 'react'
import { View, Text } from 'react-native'
import { ProfileSceenNavigationProps, ProfileSceenRouteProps } from './types'



type Props = {
    navigation: ProfileSceenNavigationProps
    route: ProfileSceenRouteProps
  }

const Profile: React.FC<Props> = () => {
    return (
        <View>
            <Text>Profile</Text>
        </View>
    )
}

export default Profile
