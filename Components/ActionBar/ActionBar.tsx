import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TouchableScale from 'react-native-touchable-scale';
import {useRoute} from '@react-navigation/native';

type Props = {
  onPress: () => void;
  onPlusPress?: () => void;
  onCameraPress?: () => void;
  onFilePress?: () => void;
};

const ActionBar: React.FC<Props> = ({
  onPress,
  onPlusPress,
  onCameraPress,
  onFilePress,
}) => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <TouchableScale onPress={onPress} activeScale={0.6}>
        <Icon name="arrow-left" size={25} />
      </TouchableScale>

      {route.name !== 'CreatePost' && (
        <TouchableScale activeScale={0.6} onPress={onPlusPress}>
          <Icon name="plus" size={25} />
        </TouchableScale>
      )}
      {route.name == 'CreatePost' && (
        <View style={styles.CameraFileContainer}>
          <TouchableScale activeScale={0.6} onPress={onFilePress}>
            <Icon style={styles.icon} name="folder" size={25} />
          </TouchableScale>
          <TouchableScale activeScale={0.6} onPress={onCameraPress}>
            <Icon style={styles.icon} name="camera" size={25} />
          </TouchableScale>
        </View>
      )}
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
  CameraFileContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 20,
  },
});

export default ActionBar;
