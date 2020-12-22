import React from 'react';
import './PieceHole.css';

const logClick = (col, row) => {
  console.log('Clicked a hole', col, row);
};

export default function PieceHole({ col, row }) {
  return <div className="piecehole" onClick={() => logClick(col, row)}></div>;
}
