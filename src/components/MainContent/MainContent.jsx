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
      topBannerMsg: CONST.NOW_TO_MOVE,
      board: Array(CONST.columnCount).fill(
        Array(CONST.rowCount).fill(CONST.EMPTY)
      ),
      nextToMove: CONST.PLAYER_1,
    };
  }

  resetBoard = () => {
    this.setState({
      topBannerMsg: CONST.NOW_TO_MOVE,
      board: Array(CONST.columnCount).fill(
        Array(CONST.rowCount).fill(CONST.EMPTY)
      ),
      nextToMove: CONST.PLAYER_1,
    });
  };

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
      this.setState({
        nextToMove: nextPlayer,
        board,
        topBannerMsg: CONST.NOW_TO_MOVE,
      });
    } else {
      this.setState({
        topBannerMsg: CONST.NO_MORE_ROOM,
      });
    }
  };

  render() {
    const { topBannerMsg, board, nextToMove } = this.state;

    return (
      <div className="main">
        <TopBanner msg={topBannerMsg} nextPlayer={nextToMove} />
        <Board
          pieces={board}
          nextToMove={nextToMove}
          handleMove={this.handleMove}
        />
        <ResetButton onClick={this.resetBoard} />
      </div>
    );
  }
}
