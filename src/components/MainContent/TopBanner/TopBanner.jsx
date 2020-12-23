import React from 'react';
import { getMessage } from './TopBanner-helpers';
import './TopBanner.css';

export default function TopBanner({ msg, nextPlayer }) {
  return <div className="top-banner">{getMessage(msg, nextPlayer)}</div>;
}
