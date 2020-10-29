import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Avatar, Text, Button} from 'react-native-elements';
import { useSelector } from 'react-redux';
import ActionBar from '../Components/ActionBar/ActionBar';
import { UserType } from '../redux/dataTypes';
import { RootState } from '../redux/rootReducer';
import client from '../utils/feathersClient';
import {UsersProfileNavigationProps, UsersProfileRouteProps} from './types';

type Props = {
  navigation: UsersProfileNavigationProps;
  route: UsersProfileRouteProps;
};

const UsersProfile: React.FC<Props> = ({route, navigation}) => {
  const userId = route.params.userId;

  const authenticatedUserId = useSelector((state: RootState)=> state.auth.currentUser._id)


  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUserById(id: string) {
      try {
        const response = await client.service('users').get(id);
        console.log(response);
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


  if(loading){
      return <Text>......Loading</Text>
  }

  return (
    <View style={[styles.container]}>
      <ActionBar onPress={() => navigation.navigate('Home')} />
       <ScrollView style={{marginBottom: 70}}>
        <Text h2>Profile</Text>
       <View style={styles.avatarContainer}>
          <Avatar rounded size="xlarge" source={{uri: user.avatar}} />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.name}>{user.username}</Text>
        </View>
        <View style={styles.social}>
          <View style={styles.socialItem}>
            <Text style={styles.socialText}> Posts </Text>
            <Text style={styles.socialNumber}> {user.posts ? user.posts.length : 0} </Text>
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
        <Button
          title="FOLLOW"
          type="outline"
          buttonStyle={{borderColor: 'black', width: '60%'}}
          containerStyle={{alignItems: 'center'}}
          titleStyle={{color: 'black'}}
        />
        <Button
          title="INVITE"
          type="outline"
          buttonStyle={{borderColor: 'black', width: '60%'}}
          containerStyle={{alignItems: 'center'}}
          titleStyle={{color: 'black'}}
          onPress={ async () => {
            const response = await client.service('friendship-request').create({
                sender: authenticatedUserId,
                reciever: userId
            })
            console.log(response)
          }}
        />
        
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

export default UsersProfile;
