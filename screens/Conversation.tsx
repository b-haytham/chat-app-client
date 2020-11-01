import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import ActionBar from '../Components/ActionBar/ActionBar';
import Header from '../Components/Header';
import TouchableScale from 'react-native-touchable-scale';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';
import Message from '../Components/Message';


import { useKeyboard } from '@react-native-community/hooks';

import {
  ConversationSceenNavigationProps,
  ConversationScreenRouteProps,
} from './types';

type Props = {
  navigation: ConversationSceenNavigationProps;
  route: ConversationScreenRouteProps;
};



const Conversation: React.FC<Props> = ({route, navigation}) => {

  const  {keyboardShown} = useKeyboard()


  const [messages, setMessages] = useState<string[]>([]);
  const [ms, setMs] = useState('');

  const onSend = () => {
    setMessages((prev) => [...prev, ms]);
  };

  return (
    <View style={styles.container}>
      {!keyboardShown && (
        <View>
          <ActionBar onPress={() => navigation.goBack()} />
          <Header chatScreen />
        </View>
      )}
      <ScrollView>
        {messages.map((mess, index) => (
          <Message key={index} message={mess} />
        ))}
      </ScrollView>
      <View style={styles.messageInputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Send Message"
          value={ms}
          onChangeText={(v) => setMs(v)}
        />
        <TouchableScale activeScale={0.7} onPress={onSend}>
          <Icon name="paper-plane" size={20} color="black" />
        </TouchableScale>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  messageInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {},
});

export default Conversation;
