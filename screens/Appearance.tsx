import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ActionBar from '../Components/ActionBar/ActionBar';

import {
  AppearanceSceenNavigationProps,
  AppearanceScreenRouteProps,
} from './types';

import {useSelector} from 'react-redux';
import {RootState} from '../redux/rootReducer';
import {ListItem} from 'react-native-elements';
import {Switch} from 'react-native-gesture-handler';

type Props = {
  navigation: AppearanceSceenNavigationProps;
  route: AppearanceScreenRouteProps;
};

const Appearance: React.FC<Props> = ({navigation}) => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prevState) => !prevState);

  return (
    <View style={styles.container}>
      <ActionBar
        onPress={() => {
          navigation.goBack();
        }}
        onPlusPress={() => navigation.navigate('CreatePost')}
      />
      <Text style={styles.title}>Appearance</Text>
      <ListItem containerStyle={styles.listItemContainer}>
        <ListItem.Content>
          <ListItem.Title style={styles.listItemTitle}>
            Dark Mode
          </ListItem.Title>
        </ListItem.Content>
        <Switch
          trackColor={{false: 'grey', true: 'green'}}
          value={darkMode}
          onValueChange={toggleDarkMode}
        />
      </ListItem>
      <ListItem containerStyle={styles.listItemContainer}>
        <ListItem.Content>
          <ListItem.Title style={styles.listItemTitle}>
            Select Primary Color
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem containerStyle={styles.listItemContainer}>
        <ListItem.Content>
          <ListItem.Title style={styles.listItemTitle}>
            Select Secondary Color
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  listItemContainer: {
    borderRadius: 25,
    marginVertical: 5,
  },
  listItemTitle: {
    fontWeight: 'bold',
    color: 'grey',
  },
});

export default Appearance;
