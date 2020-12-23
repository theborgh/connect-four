import React, { Component } from 'react';
import Board from './Board/Board';
import TopBanner from './TopBanner/TopBanner';
import ResetButton from './ResetButton/ResetButton';
import CONST from '../../constants';
import {
  addPieceToColumn,
  checkEndgameConditions,
} from './MainContent-helpers';
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
      isGameFinished: false,
    };
  }

  resetBoard = () => {
    this.setState({
      topBannerMsg: CONST.NOW_TO_MOVE,
      board: Array(CONST.columnCount).fill(
        Array(CONST.rowCount).fill(CONST.EMPTY)
      ),
      nextToMove: CONST.PLAYER_1,
      isGameFinished: false,
    });
  };

  handleMove = (column) => {
    const { nextToMove, board, isGameFinished } = this.state;

    const columnToChange = board[column];
    const { newColumn, inserted } = addPieceToColumn(
      isGameFinished,
      columnToChange,
      nextToMove
    );

    if (inserted) {
      const newBoard = JSON.parse(JSON.stringify(board));

      newBoard[column] = newColumn;

      // TODO: check win and draw conditions
      const winState = checkEndgameConditions(newBoard);

      // Toggle next player
      const nextPlayer =
        nextToMove === CONST.PLAYER_1 ? CONST.PLAYER_2 : CONST.PLAYER_1;
      this.setState({
        nextToMove: nextPlayer,
        board: newBoard,
        topBannerMsg: winState,
      });
    } else {
      // TODO: handle 'no more room' and 'game finished' cases

      if (!isGameFinished) {
        this.setState({
          topBannerMsg: CONST.NO_MORE_ROOM,
        });
      }
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
