import React, { Component } from 'react';
import CONST from '../../../../../constants';
import './Piece.css';

export default class Piece extends Component {
  constructor({ nextToMove }) {
    super();
    this.state = {
      color: nextToMove === CONST.PLAYER_1 ? CONST.P1_COLOR : CONST.P2_COLOR,
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
