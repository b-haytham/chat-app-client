import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Text} from 'react-native-elements';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';

type Props = {
  onAvatarPress?: () => void;
  chatScreen?: boolean;
};

const Header: React.FC<Props> = ({onAvatarPress, chatScreen}) => {
  const {username, avatar} = useSelector(( state:RootState )=> state.auth.currentUser)
  return (
    <View
      style={[
        styles.container,
        {
          paddingHorizontal: chatScreen ? 0 : 35,
          paddingBottom: chatScreen ? 20 : 0,
        },
      ]}>
      <View>
        {!chatScreen && <Text h4>Welcome</Text>}
        <Text h4={chatScreen ? true : undefined}>{ username }</Text>
      </View>
      <Avatar
        onPress={onAvatarPress}
        size={!chatScreen ? 'large' : 'medium'}
        rounded
        source={{uri: avatar}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 35,
  },
});

export default Header;
