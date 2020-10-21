import { BottomTabNavigationProp, BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList, FriendsStackParamList, MainTabParamList, SettingStackParamList } from "../navigation/types";


// Auth Flow Navigation Props
export type LaunchScreenNavigationProps = StackNavigationProp<AuthStackParamList, 'Launch'>
export type RegisterScreenNavigationProps = StackNavigationProp<AuthStackParamList, 'Register'>
export type LoginSceenNavigationProps = StackNavigationProp<AuthStackParamList, 'Login'>

// Auth Flow Route Props

export type LaunchSceenRouteProps = RouteProp<AuthStackParamList, 'Launch'>
export type RegisterSceenRouteProps = RouteProp<AuthStackParamList, 'Register'>
export type LoginSceenRouteProps = RouteProp<AuthStackParamList, 'Login'>



// main Flow Navigation Props

export type HomeSceenNavigationProps = BottomTabNavigationProp<MainTabParamList, 'Home'>
export type ProfileSceenNavigationProps = BottomTabNavigationProp<MainTabParamList, 'Profile'>

// main Flow >> Friends Flow Navigation Props

export type FriendsSceenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<FriendsStackParamList, 'FriendList'>,
    BottomTabNavigationProp<MainTabParamList>
> 
export type ConversationSceenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<FriendsStackParamList, 'Conversation'>,
    BottomTabNavigationProp<MainTabParamList>
>

// main Flow >> Setting Flow Navigation Props

export type SettingsSceenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<SettingStackParamList, 'SettingsMain'>,
    BottomTabNavigationProp<MainTabParamList>
>  
export type EditProfileSceenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<SettingStackParamList, 'EditProfile'>,
    BottomTabNavigationProp<MainTabParamList>
>  
export type AppearanceSceenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<SettingStackParamList, 'Appearance'>,
    BottomTabNavigationProp<MainTabParamList>
>  

// Main Flow Route Props

export type HomeSceenRouteProps = RouteProp<MainTabParamList, 'Home'>
export type ProfileSceenRouteProps = RouteProp<MainTabParamList, 'Profile'>
export type SettingsSceenRouteProps = RouteProp<MainTabParamList, 'Settings'>

// Main FLow >> Friends Flow Route Props

export type FriendsSceenRouteProps = RouteProp<FriendsStackParamList, 'FriendList'>
export type ConversationScreenRouteProps = RouteProp<FriendsStackParamList, 'Conversation' >

// Main Flow >> Setting Flow Route Props

export type SettingsScreenRouteProps = RouteProp<SettingStackParamList, 'SettingsMain' >
export type EditProfileScreenRouteProps = RouteProp<SettingStackParamList, 'EditProfile' >
export type AppearanceScreenRouteProps = RouteProp<SettingStackParamList, 'Appearance' >