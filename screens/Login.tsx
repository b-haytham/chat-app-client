import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Text, Icon, Button} from 'react-native-elements';
import { useAppDispatch } from '../redux/store';
import { authenticate } from '../redux/users/usersSlice';
import { LoginSceenNavigationProps, LoginSceenRouteProps } from './types';



type Props = {
  navigation: LoginSceenNavigationProps
  route: LoginSceenRouteProps
}



const Login: React.FC<Props> = ({navigation, route}) => {

  const dispatch = useAppDispatch()
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handlePress = () => {
    dispatch(authenticate(email,password, navigation))
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
          onChangeText={(v)=> setEmail(v)}
        />
       <Input 
            placeholder="password"
            leftIcon={{type: 'font-awesome', name: 'lock'}}
            secureTextEntry
            value={password}
            onChangeText={(v)=> setPassword(v)}
        />
        <Button
          title="Login"
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

export default Login;
