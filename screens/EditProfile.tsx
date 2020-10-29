import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ActionBar from '../Components/ActionBar/ActionBar'
import { EditProfileSceenNavigationProps, EditProfileScreenRouteProps } from './types'

type Props = {
    navigation: EditProfileSceenNavigationProps
    route: EditProfileScreenRouteProps
}

const EditProfile: React.FC<Props> = ({navigation}) => {
    
    return (
        <View style={styles.container}>
            <ActionBar onPress={()=> navigation.goBack()}/>
            <Text> Edit Profile </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    }
})

export default EditProfile
