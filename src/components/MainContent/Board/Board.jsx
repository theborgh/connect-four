import React, { Component } from 'react';
import './Board.css';
import BoardColumn from './BoardColumn/BoardColumn';

export default class Board extends Component {
  render() {
    const {
      pieces,
      nextToMove,
      handleMove,
      isGameFinished,
      p1Color,
      p2Color,
    } = this.props;

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
              isGameFinished={isGameFinished}
              p1Color={p1Color}
              p2Color={p2Color}
            />
          ))}
        </div>
      </div>
    );
  }
}
