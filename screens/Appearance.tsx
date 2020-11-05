import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Platform,
} from 'react-native';

import ActionBar from '../Components/ActionBar/ActionBar';
import {playSound} from '../utils/playSound';

import {
  AppearanceSceenNavigationProps,
  AppearanceScreenRouteProps,
} from './types';

type Props = {
  navigation: AppearanceSceenNavigationProps;
  route: AppearanceScreenRouteProps;
};

const Appearance: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ActionBar onPress={() => {}} />
      <Text>Appearance</Text>
      <Button title="Play Sound" onPress={() => playSound('fa.mp3')} />
    </View>
  );
};

const Arr = ['#000011', '#ff0235', '#00f', '#010d01', '#0f1'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  view: {
    width: '60%',
    height: 100,
    backgroundColor: 'green',
    borderRadius: 25,
    alignSelf: 'center',
    margin: 10,
  },
  scrollview: {},
});

export default Appearance;
