import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import SearchInput from '../Components/SearchInput'
import { RequestsSentSceenNavigationProps, RequestsSentSceenRouteProps } from './types'

import TouchableScale from 'react-native-touchable-scale';


type Props = {
    navigation: RequestsSentSceenNavigationProps
    route: RequestsSentSceenRouteProps
}


const RequestsSent: React.FC<Props> = ({navigation}) => {
    return (
        <View style={styles.container}>
            <SearchInput />
            <ScrollView>
                {Arr.map((item, index)=>(
                    <ListItem containerStyle={styles.listItemContainer} key={index}>
                        <TouchableScale activeScale={0.7} onPress={()=> navigation.push('Conversation') }>
                        <Avatar
                            size='medium'
                            rounded
                            source={{uri: 'https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg'}}
                        />
                        </TouchableScale>
                        <ListItem.Content>
                            <ListItem.Title>Username</ListItem.Title>
                            <ListItem.Subtitle>message</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </ScrollView>
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    listItemContainer: {
        borderRadius: 25,
        marginVertical:10
    }
})

const Arr = [1, 2, 3, 4, 5, 6, 7 ,8 ,9, 10]

export default RequestsSent
