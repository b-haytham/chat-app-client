import React from 'react'
import { Text, View } from 'react-native'


interface Props {
    
}

const  HomeScreen = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
           <Text> Hello from Home </Text>
        </View>
    )
}


export default HomeScreen