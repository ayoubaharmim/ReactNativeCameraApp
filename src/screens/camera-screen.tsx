import React, {useRef} from 'react';
import {
  NativeModules,
  SafeAreaView,
  StyleSheet,
  View,
  findNodeHandle,
} from 'react-native';
import {Camera, CameraView, CaptureButton} from '../components';
import {useNavigation} from '@react-navigation/native';

export const CameraScreen = () => {
  const cameraRef = useRef<typeof Camera>(null);
  const {navigate} = useNavigation();

  const handleTakePhoto = async () => {
    try {
      await NativeModules.CameraViewManager.takePhoto(
        findNodeHandle(cameraRef.current),
      );
    } catch (error) {
      console.error('error', error);
    }
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <CameraView
          style={styles.camera}
          cameraRef={cameraRef}
          onPathChange={val => {
            navigate('ResultScreen', {result: val});
          }}
        />

        <CaptureButton onPress={handleTakePhoto} />
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
  mainContainer: {backgroundColor: 'black'},
});
