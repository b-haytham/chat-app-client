import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Platform,
  Image,
} from 'react-native';

import ImagePicker, {ImagePickerResponse} from 'react-native-image-picker';

import ActionBar from '../Components/ActionBar/ActionBar';
import {playSound} from '../utils/playSound';

import {
  AppearanceSceenNavigationProps,
  AppearanceScreenRouteProps,
} from './types';

import client from '../utils/feathersClient';

import {useSelector} from 'react-redux';
import {RootState} from '../redux/rootReducer';

type Props = {
  navigation: AppearanceSceenNavigationProps;
  route: AppearanceScreenRouteProps;
};

const Appearance: React.FC<Props> = ({navigation}) => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  const [imagePicker, setImagePicker] = useState<ImagePickerResponse | null>(
    null,
  );
  return (
    <View style={styles.container}>
      <ActionBar
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text>Appearance</Text>
      <Button title="Play Sound" onPress={() => playSound('fa.mp3')} />
      <Button
        title="Image Picker"
        onPress={() => {
          ImagePicker.launchCamera(
            {
              mediaType: 'photo',
              allowsEditing: true,
              quality: 1,
            },
            (response) => {
              setImagePicker(response);
            },
          );
        }}
      />
      <Button
        title="Select image"
        onPress={() =>
          ImagePicker.launchImageLibrary(
            {
              mediaType: 'photo',
              allowsEditing: true,
              quality: 1,
            },
            (response) => {
              setImagePicker(response);
            },
          )
        }
      />
      <Button
        title="Send Request"
        onPress={async () => {
          const response = await client.service('posts').create({
            title: 'tictklnvakl',
            description: 'jafkjjj',
            content: 'aslkfjafj',
            data: {
              name: imagePicker.fileName,
              base64: imagePicker.data,
            },
          });
          console.log(response);
        }}
      />
      {imagePicker && (
        <Image
          source={{uri: imagePicker.uri}}
          style={{width: 200, height: 200}}
        />
      )}
    </View>
  );
};

const Arr = ['#000011', '#ff0235', '#00f', '#010d01', '#0f1'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  view: {
    width: '60%',
    height: 100,
    backgroundColor: 'green',
    borderRadius: 25,
    alignSelf: 'center',
    margin: 10,
  },
  scrollview: {},
});

export default Appearance;
