import React, {useEffect} from 'react';

import LottieView from 'lottie-react-native';

import {View, Text} from 'react-native';

import {LaunchSceenRouteProps, LaunchScreenNavigationProps} from './types';

type Props = {
  navigation: LaunchScreenNavigationProps;
  route: LaunchSceenRouteProps;
};

const Launch: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Register');
    }, 2000);
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <LottieView
        style={{
          width: '90%',
          height: 'auto',
        }}
        source={require('../chat-conversation.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Launch;
