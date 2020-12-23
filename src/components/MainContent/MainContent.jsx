import React, { Component } from 'react';
import Board from './Board/Board';
import TopBanner from './TopBanner/TopBanner';
import ResetButton from './ResetButton/ResetButton';
import CONST from '../../constants';
import { addPieceToColumn } from './MainContent-helpers';
import './MainContent.css';

export default class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      topBannerMsg: 'Now to move: Player 1',
      board: Array(CONST.columnCount).fill(
        Array(CONST.rowCount).fill(CONST.EMPTY)
      ),
      nextToMove: CONST.PLAYER_1,
    };
  }

  handleMove = (column) => {
    const { nextToMove, board } = this.state;

    const columnToChange = board[column];
    const { newColumn, inserted } = addPieceToColumn(
      columnToChange,
      nextToMove
    );

    if (inserted) {
      // TODO: do not mutate board
      board[column] = newColumn;

      // Toggle next player
      const nextPlayer =
        nextToMove === CONST.PLAYER_1 ? CONST.PLAYER_2 : CONST.PLAYER_1;
      this.setState({ nextToMove: nextPlayer, board });
    }
    // TODO: error message?
  };

  render() {
    const { topBannerMsg, board, nextToMove } = this.state;

    return (
      <div className="centered">
        <TopBanner msg={topBannerMsg} />
        <Board
          pieces={board}
          nextToMove={nextToMove}
          handleMove={this.handleMove}
        />
        <ResetButton />
      </div>
    );
  }
}
