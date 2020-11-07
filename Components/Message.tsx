import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {MessageType} from '../redux/dataTypes';
import {RootState} from '../redux/rootReducer';

type Props = {
  message: MessageType;
};

const Message: React.FC<Props> = ({message}) => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  return (
    <View
      style={[
        styles.container,
        {
          alignSelf:
            //@ts-ignore
            currentUser._id === message.sender ? 'flex-end' : 'flex-start',
        },
      ]}>
      <Text style={styles.text}>{message.content}</Text>
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
  },
});

export default Message;
