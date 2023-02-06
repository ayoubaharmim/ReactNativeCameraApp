import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {CameraScreen, ResultScreen} from '../screens';

const Stack = createNativeStackNavigator();

export const CameraNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ResultScreen"
        component={ResultScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
