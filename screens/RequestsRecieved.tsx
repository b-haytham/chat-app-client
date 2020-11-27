import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import {useSelector} from 'react-redux';
import {RootState} from '../redux/rootReducer';

import {
  RequestsRecievedSceenNavigationProps,
  RequestsRecievedSceenRouteProps,
} from './types';

import TouchableScale from 'react-native-touchable-scale';

import SearchInput from '../Components/SearchInput';

import {Avatar, ListItem} from 'react-native-elements';

type Props = {
  navigation: RequestsRecievedSceenNavigationProps;
  route: RequestsRecievedSceenRouteProps;
};

const RequestsRecieved: React.FC<Props> = ({navigation}) => {
  const requestsRecieved = useSelector(
    (state: RootState) => state.auth.currentUser.requestsRecieved,
  );
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  console.log(currentUser);

  console.log('Request Recieved', requestsRecieved);

  return (
    <View style={styles.container}>
      <SearchInput />
      <ScrollView>
        {requestsRecieved.length > 0 ? (
          requestsRecieved.map((item, index) => (
            <ListItem containerStyle={styles.listItemContainer} key={index}>
              <TouchableScale activeScale={0.7} onPress={() => {}}>
                <Avatar
                  size="medium"
                  rounded
                  source={{
                    uri: item.avatar,
                  }}
                />
              </TouchableScale>
              <ListItem.Content>
                <ListItem.Title>{item.username}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))
        ) : (
          <Text style={styles.text}>No Request</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  listItemContainer: {
    borderRadius: 25,
    marginVertical: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
    color: 'grey',
  },
});

export default RequestsRecieved;
