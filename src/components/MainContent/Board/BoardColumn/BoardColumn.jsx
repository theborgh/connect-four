import React, { Component } from 'react';
import PieceHole from './PieceHole/PieceHole';

export default class BoardColumn extends Component {
  placePiece = (nextToMove, column) => {
    console.log(`Placing a piece for ${nextToMove} on column ${column}`);

    // Change the next player
    this.props.handleMove();
  };

  render() {
    const { column, index, nextToMove } = this.props;

    return (
      <div
        className="column"
        onClick={() => this.placePiece(nextToMove, index)}
      >
        {column.map((el, j) => (
          <PieceHole key={index + '-' + j} value={el} col={index} row={j} />
        ))}
      </div>
    );
  }
}
