import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Text} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/rootReducer';

type Props = {
  onAvatarPress?: () => void;
  chatScreen?: boolean;
};

const Header: React.FC<Props> = ({onAvatarPress, chatScreen}) => {
  const {username, avatar} = useSelector(
    (state: RootState) => state.auth.currentUser,
  );
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
        <Text
          style={{
            color: 'grey',
            fontSize: 18,
            fontStyle: 'italic',
            fontWeight: 'bold',
          }}
          h4={chatScreen ? true : undefined}>
          {username}
        </Text>
      </View>
      <Avatar
        containerStyle={styles.avatar}
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
  avatar: {
    borderEndColor: 'black',
    borderWidth: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 6,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 18.14,

    elevation: 19,
  },
});

export default Header;
