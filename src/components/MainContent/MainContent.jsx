import React, { Component } from 'react';
import Board from './Board/Board';
import TopBanner from './TopBanner/TopBanner';
import ResetButton from './ResetButton/ResetButton';
import PlayerForm from './PlayerForm/PlayerForm';
import CONST from '../../constants';
import {
  addPieceToColumn,
  checkEndgameConditions,
  hexToRGBA,
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
      p1Name: 'Player1',
      p2Name: 'Player2',
      p1Color: CONST.P1_COLOR,
      p2Color: CONST.P2_COLOR,
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

  handlePlayerFormSubmit = (playerID, v) => {
    if (playerID === 1) {
      this.setState(
        {
          p1Name: v.name.value,
          p1Color: v.color.value,
        },
        document.documentElement.style.setProperty(
          '--hover-color-1',
          hexToRGBA(v.color.value, CONST.ALPHA)
        )
      );
    } else {
      this.setState(
        {
          p2Name: v.name.value,
          p2Color: v.color.value,
        },
        document.documentElement.style.setProperty(
          '--hover-color-2',
          hexToRGBA(v.color.value, CONST.ALPHA)
        )
      );
    }
  };

  render() {
    const {
      topBannerMsg,
      board,
      nextToMove,
      isGameFinished,
      p1Name,
      p2Name,
      p1Color,
      p2Color,
    } = this.state;

    return (
      <div className="main">
        <div className="sidebars hide-on-big">
          <div className="sidebar">
            <PlayerForm
              playerID={1}
              name={p1Name}
              color={p1Color}
              handleFormSubmit={this.handlePlayerFormSubmit}
            />
          </div>
          <div className="sidebar">
            <PlayerForm
              playerID={2}
              name={p2Name}
              color={p2Color}
              handleFormSubmit={this.handlePlayerFormSubmit}
            />
          </div>
        </div>
        <TopBanner
          msg={topBannerMsg}
          nextPlayer={nextToMove}
          p1Name={p1Name}
          p2Name={p2Name}
        />
        <div className="board-and-sidebars-container">
          <div className="sidebar hide-on-small">
            <PlayerForm
              playerID={1}
              name={p1Name}
              color={p1Color}
              handleFormSubmit={this.handlePlayerFormSubmit}
            />
          </div>

          <Board
            pieces={board}
            nextToMove={nextToMove}
            handleMove={this.handleMove}
            isGameFinished={isGameFinished}
            p1Color={p1Color}
            p2Color={p2Color}
          />
          <div className="sidebar hide-on-small">
            <PlayerForm
              playerID={2}
              name={p2Name}
              color={p2Color}
              handleFormSubmit={this.handlePlayerFormSubmit}
            />
          </div>
        </div>
        <ResetButton onClick={this.resetBoard} />
      </div>
    );
  }
}
