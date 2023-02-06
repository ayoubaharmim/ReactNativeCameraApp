import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {CameraNavigator} from './src';

const App = () => {
  return (
    <NavigationContainer>
      <CameraNavigator />
    </NavigationContainer>
  );
};

export default App;
