import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import ActionBar from '../Components/ActionBar/ActionBar';
import {RoomType} from '../redux/dataTypes';
import {RootState} from '../redux/rootReducer';
import client from '../utils/feathersClient';
import {
  EditProfileSceenNavigationProps,
  EditProfileScreenRouteProps,
} from './types';

type Props = {
  navigation: EditProfileSceenNavigationProps;
  route: EditProfileScreenRouteProps;
};

const EditProfile: React.FC<Props> = ({navigation}) => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  const rooms = useSelector((state: RootState) => state.rooms.rooms);

  return (
    <ScrollView style={styles.container}>
      <ActionBar
        onPress={() => navigation.goBack()}
        onPlusPress={() => navigation.navigate('CreatePost')}
      />
      <Text> {JSON.stringify(rooms, null, 2)} </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

export default EditProfile;
