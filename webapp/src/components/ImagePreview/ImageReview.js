import React from 'react';
import PropTypes from 'prop-types';

import './ImagePreview.scss';

export const ImagePreview = ({ dataUri, isFullscreen }) => {
  let classNameFullscreen = isFullscreen ? 'image-preview-fullscreen' : '';

  return (
    <div className={'image-preview ' + classNameFullscreen}>
      <img src={dataUri} />
    </div>
  );
};

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool
};

export default ImagePreview;