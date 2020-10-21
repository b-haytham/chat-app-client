import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = {
  message: string;
};

const Message: React.FC<Props> = ({message}) => {
  return (
    <View style={[styles.container, {alignSelf: message.length > 10 ? 'flex-end' : 'flex-start',}]}>
      <Text
        style={styles.text}>
        {message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: '40%',
    marginVertical: 10,
    minWidth: 100,
  },
  text: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
  }
});

export default Message;
