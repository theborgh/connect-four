import React, { Component } from 'react';
import './Board.css';
import PieceHole from './PieceHole/PieceHole';
import { v4 as uuid } from 'uuid';

// TODO: render them 1 column at a time, in a different DIV, so the column is selectable later
export default class Board extends Component {
  render() {
    const { pieces } = this.props;

    return (
      <div className="board">
        <div className="pieceholes-container">
          {pieces.map((column, i) =>
            column.map((el, j) => (
              <PieceHole key={uuid()} value={el} col={i} row={j} />
            ))
          )}
        </div>
      </div>
    );
  }
}
