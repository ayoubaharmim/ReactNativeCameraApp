import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import React from 'react';
import {Tick, Back} from '../assets';

export const MenuButton = ({
  onPress,
  text,
  closeIcon,
}: {
  onPress: () => void;
  text: string;
  closeIcon: boolean;
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.iconWrapper}>{!closeIcon ? <Back /> : <Tick />}</View>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {width: 15, height: 15, marginRight: 4},
  container: {flexDirection: 'row'},
  textStyle: {color: 'white'},
});
