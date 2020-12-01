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
import {Text} from 'react-native';
import {getSuggestedUser} from '../redux/users/thunkActions';
import {getRooms} from '../redux/rooms/thunkActions';
import {addMessage} from '../redux/rooms/roomsSlice';
import {playSound} from '../utils/playSound';
import {getPosts} from '../redux/posts/thunkActions';
import {newPost} from '../redux/posts/postsSlice';
import {getFriendSipRequests} from '../redux/friendsRequests/thunkActions';
import {
  newRequestRecieved,
  newRequestSent,
} from '../redux/friendsRequests/friendsRequestsSlice';

const Navigation = () => {
  const dispatch = useAppDispatch();

  const routeNameRef = useRef<string>();
  const navigationRef = useRef<NavigationContainerRef>();

  const {isAuthenticated, error, loading, currentUser} = useSelector(
    (state: RootState) => state.auth,
  );
  console.log(isAuthenticated);

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
    }
  }, [isAuthenticated]);

  useEffect(() => {
    dispatch(reAuthenticate());
  }, []);

  if (loading) {
    return <Text>...Loading</Text>;
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
    </NavigationContainer>
  );
};

export default Navigation;
