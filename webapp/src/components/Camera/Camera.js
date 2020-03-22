import React from 'react';
import Camera, {FACING_MODES} from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { func } from 'prop-types';

function CustomCamera({handleTakePhoto}) {
  const isFullscreen = false;

  function handleCameraError(error) {
    alert(`Error: ${error.message}`);
    console.log(error);
  }

  return(
    <Camera 
      idealFacingMode={FACING_MODES.ENVIROMENT}
      onCameraError={handleCameraError}
      onTakePhotoAnimationDone={handleTakePhoto}
      isFullscreen={isFullscreen}
    />
  );
}

CustomCamera.propTypes  = {
  handleTakePhoto: func
};

export default CustomCamera;