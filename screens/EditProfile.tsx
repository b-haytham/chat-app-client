import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ActionBar from '../Components/ActionBar/ActionBar'
import client from '../utils/feathersClient'
import { EditProfileSceenNavigationProps, EditProfileScreenRouteProps } from './types'

type Props = {
    navigation: EditProfileSceenNavigationProps
    route: EditProfileScreenRouteProps
}

const EditProfile: React.FC<Props> = ({navigation}) => {
    const [response, setResponce] = useState(null)
    
    useEffect(()=>{

    },[])

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
