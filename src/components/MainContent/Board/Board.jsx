import React, { Component } from 'react';
import './Board.css';
import PieceHole from './PieceHole/PieceHole';
import { v4 as uuid } from 'uuid';

export default class Board extends Component {
  render() {
    const { pieces } = this.props;

    return (
      <div className="board">
        <div className="pieceholes-container">
          {pieces.map((column) =>
            column.map((el) => <PieceHole key={uuid()} value={el} />)
          )}
        </div>
      </div>
    );
  }
}
