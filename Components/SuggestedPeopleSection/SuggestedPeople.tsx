

import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { Text } from 'react-native-elements'
import SuggestedItem from './SuggestedItem'


type Props = {
    onItemPress: () => void
}

const SuggestedPeople: React.FC<Props> = ({onItemPress}) => {
    return (
        <View style={styles.container}>
            <Text h4>Suggestion</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}        
                style={styles.list}
                horizontal
                scrollEnabled
                data={Arr}
                renderItem={({item})=> <SuggestedItem item={item} onPress={onItemPress}/>}
                keyExtractor={(item, index)=> index.toString()}
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
