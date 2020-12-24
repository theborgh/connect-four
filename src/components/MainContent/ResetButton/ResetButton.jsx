import React, { Component } from 'react';
import './ResetButton.css';

export default class ResetButton extends Component {
  render() {
    return (
      <button className="reset-button" onClick={this.props.onClick}>
        New game
      </button>
    );
  }
}
