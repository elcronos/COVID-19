import React, { Component } from 'react';
import 'react-html5-camera-photo/build/css/index.css';
import { connect } from 'react-redux';
import { func, shape } from 'prop-types';

import Camera from '../../components/Camera/Camera';
import { setCurrentPicture } from '../../store/actions';
import { withRouter } from 'react-router-dom';
import GalleryInput from './GalleryInput';


class TakePicture extends Component {
  static propTypes = {
    setCurrentPicture: func,
    history: shape({
      push: func
    })
  }

  constructor(props) {
    super(props);
    this.handleTakePhoto = this.handleTakePhoto.bind(this);
    this.handleFileSelected = this.handleFileSelected.bind(this);
  }

  handleTakePhoto (dataUri) {
    this.props.setCurrentPicture(dataUri);
    this.props.history.push('/upload/preview');
  }

  handleFileSelected (dataUri) {
    this.props.setCurrentPicture(dataUri);
    this.props.history.push('/upload/preview');
  }

  render() {
    return (
      <div>
        <Camera handleTakePhoto={this.handleTakePhoto} />
        <GalleryInput onFileSelected={this.handleFileSelected} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentPicture: (dataUri) => dispatch(setCurrentPicture(dataUri)),
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(TakePicture));