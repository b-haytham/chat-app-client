import React from 'react';
import {View, Text} from 'react-native';

import {CreatePostNavigationProps, CreatePostRouteProps} from './types';

type Props = {
  navigation: CreatePostNavigationProps;
  route: CreatePostRouteProps;
};

const CreatePost: React.FC<Props> = ({}) => {
  return (
    <View>
      <Text>Create Post</Text>
    </View>
  );
};

export default CreatePost;
