
export type HomeStackParamList = {
    Home: undefined
    UsersProfile: { userId: string}
}


export type AuthStackParamList = {
    Launch: undefined
    Register: undefined
    Login: undefined
}

export type MainTabParamList = {
    Home: undefined
    Friends: undefined
    Notification: undefined
    Settings: undefined
}


export type FriendsStackParamList = {
    FriendList: undefined
    Conversation: undefined
}

export type SettingStackParamList = {
    SettingsMain: undefined
    EditProfile: undefined
    Appearance: undefined
    Profile: undefined
}

export type FriendsListsTopTabParamsList = {
    RequestsSent: undefined
    RequestsRecieved: undefined
    Friends: undefined
}