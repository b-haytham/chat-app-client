import React, {useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Text, Icon, Button} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/rootReducer';
import { useAppDispatch } from '../redux/store';
import {createUser} from '../redux/auth/authSlice';
import client from '../utils/feathersClient';
import {RegisterSceenRouteProps, RegisterScreenNavigationProps} from './types';



type Props = {
  navigation: RegisterScreenNavigationProps;
  route: RegisterSceenRouteProps;
};

const Register: React.FC<Props> = ({navigation}) => {

  const dispatch = useAppDispatch()

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const ref = useRef(0)

  ref.current++

  const handlePress = async () => {
    dispatch(createUser(username,email,password, navigation))
    
  };

  console.log('ref', ref)
  

  return (
    <View style={styles.container}>
      <Text h1 style={styles.title}>
        Register 
      </Text>
      <View style={styles.form}>
        <Input
          placeholder="username "
          leftIcon={{type: 'font-awesome', name: 'user'}}
          value={username}
          onChangeText={(v) => setUsername(v)}
        />
        <Input
          placeholder="email"
          leftIcon={{type: 'font-awesome', name: 'at'}}
          value={email}
          onChangeText={(v) => setEmail(v)}
        />
        <Input
          placeholder="password"
          leftIcon={{type: 'font-awesome', name: 'lock'}}
          secureTextEntry
          value={password}
          onChangeText={(v) => setPassword(v)}
        />
        <Button
          title="Register"
          type="outline"
          titleStyle={{color: 'black'}}
          buttonStyle={styles.btn}
          onPress={handlePress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    textAlign: 'center',
    position: 'absolute',
    top: 50,
  },
  form: {
    width: '60%',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  btn: {
    borderColor: 'black',
  },
});

export default Register;
