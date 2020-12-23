import React, { Component } from 'react';
import './Board.css';
import BoardColumn from './BoardColumn/BoardColumn';

export default class Board extends Component {
  render() {
    const { pieces, nextToMove, handleMove } = this.props;

    return (
      <div className="board">
        <div className="pieceholes-container">
          {pieces.map((column, i) => (
            <BoardColumn
              board={pieces}
              key={i}
              index={i}
              column={column}
              nextToMove={nextToMove}
              handleMove={handleMove}
            />
          ))}
        </div>
      </div>
    );
  }
}
