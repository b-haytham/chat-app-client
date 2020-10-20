import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome'


type Props = {
    onPress: ()=> void
}


const ActionBar: React.FC<Props> = ({onPress}) => {
    return (
        <View  style={styles.container}>
            <Icon onPress={onPress}  name='arrow-left' size={25} />
            <Icon name='braille' size={25} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
           
   
    }
})

export default ActionBar
