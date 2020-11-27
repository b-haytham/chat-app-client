import React from 'react';
import {View, Text} from 'react-native';

import {PostDetailRouteProps, PostDetailsNavigationProps} from './types';

type Props = {
  navigation: PostDetailsNavigationProps;
  route: PostDetailRouteProps;
};

const PostDetail: React.FC<Props> = ({}) => {
  return (
    <View>
      <Text>Post Detail</Text>
    </View>
  );
};

export default PostDetail;
