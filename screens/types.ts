import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  AuthStackParamList,
  FriendsListsTopTabParamsList,
  FriendsStackParamList,
  HomeStackParamList,
  MainTabParamList,
  SettingStackParamList,
} from '../navigation/types';

// Auth Flow Navigation Props
export type LaunchScreenNavigationProps = StackNavigationProp<
  AuthStackParamList,
  'Launch'
>;
export type RegisterScreenNavigationProps = StackNavigationProp<
  AuthStackParamList,
  'Register'
>;
export type LoginSceenNavigationProps = StackNavigationProp<
  AuthStackParamList,
  'Login'
>;

// Auth Flow Route Props

export type LaunchSceenRouteProps = RouteProp<AuthStackParamList, 'Launch'>;
export type RegisterSceenRouteProps = RouteProp<AuthStackParamList, 'Register'>;
export type LoginSceenRouteProps = RouteProp<AuthStackParamList, 'Login'>;

// main Flow Navigation Props

export type NotificationSceenNavigationProps = BottomTabNavigationProp<
  MainTabParamList,
  'Notification'
>;

// main Flow >> Friends Flow Navigation Props

export type ConversationSceenNavigationProps = CompositeNavigationProp<
  StackNavigationProp<FriendsStackParamList, 'Conversation'>,
  BottomTabNavigationProp<MainTabParamList>
>;

// main Flow >> Setting Flow Navigation Props

export type SettingsSceenNavigationProps = CompositeNavigationProp<
  StackNavigationProp<SettingStackParamList, 'SettingsMain'>,
  BottomTabNavigationProp<MainTabParamList>
>;
export type EditProfileSceenNavigationProps = CompositeNavigationProp<
  StackNavigationProp<SettingStackParamList, 'EditProfile'>,
  BottomTabNavigationProp<MainTabParamList>
>;
export type AppearanceSceenNavigationProps = CompositeNavigationProp<
  StackNavigationProp<SettingStackParamList, 'Appearance'>,
  BottomTabNavigationProp<MainTabParamList>
>;

export type ProfileSceenNavigationProps = CompositeNavigationProp<
  StackNavigationProp<SettingStackParamList, 'Profile'>,
  BottomTabNavigationProp<MainTabParamList>
>;

export type CreatePostNavigationProps = CompositeNavigationProp<
  StackNavigationProp<SettingStackParamList, 'CreatePost'>,
  BottomTabNavigationProp<MainTabParamList>
>;

// main Flow >> Home Flow Navigation props

export type HomeSceenNavigationProps = CompositeNavigationProp<
  StackNavigationProp<HomeStackParamList, 'Home'>,
  BottomTabNavigationProp<MainTabParamList>
>;

export type UsersProfileNavigationProps = CompositeNavigationProp<
  StackNavigationProp<HomeStackParamList, 'UsersProfile'>,
  BottomTabNavigationProp<MainTabParamList>
>;

export type PostDetailsNavigationProps = CompositeNavigationProp<
  StackNavigationProp<HomeStackParamList, 'PostDetail'>,
  BottomTabNavigationProp<MainTabParamList>
>;

// Main FLow >> Friends Flow >> FriendsLists Flow

export type FriendsSceenNavigationProps = CompositeNavigationProp<
  MaterialTopTabNavigationProp<FriendsListsTopTabParamsList, 'Friends'>,
  CompositeNavigationProp<
    StackNavigationProp<FriendsStackParamList>,
    BottomTabNavigationProp<MainTabParamList>
  >
>;

export type RequestsSentSceenNavigationProps = CompositeNavigationProp<
  MaterialTopTabNavigationProp<FriendsListsTopTabParamsList, 'RequestsSent'>,
  CompositeNavigationProp<
    StackNavigationProp<FriendsStackParamList>,
    BottomTabNavigationProp<MainTabParamList>
  >
>;

export type RequestsRecievedSceenNavigationProps = CompositeNavigationProp<
  MaterialTopTabNavigationProp<
    FriendsListsTopTabParamsList,
    'RequestsRecieved'
  >,
  CompositeNavigationProp<
    StackNavigationProp<FriendsStackParamList>,
    BottomTabNavigationProp<MainTabParamList>
  >
>;

// Main Flow Route Props

export type NotificationSceenRouteProps = RouteProp<
  MainTabParamList,
  'Notification'
>;
export type SettingsSceenRouteProps = RouteProp<MainTabParamList, 'Settings'>;

// Main FLow >> Friends Flow Route Props

export type ConversationScreenRouteProps = RouteProp<
  FriendsStackParamList,
  'Conversation'
>;

// Main Flow >> Setting Flow Route Props

export type SettingsScreenRouteProps = RouteProp<
  SettingStackParamList,
  'SettingsMain'
>;
export type EditProfileScreenRouteProps = RouteProp<
  SettingStackParamList,
  'EditProfile'
>;
export type AppearanceScreenRouteProps = RouteProp<
  SettingStackParamList,
  'Appearance'
>;
export type ProfileSceenRouteProps = RouteProp<
  SettingStackParamList,
  'Profile'
>;

export type CreatePostRouteProps = RouteProp<
  SettingStackParamList,
  'CreatePost'
>;

// Main Flow >> Home Flow Route Props

export type HomeSceenRouteProps = RouteProp<HomeStackParamList, 'Home'>;
export type UsersProfileRouteProps = RouteProp<
  HomeStackParamList,
  'UsersProfile'
>;
export type PostDetailRouteProps = RouteProp<HomeStackParamList, 'PostDetail'>;

//Main Flow >> Friends FLow >> FriendsListFlow

export type FriendsSceenRouteProps = RouteProp<
  FriendsListsTopTabParamsList,
  'Friends'
>;
export type RequestsSentSceenRouteProps = RouteProp<
  FriendsListsTopTabParamsList,
  'RequestsSent'
>;
export type RequestsRecievedSceenRouteProps = RouteProp<
  FriendsListsTopTabParamsList,
  'RequestsRecieved'
>;
