import React, { Component } from 'react';
import PieceHole from './PieceHole/PieceHole';
import Piece from './Piece/Piece';
import CONST from '../../../../constants';

export default class BoardColumn extends Component {
  placePiece = (column) => {
    this.props.handleMove(column);
  };

  render() {
    const {
      column,
      index,
      nextToMove,
      board,
      isGameFinished,
      p1Color,
      p2Color,
    } = this.props;

    return (
      <div
        className={`column ${
          nextToMove === CONST.PLAYER_1 ? 'blue-bg' : 'red-bg'
        } ${isGameFinished ? 'no-bg' : ''}`}
        onClick={() => this.placePiece(index)}
      >
        {column.map((el, j) =>
          board[index][j] === CONST.EMPTY ? (
            <PieceHole key={index + '-' + j} />
          ) : (
            <Piece
              key={index + '-' + j}
              color={board[index][j] === CONST.PLAYER_1 ? p1Color : p2Color}
            />
          )
        )}
      </div>
    );
  }
}
