import React, { Component }  from 'react';
import { Button } from '@material-ui/core';
import { shape, string, func, bool } from 'prop-types';
import { connect } from 'react-redux';

import ImagePreview from '../../components/ImagePreview/ImageReview';
import { discardPicture, uploadPicture } from '../../store/actions';
import { withRouter } from 'react-router-dom';

export class Preview extends Component {
  static propTypes = {
    uploadPicture: func,
    discardPicture: func,
    picture: shape({
      dataUri: string
    }),
    prediction: shape({
      id: string
    }),
    uploadFailed: bool,
    uploadSuccess: bool,
    history: shape({
      push: func
    })
  }

  constructor(props) {
    super(props);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleDiscard = this.handleDiscard.bind(this);

    if(!props.picture.dataUri) {
      props.history.push('/upload');
    }
  }

  handleUpload() {
    this.props.uploadPicture(this.props.picture);
  }

  handleDiscard() {
    this.props.discardPicture();
    this.props.history.push('/upload');
  }

  componentDidUpdate(prevProps) {
    if(this.props.uploadFailed && (this.props.uploadFailed != prevProps.uploadFailed)) {
      alert('upload failed');
    }
    if(this.props.uploadSuccess && (this.props.uploadSuccess != prevProps.uploadSuccess)) {
      alert('upload failed');
      this.props.history.push('/results');
    }
  }

  render() {
    return(
      <div>
        <h1>Preview</h1>
        <ImagePreview 
          dataUri={this.props.picture.dataUri}
        />
        <Button onClick={this.handleUpload} variant='contained'>Upload</Button>
        <Button onClick={this.handleDiscard}>Discard</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ 
  picture: state.picture,
  uploadSuccess: state.uploadSuccess,
  uploadFailed: state.uploadFailed
});

const mapDispatchToProps = dispatch => ({
  discardPicture: () => dispatch(discardPicture()),
  uploadPicture: (picture) => dispatch(uploadPicture(picture))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Preview));