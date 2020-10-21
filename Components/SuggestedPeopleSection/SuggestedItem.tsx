import React from "react"
import { StyleSheet, View } from "react-native"
import { Avatar, Text } from "react-native-elements"
import TouchableScale from 'react-native-touchable-scale';

type Props = {
    item: number,
    onPress : () => void
}


const SuggestedItem: React.FC<Props> = ({onPress}) => {
    return (
        <View style={styles.container}>
            <TouchableScale activeScale={0.7} onPress={onPress}>
            <Avatar    
                rounded
                size='medium'
                source={{uri: 'https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg'}}
            />
            </TouchableScale>
            <Text style={styles.text}>user</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#757472'
    }
})


export default SuggestedItem