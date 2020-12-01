import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {useSelector} from 'react-redux';
import {RootState} from '../../redux/rootReducer';

import PostItem from './PostItem';

type Props = {};

const PostList: React.FC<Props> = ({}) => {
  const posts = useSelector((state: RootState) => state.posts.posts);

  return (
    <View style={styles.container}>
      {!posts ||
        (posts.length == 0 && <Text style={styles.text}>No Posts yet</Text>)}
      {posts &&
        posts.length > 0 &&
        posts.map((itm, ind) => <PostItem key={ind} item={itm} />)}
    </View>
  );

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
  container: {},
  text: {
    alignSelf: 'center',
    fontSize: 24,
    marginVertical: 30,
    color: 'grey',
    fontWeight: 'bold',
  },
});

export default PostList;
