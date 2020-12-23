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

      // TODO: check diagonal win condition
      const winState = checkEndgameConditions(newBoard);

      // Toggle next player
      const nextPlayer =
        nextToMove === CONST.PLAYER_1 ? CONST.PLAYER_2 : CONST.PLAYER_1;
      this.setState({
        nextToMove: nextPlayer,
        board: newBoard,
        topBannerMsg: winState,
        isGameFinished:
          winState === CONST.DRAW || winState === CONST.PLAYER_WINS,
      });
    } else {
      // Could not insert because there is no more room in the selected column, but the game is still ongoing
      if (!isGameFinished) {
        this.setState({
          topBannerMsg: CONST.NO_MORE_ROOM,
        });
      }
    }
  };

  render() {
    const { topBannerMsg, board, nextToMove, isGameFinished } = this.state;

    return (
      <div className="main">
        <TopBanner msg={topBannerMsg} nextPlayer={nextToMove} />
        <Board
          pieces={board}
          nextToMove={nextToMove}
          handleMove={this.handleMove}
          isGameFinished={isGameFinished}
        />
        <ResetButton onClick={this.resetBoard} />
      </div>
    );
  }
}
