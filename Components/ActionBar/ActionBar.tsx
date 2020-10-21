import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TouchableScale from 'react-native-touchable-scale';

type Props = {
  onPress: () => void;
};

const ActionBar: React.FC<Props> = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableScale onPress={onPress} activeScale={0.6}>
        <Icon  name="arrow-left" size={25} />
      </TouchableScale>
      <TouchableScale activeScale={0.6}>
        <Icon name="braille" size={25} />
      </TouchableScale>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ActionBar;
