import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Text, Icon, Button} from 'react-native-elements';
import { RegisterSceenRouteProps, RegisterScreenNavigationProps } from './types';





type Props = {
  navigation: RegisterScreenNavigationProps
  route: RegisterSceenRouteProps
}



const Register: React.FC<Props> = ({navigation}) => {
  const handlePress = () => {
      navigation.navigate('Login')
  };

  return (
    <View style={styles.container}>
      <Text h1 style={styles.title}>
        Register
      </Text>
      <View style={styles.form}>
        <Input
          placeholder="username "
          leftIcon={{type: 'font-awesome', name: 'user'}}
        />
        <Input
          placeholder="email"
          leftIcon={{type: 'font-awesome', name: 'at'}}
        />
        <Input 
            placeholder="password"
            leftIcon={{type: 'font-awesome', name: 'lock'}}
            secureTextEntry
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
