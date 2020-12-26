import React, { Component } from 'react';
import './Piece.css';

export default function Piece({ color }) {
  return (
    <div
      className="piece"
      style={{
        backgroundColor: color,
      }}
    ></div>
  );
}
