import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Avatar, Text, ListItem } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import ActionBar from '../Components/ActionBar/ActionBar'
import SearchInput from '../Components/SearchInput'
import TouchableScale from 'react-native-touchable-scale';



import { FriendsSceenNavigationProps, FriendsSceenRouteProps } from './types'



type Props = {
    navigation: FriendsSceenNavigationProps
    route: FriendsSceenRouteProps
  }

const Friends: React.FC<Props> = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ActionBar onPress={()=> navigation.goBack()} />
            <Text h2>Friends</Text>
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

export default Friends
