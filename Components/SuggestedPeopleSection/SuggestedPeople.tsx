

import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { Text } from 'react-native-elements'
import { useSelector } from 'react-redux'
import SuggestedItem from './SuggestedItem'

import { RootState } from '../../redux/rootReducer'

type Props = {
    onItemPress: (id: string) => void
}

const SuggestedPeople: React.FC<Props> = ({onItemPress}) => {
    const suggestedUser =  useSelector((state: RootState)=> state.users.suggestedUser)
    return (
        <View style={styles.container}>
            <Text h4>Suggestion</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}        
                style={styles.list}
                horizontal
                scrollEnabled
                data={suggestedUser}
                renderItem={({item})=> <SuggestedItem item={item} onPress={()=> onItemPress(item._id)}/>}
                keyExtractor={(item, index)=> item._id}
            />    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingLeft: 30
    },
    list: {
        marginTop: 10
    }

})

const Arr = [1,2,3,4,6,7,8,9]

export default SuggestedPeople
