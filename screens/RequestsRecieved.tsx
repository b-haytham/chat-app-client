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
import Icon from 'react-native-vector-icons/FontAwesome';
import client from '../utils/feathersClient';

type Props = {
  navigation: RequestsRecievedSceenNavigationProps;
  route: RequestsRecievedSceenRouteProps;
};

const RequestsRecieved: React.FC<Props> = ({navigation}) => {
  const requestsRecieved = useSelector(
    (state: RootState) => state.friendShipRequests.friendShipRequestsRecieved,
  );
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  console.log(currentUser);

  console.log('Request Recieved', requestsRecieved);

  const acceptRequest = async (id: string) => {
    const response = await client
      .service('friendship-request')
      .patch(id, {isAccepted: true});
    console.log(response);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {requestsRecieved.length > 0 ? (
          requestsRecieved.map((item, index) => (
            <ListItem containerStyle={styles.listItemContainer} key={index}>
              <TouchableScale activeScale={0.7} onPress={() => {}}>
                <Avatar
                  size="medium"
                  rounded
                  source={{
                    uri: item.sender.avatar,
                  }}
                />
              </TouchableScale>
              <ListItem.Content>
                <ListItem.Title>{item.sender.username}</ListItem.Title>
              </ListItem.Content>
              <View style={styles.actions}>
                <TouchableScale
                  activeScale={0.6}
                  onPress={() => acceptRequest(item._id)}>
                  <Icon name="check" size={25} />
                </TouchableScale>
                <TouchableScale activeScale={0.6} onPress={() => {}}>
                  <Icon style={{marginLeft: 15}} name="trash" size={25} />
                </TouchableScale>
              </View>
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
    flex: 1,
  },
  listItemContainer: {
    borderRadius: 25,
    marginVertical: 10,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.14,

    elevation: 2,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
    color: 'grey',
  },
  scrollView: {
    marginVertical: 20,
  },
});

export default RequestsRecieved;
