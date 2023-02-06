import React from 'react';
import {ViewStyle, HostComponent, requireNativeComponent} from 'react-native';

type TProps = {
  style: ViewStyle;
  cameraRef: React.RefObject<HostComponent<unknown>>;
  onPathChange: (path: string) => void;
};

export const Camera = requireNativeComponent('CameraView');

export const CameraView = ({style, cameraRef, onPathChange}: TProps) => {
  return (
    <>
      <Camera
        ref={cameraRef}
        onResultImageExported={data => {
          onPathChange(data.nativeEvent.resultUrl);
        }}
        style={style}
      />
    </>
  );
};
