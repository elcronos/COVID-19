import axios from 'axios';
import { 
  SET_CURRENT_PICTURE,
  UPLOAD_PICTURE_SUCCESS,
  UPLOAD_PICTURE_ERROR,
  DISCARD_PICTURE,
} from './types';

export function setCurrentPicture(payload) {
  return { 
    type: SET_CURRENT_PICTURE, 
    payload 
  };
}

export function uploadPicture() {
  return dispatch => {
    axios
      .get(process.env.REACT_APP_SERVER_API)
      .then(res => {
        dispatch(uploadPictureSuccess(res.data));
      })
      .catch(err => {
        dispatch(uploadPictureFailure(err.message));
      });
  };
}

function uploadPictureSuccess(payload) {
  return { 
    type: UPLOAD_PICTURE_SUCCESS, 
    payload 
  };
}

function uploadPictureFailure(payload) {
  return { 
    type: UPLOAD_PICTURE_ERROR, 
    payload 
  };
}

export function discardPicture(payload) {
  return {
    type: DISCARD_PICTURE,
    payload
  };
}