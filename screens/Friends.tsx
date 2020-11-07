import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Text, ListItem} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import ActionBar from '../Components/ActionBar/ActionBar';
import SearchInput from '../Components/SearchInput';
import TouchableScale from 'react-native-touchable-scale';

import {FriendsSceenNavigationProps, FriendsSceenRouteProps} from './types';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/rootReducer';

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
      <SearchInput />
      <ScrollView>
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
            </ListItem>
          ))}
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
});

const Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default Friends;
