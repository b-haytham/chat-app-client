import React from 'react'
import { View, StyleSheet} from 'react-native'
import { Avatar, Text } from 'react-native-elements'

type Props = {

}

const Header: React.FC<Props> = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text h4>Welcome</Text>
                <Text >Username</Text>
            </View>
            <Avatar
                
                size='large'
                rounded
                source={{uri: 'https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg'}}
            />

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 35
    }
})

export default Header
