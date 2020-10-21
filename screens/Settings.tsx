import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {ListItem, Text} from 'react-native-elements';
import ActionBar from '../Components/ActionBar/ActionBar';
import TouchableScale from 'react-native-touchable-scale';



import {SettingsSceenNavigationProps, SettingsSceenRouteProps} from './types';

type Props = {
  navigation: SettingsSceenNavigationProps;
  route: SettingsSceenRouteProps;
};

const Settings: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ActionBar onPress={() => navigation.goBack()} />
      <Text h2> Setting </Text>
      <View style={{marginVertical: 20}}>
      <ListItem
          Component={TouchableScale}
          //@ts-ignore
          activeScale={0.95} 
          containerStyle={styles.listItemContainer}
        >
          
          <ListItem.Title style={styles.listItemTitle}>Edit Profile</ListItem.Title>
        </ListItem>
        <ListItem
          Component={TouchableScale}
          //@ts-ignore
          activeScale={0.95} 
          containerStyle={styles.listItemContainer}
        >
          
          <ListItem.Title style={styles.listItemTitle}>Change Theme</ListItem.Title>
        </ListItem>
        <ListItem
          Component={TouchableScale}
          //@ts-ignore
          activeScale={0.95} 
          containerStyle={styles.listItemContainer}
        >
          
          <ListItem.Title style={styles.listItemTitle}>Logout</ListItem.Title>
        </ListItem>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  listItemContainer: {
    borderRadius: 25,
    marginVertical:10
  },
  listItemTitle: {
    color: '#262121',
    fontWeight: 'bold'
  }
});

export default Settings;
