import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter } from '../store/actions';

const mapStateToProps = state => {
  return { count: state.count };
};

function mapDispatchToProps(dispatch) {
  return {
    incrementCounter: () => dispatch(incrementCounter())
  };
}

export class Counter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.incrementCounter}>Increment</button>
        <span> {this.props.count}</span>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);