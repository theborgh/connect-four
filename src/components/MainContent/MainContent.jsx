import React, { Component } from 'react';
import Board from './Board/Board';
import TopBanner from './TopBanner/TopBanner';
import ResetButton from './ResetButton/ResetButton';
import CONST from '../../constants';
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

  toggleNextPlayer = () => {
    const nextPlayer =
      this.state.nextToMove === CONST.PLAYER_1
        ? CONST.PLAYER_2
        : CONST.PLAYER_1;
    this.setState({ nextToMove: nextPlayer });
  };

  render() {
    const { topBannerMsg, board, nextToMove } = this.state;

    return (
      <div className="centered">
        <TopBanner msg={topBannerMsg} />
        <Board
          pieces={board}
          nextToMove={nextToMove}
          handleMove={this.toggleNextPlayer}
        />
        <ResetButton />
      </div>
    );
  }
}
