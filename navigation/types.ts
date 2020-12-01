import {PostType, UserType} from '../redux/dataTypes';

export type HomeStackParamList = {
  Home: undefined;
  UsersProfile: {userId: string};
  PostDetail: {post: PostType};
};

export type AuthStackParamList = {
  Launch: undefined;
  Register: undefined;
  Login: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Friends: undefined;
  Notification: undefined;
  Settings: undefined;
};

export type FriendsStackParamList = {
  FriendList: undefined;
  Conversation: {
    roomId: string;
    userToSend: UserType;
  };
};

export type SettingStackParamList = {
  SettingsMain: undefined;
  EditProfile: undefined;
  Appearance: undefined;
  Profile: undefined;
  CreatePost: undefined;
};

export type FriendsListsTopTabParamsList = {
  RequestsSent: undefined;
  RequestsRecieved: undefined;
  Friends: undefined;
};
