import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../Components/Header'
import PostList from '../Components/Posts/PostList'
import SearchInput from '../Components/SearchInput'
import SuggestedPeople from '../Components/SuggestedPeopleSection/SuggestedPeople'
import { HomeSceenNavigationProps, HomeSceenRouteProps } from './types'


type Props = {
    navigation: HomeSceenNavigationProps
    route: HomeSceenRouteProps
}
  

const  HomeScreen:React.FC<Props> = ({route, navigation}) => {
    
    return (
        
        <View style={styles.container}> 
            <Header onAvatarPress={()=> navigation.navigate('Profile')} />
            <SearchInput />
            <SuggestedPeople />
            <View>
                <PostList/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    }
})

export default HomeScreen