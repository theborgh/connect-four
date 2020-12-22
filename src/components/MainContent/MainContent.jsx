import React, { Component } from 'react';
import Board from './Board/Board';
import TopBanner from './TopBanner/TopBanner';
import ResetButton from './ResetButton/ResetButton';

export default class MainContent extends Component {
  render() {
    return (
      <div>
        <TopBanner />
        <Board />
        <ResetButton />
      </div>
    );
  }
}
