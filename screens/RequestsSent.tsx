import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import SearchInput from '../Components/SearchInput';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  RequestsSentSceenNavigationProps,
  RequestsSentSceenRouteProps,
} from './types';

import TouchableScale from 'react-native-touchable-scale';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/rootReducer';

type Props = {
  navigation: RequestsSentSceenNavigationProps;
  route: RequestsSentSceenRouteProps;
};

const RequestsSent: React.FC<Props> = ({navigation}) => {
  const requestsSent = useSelector(
    (state: RootState) => state.friendShipRequests.friendshipRequestsSent,
  );
  console.log('Repuests Sent', requestsSent);

  return (
    <View style={styles.container}>
      <SearchInput />
      <ScrollView>
        {requestsSent.length > 0 ? (
          requestsSent.map((item, index) => (
            <ListItem containerStyle={styles.listItemContainer} key={index}>
              <View style={styles.avatarUserNameContainer}>
                <TouchableScale
                  activeScale={0.7}
                  onPress={() => {
                    //@ts-ignore
                    navigation.navigate('Home', {
                      screen: 'UsersProfile',
                      params: {userId: item.reciever._id},
                    });
                  }}>
                  <Avatar
                    size="medium"
                    rounded
                    source={{uri: item.reciever.avatar}}
                  />
                </TouchableScale>
                <ListItem.Content>
                  <ListItem.Title style={{marginLeft: 10}}>
                    {item.reciever.username}
                  </ListItem.Title>
                </ListItem.Content>
                <View style={styles.actions}>
                  <TouchableScale activeScale={0.6} onPress={() => {}}>
                    <Icon style={{marginLeft: 15}} name="trash" size={25} />
                  </TouchableScale>
                </View>
              </View>
            </ListItem>
          ))
        ) : (
          <Text style={styles.text}>No Requests</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarUserNameContainer: {
    flexDirection: 'row',
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
});

export default RequestsSent;
