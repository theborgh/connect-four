import React, { Component } from 'react';
import PieceHole from './PieceHole/PieceHole';
import Piece from './Piece/Piece';
import CONST from '../../../../constants';

export default class BoardColumn extends Component {
  placePiece = (column) => {
    this.props.handleMove(column);
  };

  render() {
    const { column, index, nextToMove, board } = this.props;

    return (
      <div className="column" onClick={() => this.placePiece(index)}>
        {column.map((el, j) =>
          board[index][j] === CONST.EMPTY ? (
            <PieceHole key={index + '-' + j} />
          ) : (
            <Piece key={index + '-' + j} nextToMove={nextToMove} />
          )
        )}
      </div>
    );
  }
}
