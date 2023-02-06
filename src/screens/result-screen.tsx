import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {MenuButton} from '../components';

export const ResultScreen = ({route, navigation}) => {
  const {result} = route.params;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Image style={styles.camera} source={{uri: result}} />
        <View style={styles.buttonContainer}>
          <MenuButton
            text="Retake"
            onPress={() => navigation.goBack()}
            closeIcon={false}
          />
          <MenuButton text="Use Photo" onPress={() => {}} closeIcon={true} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  camera: {
    width: '100%',
    height: 600,
  },
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
  },
  mainContainer: {backgroundColor: 'black'},
});
