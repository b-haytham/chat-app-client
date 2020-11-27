import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ActionBar from '../Components/ActionBar/ActionBar';

import {CreatePostNavigationProps, CreatePostRouteProps} from './types';

type Props = {
  navigation: CreatePostNavigationProps;
  route: CreatePostRouteProps;
};

const CreatePost: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ActionBar onPress={() => navigation.goBack()} />
      <Text>Create Post</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

export default CreatePost;
