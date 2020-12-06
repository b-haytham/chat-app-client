import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Avatar, Text, Button, Divider} from 'react-native-elements';
import {useSelector} from 'react-redux';
import ActionBar from '../Components/ActionBar/ActionBar';
import {UserType} from '../redux/dataTypes';
import {RootState} from '../redux/rootReducer';
import client from '../utils/feathersClient';
import {UsersProfileNavigationProps, UsersProfileRouteProps} from './types';

const {width} = Dimensions.get('window');

type Props = {
  navigation: UsersProfileNavigationProps;
  route: UsersProfileRouteProps;
};

const UsersProfile: React.FC<Props> = ({route, navigation}) => {
  const userId = route.params.userId;

  const authenticatedUserId = useSelector(
    (state: RootState) => state.auth.currentUser._id,
  );

  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUserById(id: string) {
      try {
        const response = await client.service('users').get(id);
        setUser(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(error);
      }
    }

    fetchUserById(userId);
  }, [userId]);

  const handleFollowPress = async () => {
    client.service('followers').create({
      sender: authenticatedUserId,
      reciever: userId,
    });
  };

  if (loading) {
    return <Text>......Loading</Text>;
  }

  return (
    <View style={[styles.container]}>
      <ActionBar
        onPress={() => navigation.navigate('Home')}
        onPlusPress={() =>
          //@ts-ignore
          navigation.navigate('Settings', {
            screen: 'CreatePost',
          })
        }
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 70}}>
        <Text h2>Profile</Text>
        <View style={styles.avatarContainer}>
          <Avatar
            containerStyle={styles.avatar}
            rounded
            size="xlarge"
            source={{uri: user.avatar}}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.name}>{user.username}</Text>
        </View>
        <View style={styles.social}>
          <View style={styles.socialItem}>
            <Text style={styles.socialText}> Posts </Text>
            <Text style={styles.socialNumber}>
              {' '}
              {user.posts ? user.posts.length : 0}{' '}
            </Text>
          </View>
          <View style={styles.socialItem}>
            <Text style={styles.socialText}> Followers </Text>
            <Text style={styles.socialNumber}> {user.followers.length} </Text>
          </View>
          <View style={styles.socialItem}>
            <Text style={styles.socialText}> Follows </Text>
            <Text style={styles.socialNumber}> {user.follows.length} </Text>
          </View>
        </View>
        <View style={styles.actions}>
          <Button
            title="FOLLOW"
            buttonStyle={styles.btn}
            onPress={handleFollowPress}
          />
          <Button
            title="INVITE"
            buttonStyle={styles.btn}
            onPress={async () => {
              const response = await client
                .service('friendship-request')
                .create({
                  sender: authenticatedUserId,
                  reciever: userId,
                });
              console.log(response);
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  avatarContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  userInfo: {
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    marginVertical: 7,
  },
  social: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1.5,
    paddingVertical: 5,
    borderRadius: 15,
  },
  socialItem: {
    width: '30%',
    alignItems: 'center',
  },
  socialText: {
    fontWeight: 'bold',
  },
  socialNumber: {
    fontWeight: 'bold',
    fontSize: 20,
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
  btn: {
    backgroundColor: 'black',
    width: width / 4,
    alignSelf: 'center',
    borderRadius: 20,
    marginVertical: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default UsersProfile;
