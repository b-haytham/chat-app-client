import React, {useRef, useState} from 'react';
import {View, StyleSheet, Dimensions, Animated, ScrollView} from 'react-native';
import {Avatar, Button, Text} from 'react-native-elements';
import {useSelector} from 'react-redux';
import ActionBar from '../Components/ActionBar/ActionBar';
import PostList from '../Components/Posts/PostList';
import {RootState} from '../redux/rootReducer';
import {ProfileSceenNavigationProps, ProfileSceenRouteProps} from './types';

type Props = {
  navigation: ProfileSceenNavigationProps;
  route: ProfileSceenRouteProps;
};

const Profile: React.FC<Props> = ({navigation}) => {
  const {username, avatar, posts, followers, follows} = useSelector(
    (state: RootState) => state.auth.currentUser,
  );

  return (
    <View style={styles.container}>
      <ActionBar
        onPress={() => navigation.navigate('Home')}
        onPlusPress={() => navigation.navigate('CreatePost')}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 50}}>
        <Text h2>Profile</Text>
        <View style={styles.avatarContainer}>
          <Avatar
            containerStyle={styles.avatar}
            rounded
            size="xlarge"
            source={{uri: avatar}}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.name}>{username}</Text>
          {/* <Text style={styles.job}>Unemployed</Text>
          <Text style={styles.city}>Sfax, Tunisia</Text> */}
        </View>
        <View style={styles.social}>
          <View style={styles.socialItem}>
            <Text style={styles.socialText}> Posts </Text>
            <Text style={styles.socialNumber}> {posts.length} </Text>
          </View>
          <View style={styles.socialItem}>
            <Text style={styles.socialText}> Followers </Text>
            <Text style={styles.socialNumber}> {followers.length} </Text>
          </View>
          <View style={styles.socialItem}>
            <Text style={styles.socialText}> Follows </Text>
            <Text style={styles.socialNumber}> {follows.length} </Text>
          </View>
        </View>
        <PostList />
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
    fontWeight: '700',
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
});

export default Profile;
