import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';

import {useSelector} from 'react-redux';
import ActionBar from '../Components/ActionBar/ActionBar';
import {RootState} from '../redux/rootReducer';
import {SearchNavigationProps, SearchRouteProps} from './types';

type Props = {
  navigation: SearchNavigationProps;
  route: SearchRouteProps;
};

const SearchScreen: React.FC<Props> = ({}) => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  return (
    <View style={styles.container}>
      <ActionBar onPress={() => {}} />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <Text h2>Notification</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  scrollView: {
    marginBottom: 50,
  },
});

export default SearchScreen;
