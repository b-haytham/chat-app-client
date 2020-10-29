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

  const {currentUser} = useSelector((state: RootState)=> state.users)
  
  console.log(currentUser)

  return (
    <ScrollView style={styles.container}>
      <Header onAvatarPress={() => navigation.navigate('Profile')} />
      
      <SearchInput />
      <SuggestedPeople onItemPress={() => navigation.navigate('Profile')} />
      
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
