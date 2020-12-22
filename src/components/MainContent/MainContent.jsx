import React, { Component } from 'react';
import Board from './Board/Board';
import TopBanner from './TopBanner/TopBanner';
import ResetButton from './ResetButton/ResetButton';
import './MainContent.css';
import CONST from '../../constants';

export default class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      topBannerMsg: 'Now to move: Player 1',
      board: Array(CONST.columnCount).fill(
        Array(CONST.rowCount).fill(CONST.EMPTY)
      ),
    };
  }

  render() {
    const { topBannerMsg } = this.state;

    return (
      <div className="centered">
        <TopBanner msg={topBannerMsg} />
        <Board />
        <ResetButton />
      </div>
    );
  }
}
