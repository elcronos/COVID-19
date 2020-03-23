import React from 'react';
import { Button } from '@material-ui/core';
import { func } from 'prop-types';

function GalleryInput({ onFileSelected }) {
  const fileInputRef = React.createRef();

  function onChange(){
    const file = fileInputRef.current.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
  
    reader.onloadend = () => {
      onFileSelected(reader.result);
    };
  }

  return(
    <Button
      variant='contained'
      component='label'>
            Select image from gallery
      <input
        ref={fileInputRef}
        type='file'
        onChange={onChange}
        style={{ display: 'none' }}
      />
    </Button>
  );
}

GalleryInput.propTypes = {
  onFileSelected: func
};

export default GalleryInput;