import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import PostItem from './PostItem'


type Props = {

}


const PostList: React.FC<Props> = () => {
    return (
        <FlatList
            scrollEnabled
            data={Arr}
            renderItem={PostItem}
            keyExtractor={(item, index)=> index.toString()}
        />
    )
}


const styles = StyleSheet.create({
    
})

const Arr = [1, 2, 3, 4, 5, 6, 7 ,8 ,9]

export default PostList
