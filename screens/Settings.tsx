import React from 'react';
import {View, Text} from 'react-native';
import {SettingsSceenNavigationProps, SettingsSceenRouteProps} from './types';

type Props = {
  navigation: SettingsSceenNavigationProps;
  route: SettingsSceenRouteProps;
};

const Settings: React.FC<Props> = () => {
  return (
    <View>
      <Text>Setting</Text>
    </View>
  );
};

export default Settings;
