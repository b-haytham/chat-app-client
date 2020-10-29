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
      <ActionBar onPress={() => navigation.navigate('Home')} />
      <ScrollView style={{marginBottom: 70}}>
        <Text h2>Profile</Text>
        <View style={styles.avatarContainer}>
          <Avatar rounded size="xlarge" source={{uri: avatar}} />
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
        <Button
          title="FOLLOW"
          type="outline"
          buttonStyle={{borderColor: 'black', width: '60%'}}
          containerStyle={{alignItems: 'center'}}
          titleStyle={{color: 'black'}}
        />

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
  job: {
    color: '#9c9b98',
  },
  city: {
    fontWeight: '700',
    color: '#545454',
  },
  social: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});

export default Profile;
