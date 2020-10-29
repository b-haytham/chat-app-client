import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Text} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import {UserType} from '../../redux/dataTypes';

type Props = {
  item: UserType;
  onPress: () => void;
};

const SuggestedItem: React.FC<Props> = ({onPress, item}) => {
  return (
    <View style={styles.container}>
      <TouchableScale activeScale={0.7} onPress={onPress}>
        <Avatar rounded size="medium" source={{uri: item.avatar}} />
      </TouchableScale>
      <Text style={styles.text}>{item.username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#757472',
  },
});

export default SuggestedItem;
