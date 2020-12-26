import React, { Component } from 'react';
import './Piece.css';

export default class Piece extends Component {
  constructor({ color }) {
    super();
    this.state = {
      color: color,
    };
  }

  render() {
    const { color } = this.state;

    return (
      <div
        className="piece"
        style={{
          backgroundColor: color,
        }}
      ></div>
    );
  }
}
