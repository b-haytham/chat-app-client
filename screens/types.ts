import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList, MainStackParamList } from "../navigation/types";


// Auth Flow Navigation Props
export type LaunchScreenNavigationProps = StackNavigationProp<AuthStackParamList, 'Launch'>
export type RegisterScreenNavigationProps = StackNavigationProp<AuthStackParamList, 'Register'>
export type LoginSceenNavigationProps = StackNavigationProp<AuthStackParamList, 'Login'>

// Auth Flow Route Props

export type LaunchSceenRouteProps = RouteProp<AuthStackParamList, 'Launch'>
export type RegisterSceenRouteProps = RouteProp<AuthStackParamList, 'Register'>
export type LoginSceenRouteProps = RouteProp<AuthStackParamList, 'Login'>



// main Flow Navigation Props

export type HomeSceenNavigationProps = StackNavigationProp<MainStackParamList, 'Home'>



// Main Flow Route Props

export type HomeSceenRouteProps = RouteProp<MainStackParamList, 'Home'>