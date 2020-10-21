import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ActionBar from '../Components/ActionBar/ActionBar'
import { AppearanceSceenNavigationProps, AppearanceScreenRouteProps } from './types'

type Props = {
    navigation: AppearanceSceenNavigationProps
    route: AppearanceScreenRouteProps
}

const Appearance: React.FC<Props> = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ActionBar onPress={()=> navigation.goBack()} />
            <Text>Appearance</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    }
})

export default Appearance
