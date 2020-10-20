import React from "react"
import { StyleSheet, View } from "react-native"
import { Avatar, Text } from "react-native-elements"


type Props = {
    item: number
}


const SuggestedItem: React.FC<Props> = () => {
    return (
        <View style={styles.container}>
            <Avatar    
                rounded
                size='medium'
                source={{uri: 'https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg'}}
            />
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