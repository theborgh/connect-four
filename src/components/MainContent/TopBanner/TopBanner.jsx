import React from 'react';
import { getMessage } from './TopBanner-helpers';
import './TopBanner.css';

export default function TopBanner({ msg, nextPlayer, p1Name, p2Name }) {
  return (
    <div className="top-banner">
      {getMessage(msg, nextPlayer, p1Name, p2Name)}
    </div>
  );
}
