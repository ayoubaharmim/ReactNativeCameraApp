import {TouchableOpacity, View, StyleSheet} from 'react-native';
import React from 'react';

export const CaptureButton = ({onPress}: {onPress: () => void}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={styles.innerCircle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    borderWidth: 4,
    borderRadius: 50,
    justifyContent: 'center',
    borderColor: 'white',
  },
  innerCircle: {
    width: 90,
    height: 90,
    backgroundColor: 'white',
    borderRadius: 45,
    alignSelf: 'center',
  },
});
