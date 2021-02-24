import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
import AuthFlow from './AuthFlow';
import MainFlow from './MainFlow';

import client from '../utils/feathersClient';
import {RootState} from '../redux/rootReducer';
import {useAppDispatch} from '../redux/store';
import {newFollower, reAuthenticate} from '../redux/auth/authSlice';
import {Button, Text, View} from 'react-native';
import {getSuggestedUser} from '../redux/users/thunkActions';
import {getRooms} from '../redux/rooms/thunkActions';
import {addMessage} from '../redux/rooms/roomsSlice';
import {playSound} from '../utils/playSound';
import {getPosts} from '../redux/posts/thunkActions';
import {newPost} from '../redux/posts/postsSlice';
import {getFriendSipRequests} from '../redux/friendsRequests/thunkActions';
import {
  deleteRequestRecived,
  deleteRequestSent,
  newRequestRecieved,
  newRequestSent,
} from '../redux/friendsRequests/friendsRequestsSlice';

import LottieView from 'lottie-react-native';

import NotificationPopup from 'react-native-push-notification-popup';
import CustomNotificationPopup from '../Components/CustomNotificationPopup';

const Navigation = () => {
  const dispatch = useAppDispatch();

  const routeNameRef = useRef<string>();
  const navigationRef = useRef<NavigationContainerRef>();

  const notificationRef = useRef<NotificationPopup>();

  const {isAuthenticated, error, loading, currentUser} = useSelector(
    (state: RootState) => state.auth,
  );
  console.log(isAuthenticated);

  const {
    error: usersError,
    loading: usersLoading,
    suggestedUser,
  } = useSelector((state: RootState) => state.users);

  const {posts, loading: postsLoadig, error: postsError} = useSelector(
    (state: RootState) => state.posts,
  );

  const {rooms, loading: roomsLoading, error: roomsError} = useSelector(
    (state: RootState) => state.rooms,
  );

  const {error: fiendsError, loading: friendsLoading} = useSelector(
    (state: RootState) => state.friendShipRequests,
  );

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getSuggestedUser());
      dispatch(getRooms(currentUser._id));
      dispatch(getPosts());
      dispatch(getFriendSipRequests(currentUser._id));

      client.service('messages').on('created', (data: any) => {
        console.log('MESSAGE RECIEVEEEED', data);
        dispatch(addMessage(data));
        // dispatch(getRooms(currentUser._id));
        // if (currentUser._id !== data.sender) {
        //   playSound('fa.mp3');
        // }
        // console.log('NAVIGATION SCREEN', data);
      });

      client.service('followers').on('created', (data: any) => {
        console.log('FOLOWERS', data);
        dispatch(newFollower(data));
      });

      client.service('posts').on('created', (data: any) => {
        console.log(data);
        notificationRef.current.show({
          appTitle: 'new Post',
          title: 'new Post',
          body: 'new Post',
          timeText: 'Now',
          slideOutTime: 3000,
        });
        dispatch(newPost(data));
      });

      client.service('friendship-request').on('created', (data: any) => {
        console.log('NAVIGATION EVENT', data);
        if (data.sender._id === currentUser._id) {
          console.log('RequestSent : ', data);
          dispatch(newRequestSent(data));
        }
        if (data.reciever._id === currentUser._id) {
          console.log('RequestRecieved : ', data);
          dispatch(newRequestRecieved(data));
        }
      });

      client.service('friendship-request').on('patched', (data: any) => {
        if (data.isAccepted) {
          console.log('FriendShip Request is PATCHED', data);
          if (data.sender._id === currentUser._id) {
            console.log(data.sender._id, '          ', currentUser._id);
            dispatch(deleteRequestSent(data._id));
          }
          if (data.reciever._id === currentUser._id) {
            console.log(data.reciever._id, '          ', currentUser._id);
            dispatch(deleteRequestRecived(data._id));
          }
        }
      });
    }
  }, [isAuthenticated]);

  useEffect(() => {
    dispatch(reAuthenticate());
  }, []);

  if (loading || roomsLoading || friendsLoading || postsLoadig || usersLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <LottieView
          style={{
            width: '90%',
            height: 'auto',
          }}
          source={require('../chat-conversation.json')}
          autoPlay
          loop
        />
      </View>
    );
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={() => {
        const currentRouteName = navigationRef.current.getCurrentRoute().name;
        routeNameRef.current = currentRouteName;
        console.log('ROUTE NAME', routeNameRef.current);
      }}>
      {isAuthenticated ? <MainFlow /> : <AuthFlow />}
      <NotificationPopup
        ref={notificationRef}
        renderPopupContent={CustomNotificationPopup}
      />
    </NavigationContainer>
  );
};

export default Navigation;
