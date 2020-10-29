import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  
  ScrollView
} from 'react-native';
import ActionBar from '../Components/ActionBar/ActionBar';
import Animated from 'react-native-reanimated'
import {
  AppearanceSceenNavigationProps,
  AppearanceScreenRouteProps,
} from './types';

type Props = {
  navigation: AppearanceSceenNavigationProps;
  route: AppearanceScreenRouteProps;
};


const Appearance: React.FC<Props> = ({navigation}) => {
  const scrollY = new Animated.Value(0)

  const scale = Animated.interpolate(scrollY, {
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolateLeft: Animated.Extrapolate.CLAMP
  })

  const transY = Animated.interpolate(scrollY, {
      inputRange: [0, 300],
      outputRange: [0, - 300]
  })

  return (
    <View style={styles.container}>
      <ActionBar onPress={() => navigation.goBack()} />
      <Animated.View style={[{transform: [{scale}]}]}>
       <View style={[styles.view]} />
       <View style={[styles.view ]} />
       </Animated.View> 
       <Animated.View style={[{transform: [{translateY: transY}]}]}>
       <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([
            {nativeEvent: {contentOffset: {y : scrollY}}}
        ])}
       >
           {Arr.map((itm, ind)=> <View key={ind} style={[styles.view, {backgroundColor: itm}]} />)}
       </Animated.ScrollView>
       </Animated.View>
    </View>
  );
};

const Arr = ['#000011', '#ff0235', '#00f', '#010d01', '#0f1']

const styles = StyleSheet.create({
  container: {
      flex: 1,
    paddingHorizontal: 20,
  },
  view: {
      width: '60%',
      height: 100,
      backgroundColor: 'green',
      borderRadius: 25,
      alignSelf: 'center',
      margin: 10
  },
  scrollview: {

  }
  
});


export default Appearance;
