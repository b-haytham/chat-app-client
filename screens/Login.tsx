import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Input, Text, Icon, Button} from 'react-native-elements';
import {useAppDispatch} from '../redux/store';
import {authenticate} from '../redux/auth/authSlice';
import {LoginSceenNavigationProps, LoginSceenRouteProps} from './types';
import {TouchableOpacity} from 'react-native-gesture-handler';

type Props = {
  navigation: LoginSceenNavigationProps;
  route: LoginSceenRouteProps;
};

const {width} = Dimensions.get('window');

const Login: React.FC<Props> = ({navigation, route}) => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = () => {
    dispatch(authenticate(email, password, navigation));
  };

  return (
    <View style={styles.container}>
      <Text h1 style={styles.title}>
        Login
      </Text>
      <View style={styles.form}>
        <Input
          placeholder="email address"
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
        <Button title="Login" buttonStyle={styles.btn} onPress={handlePress} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>don´t have account? Register</Text>
      </TouchableOpacity>
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
  },
  form: {
    width: '60%',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  btn: {
    backgroundColor: 'black',
    width: width / 2,
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 20,
  },
});

export default Login;
