import React, { Component } from 'react';
import './Board.css';
import PieceHole from './PieceHole/PieceHole';

export default class Board extends Component {
  render() {
    const { pieces } = this.props;

    return (
      <div className="board">
        <div className="pieceholes-container">
          {pieces.map((column, i) => (
            <div className="column">
              {column.map((el, j) => (
                <PieceHole key={i + '-' + j} value={el} col={i} row={j} />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
