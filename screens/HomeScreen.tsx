import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View} from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../Components/Header';
import PostList from '../Components/Posts/PostList';
import SearchInput from '../Components/SearchInput';
import SuggestedPeople from '../Components/SuggestedPeopleSection/SuggestedPeople';
import { RootState } from '../redux/rootReducer';
import client from '../utils/feathersClient';
import {HomeSceenNavigationProps, HomeSceenRouteProps} from './types';


type Props = {
  navigation: HomeSceenNavigationProps;
  route: HomeSceenRouteProps;
};


const HomeScreen: React.FC<Props> = ({route, navigation}) => {
  const currentUser = useSelector((state: RootState)=> state.auth.currentUser)

  // console.log(currentUser)

  return (
    <ScrollView style={styles.container}>
      <Header onAvatarPress={() => {}} />
      
      <SearchInput />
      <SuggestedPeople onItemPress={(id) => navigation.navigate('UsersProfile', {
        userId: id
      })} />
      
      <PostList  />
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  
});

export default HomeScreen;
