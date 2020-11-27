import React from 'react';
import {View, Text} from 'react-native';

import {useSelector} from 'react-redux';
import {RootState} from '../redux/rootReducer';

import {
  NotificationSceenNavigationProps,
  NotificationSceenRouteProps,
} from './types';

type Props = {
  navigation: NotificationSceenNavigationProps;
  route: NotificationSceenRouteProps;
};

const NotificationScreen = () => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  console.log('Followers', currentUser.followers);
  console.log('Follows', currentUser.follows);

  return (
    <View>
      <Text>Notification</Text>
    </View>
  );
};

export default NotificationScreen;
