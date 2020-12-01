import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import ActionBar from '../Components/ActionBar/ActionBar';

import {Image, Input, Button} from 'react-native-elements';

import {useSelector} from 'react-redux';

import ImagePicker, {ImagePickerResponse} from 'react-native-image-picker';

import {CreatePostNavigationProps, CreatePostRouteProps} from './types';
import {RootState} from '../redux/rootReducer';
import client from '../utils/feathersClient';

type Props = {
  navigation: CreatePostNavigationProps;
  route: CreatePostRouteProps;
};

const {width} = Dimensions.get('window');

const CreatePost: React.FC<Props> = ({navigation}) => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  const [image, setImage] = useState<ImagePickerResponse | null>(null);

  const [saySomething, setSaySomething] = useState('');

  const launchCamera = () => {
    ImagePicker.launchCamera(
      {
        mediaType: 'photo',
        allowsEditing: true,
        quality: 1,
      },
      (response) => {
        setImage(response);
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
        setImage(response);
      },
    );
  };

  const submit = async () => {
    const response = await client.service('posts').create({
      title: saySomething,
      description: saySomething,
      content: '',
      owner: currentUser._id,
      data: {
        name: image.fileName,
        base64: image.data,
      },
    });
    console.log(response);

    setImage(null);
    setSaySomething('');
    navigation.navigate('SettingsMain');
  };

  return (
    <KeyboardAvoidingView behavior="position" style={styles.container}>
      <ActionBar
        onPress={() => navigation.goBack()}
        onFilePress={launchFileExlorer}
        onCameraPress={launchCamera}
      />
      <Text style={styles.title}>Create Post</Text>

      {!image && (
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imagePlaceholderText}>Take a Photo</Text>
        </View>
      )}
      {image && (
        <Image
          transition
          resizeMode="cover"
          style={styles.image}
          source={{uri: image.uri}}
        />
      )}
      <Input
        placeholder="Say Something"
        value={saySomething}
        onChangeText={(e) => setSaySomething(e)}
      />
      <Button onPress={submit} title="Submit" buttonStyle={styles.btn} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: width - 40,
    height: 200,
    marginVertical: 20,
    borderRadius: 10,
  },
  imagePlaceholder: {
    width: width - 40,
    height: 200,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#363333',
    borderRadius: 5,
  },
  imagePlaceholderText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: 'black',
    width: width / 2,
    alignSelf: 'center',
    borderRadius: 10,
  },
});

export default CreatePost;
