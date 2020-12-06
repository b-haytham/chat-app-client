import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Text, ListItem} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import TouchableScale from 'react-native-touchable-scale';

import {FriendsSceenNavigationProps, FriendsSceenRouteProps} from './types';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/rootReducer';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  navigation: FriendsSceenNavigationProps;
  route: FriendsSceenRouteProps;
};

const Friends: React.FC<Props> = ({navigation}) => {
  const currentUserId = useSelector(
    (state: RootState) => state.auth.currentUser._id,
  );
  const rooms = useSelector((state: RootState) => state.rooms.rooms);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {rooms &&
          rooms.map((item, index) => (
            <ListItem containerStyle={styles.listItemContainer} key={index}>
              <TouchableScale
                activeScale={0.7}
                onPress={() =>
                  navigation.navigate('Conversation', {
                    roomId: item._id,
                    userToSend:
                      currentUserId === item.acceptor._id
                        ? item.creator
                        : item.acceptor,
                  })
                }>
                <Avatar
                  size="medium"
                  rounded
                  source={{
                    uri:
                      currentUserId === item.acceptor._id
                        ? item.creator.avatar
                        : item.acceptor.avatar,
                  }}
                />
              </TouchableScale>
              <ListItem.Content>
                <ListItem.Title>
                  {currentUserId === item.acceptor._id
                    ? item.creator.username
                    : item.acceptor.username}
                </ListItem.Title>
                <ListItem.Subtitle>message</ListItem.Subtitle>
              </ListItem.Content>
              <TouchableScale activeScale={0.6} onPress={() => {}}>
                <Icon style={{marginLeft: 15}} name="trash" size={25} />
              </TouchableScale>
            </ListItem>
          ))}
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
  scrollView: {
    marginVertical: 20,
  },
});

const Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default Friends;
