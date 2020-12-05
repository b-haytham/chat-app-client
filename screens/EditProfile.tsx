import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Avatar, Input, Button} from 'react-native-elements';
import {useSelector} from 'react-redux';
import ActionBar from '../Components/ActionBar/ActionBar';
import {RootState} from '../redux/rootReducer';

import Icon from 'react-native-vector-icons/FontAwesome';

import TouchableScale from 'react-native-touchable-scale';

import {Formik} from 'formik';

import ImagePicker from 'react-native-image-picker';

import {
  EditProfileSceenNavigationProps,
  EditProfileScreenRouteProps,
} from './types';

type Props = {
  navigation: EditProfileSceenNavigationProps;
  route: EditProfileScreenRouteProps;
};

const {width} = Dimensions.get('window');

const EditProfile: React.FC<Props> = ({navigation}) => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  const [avatar, setAvatar] = useState(currentUser.avatar);

  const launchCamera = () => {
    ImagePicker.launchCamera(
      {
        mediaType: 'photo',
        allowsEditing: true,
        quality: 1,
      },
      (response) => {
        if (response.uri) {
          setAvatar(response.uri);
        }
      },
    );
  };

  const launchFileExlorer = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        allowsEditing: true,
        quality: 1,
      },
      (response) => {
        if (response.uri) {
          setAvatar(response.uri);
        }
      },
    );
  };

  const onSbmit = async () => {};

  return (
    <ScrollView style={styles.container}>
      <ActionBar
        onPress={() => navigation.goBack()}
        onPlusPress={() => navigation.navigate('CreatePost')}
      />
      <Text style={styles.title}> Edit Profile </Text>
      <View style={styles.avatarWrapper}>
        <Avatar
          containerStyle={styles.avatar}
          size="xlarge"
          source={{uri: avatar}}
          rounded
        />
        <View style={styles.avatarActions}>
          <TouchableScale activeScale={0.6} onPress={launchFileExlorer}>
            <Icon style={styles.icon} name="folder" size={25} />
          </TouchableScale>
          <TouchableScale activeScale={0.6} onPress={launchCamera}>
            <Icon style={styles.icon} name="camera" size={25} />
          </TouchableScale>
        </View>
      </View>
      <View style={styles.form}>
        <Formik
          initialValues={{
            username: '',
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: '',
          }}
          onSubmit={(values) => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              <Input
                placeholder="Username"
                leftIcon={{type: 'font-awesome', name: 'user'}}
                style={{}}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />
              <Input
                placeholder="Current Password"
                leftIcon={{type: 'font-awesome', name: 'key'}}
                style={{}}
                onChangeText={handleChange('currentPassword')}
                onBlur={handleBlur('currentPassword')}
                value={values.currentPassword}
                secureTextEntry
              />
              <Input
                placeholder="New Password"
                leftIcon={{type: 'font-awesome', name: 'key'}}
                style={{}}
                onChangeText={handleChange('newPassword')}
                onBlur={handleBlur('newPassword')}
                value={values.newPassword}
                secureTextEntry
              />
              <Input
                placeholder="Confirm Password"
                leftIcon={{type: 'font-awesome', name: 'key'}}
                style={{}}
                onChangeText={handleChange('confirmNewPassword')}
                onBlur={handleBlur('confirmNewPassword')}
                value={values.confirmNewPassword}
                secureTextEntry
              />
              <Button
                //@ts-ignore
                onPress={handleSubmit}
                title="Submit"
                buttonStyle={styles.btn}
              />
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  avatarWrapper: {
    alignItems: 'center',
  },
  avatarActions: {
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
  avatar: {
    borderEndColor: 'black',
    borderWidth: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 6,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 18.14,

    elevation: 19,
  },
  icon: {
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 6,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 18.14,

    elevation: 19,
  },
  form: {},
  btn: {
    backgroundColor: 'black',
    width: width / 2,
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 20,
  },
});

export default EditProfile;
