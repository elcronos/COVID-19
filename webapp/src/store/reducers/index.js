import { 
  DISCARD_PICTURE,
  SET_CURRENT_PICTURE,
  UPLOAD_PICTURE_SUCCESS,
  UPLOAD_PICTURE_ERROR
} from '../actions/types';

const initialState = {
  prediction: {
    id: null
  },
  picture: {
    dataUri: null,
  },
  uploadSuccess: false,
  uploadFailed: false
};

function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
  case SET_CURRENT_PICTURE:
    // console.log('Setting current picture');
    return {
      ...state,
      picture: {
        dataUri: payload
      }
    };
  case UPLOAD_PICTURE_SUCCESS:
    // console.log('Upload picture succes');
    return {
      ...state,
      prediction: payload,
      uploadSuccess: true
    };
  case UPLOAD_PICTURE_ERROR:
    // console.log('Uploading picture error');
    return {
      ...state,
      uploadFailed: true
    };
  case DISCARD_PICTURE:
    // console.log('Discarding picture');
    return {
      ...state,
      uploadFailed: false,
      picture: {
        dataUri: null,
      },
    };
  default:
    break;
  }
  return state;
}

export default rootReducer;