import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Divider} from 'react-native-elements';

import {ContentOptionsBase} from 'react-native-push-notification-popup';

const CustomNotificationPopup = ({
  appTitle,
  appIconSource,
  body,
  timeText,
  title,
}: ContentOptionsBase) => {
  return (
    <View style={styles.popupContainer}>
      <View style={styles.header}>
        <Text style={{color: '#928c8c'}}>{appTitle}</Text>
        <Text style={{color: '#928c8c'}}>{timeText}</Text>
      </View>
      <View style={styles.body}>
        <Text>{title}</Text>
        <Divider />
        <Text style={{marginTop: 10}}>{body}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  popupContainer: {
    zIndex: 10000,
    borderWidth: 2,
    borderColor: '#252424',
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#252424',

    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  body: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
});

export default CustomNotificationPopup;
