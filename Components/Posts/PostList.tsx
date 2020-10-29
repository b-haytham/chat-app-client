import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Animated,
  Button,
  Dimensions,
} from 'react-native';

import PostItem from './PostItem';

type Props = {};

const PostList: React.FC<Props> = ({}) => {

    return (
        <View style={styles.container}>
            {Arr.map((itm, ind)=> <PostItem key={ind} item={itm} />)}
        </View>
    )

    //   return (
//     <FlatList
    
//       scrollEnabled
//       data={Arr}
//       renderItem={PostItem}
//       keyExtractor={(item, index) => index.toString()}
//     />
//   );
};

const styles = StyleSheet.create({
  container: {
    
  },
  
});

const Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default PostList;
