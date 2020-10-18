import React from 'react'
import { Text, View } from 'react-native'
import {connect} from 'react-redux'

interface Props {
    
}

const  HomeScreen = (props:any) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
           <Text> Hello from {props.greeting} </Text>
        </View>
    )
}

const mapDispatchToProps = (state:any) => {
    return {
        greeting: state.greeting,
    }
}

export default connect(mapDispatchToProps)( HomeScreen)