import React, { Component } from 'react';
import Board from './Board/Board';
import TopBanner from './TopBanner/TopBanner';
import ResetButton from './ResetButton/ResetButton';
import './MainContent.css';

export default class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      topBannerMsg: "Player 1's turn",
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
