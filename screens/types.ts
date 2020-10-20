import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList, MainTabParamList } from "../navigation/types";


// Auth Flow Navigation Props
export type LaunchScreenNavigationProps = StackNavigationProp<AuthStackParamList, 'Launch'>
export type RegisterScreenNavigationProps = StackNavigationProp<AuthStackParamList, 'Register'>
export type LoginSceenNavigationProps = StackNavigationProp<AuthStackParamList, 'Login'>

// Auth Flow Route Props

export type LaunchSceenRouteProps = RouteProp<AuthStackParamList, 'Launch'>
export type RegisterSceenRouteProps = RouteProp<AuthStackParamList, 'Register'>
export type LoginSceenRouteProps = RouteProp<AuthStackParamList, 'Login'>



// main Flow Navigation Props

export type HomeSceenNavigationProps = BottomTabScreenProps<MainTabParamList, 'Home'>
export type FriendsSceenNavigationProps = BottomTabScreenProps<MainTabParamList, 'Friends'>
export type ProfileSceenNavigationProps = BottomTabScreenProps<MainTabParamList, 'Profile'>
export type SettingsSceenNavigationProps = BottomTabScreenProps<MainTabParamList, 'Settings'>


// Main Flow Route Props

export type HomeSceenRouteProps = RouteProp<MainTabParamList, 'Home'>
export type FriendsSceenRouteProps = RouteProp<MainTabParamList, 'Friends'>
export type ProfileSceenRouteProps = RouteProp<MainTabParamList, 'Profile'>
export type SettingsSceenRouteProps = RouteProp<MainTabParamList, 'Settings'>
