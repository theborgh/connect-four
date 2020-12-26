import React, { useState } from 'react';
import CONST from '../../../constants';
import './PlayerForm.css';

export default function PlayerForm(props) {
  const { name, color, playerID } = props;
  const [playerName, setPlayerName] = useState(name);
  const [playerColor, setPlayerColor] = useState(color);

  const handleSubmit = (e) => {
    const { handleFormSubmit } = props;

    e.preventDefault();
    handleFormSubmit(playerID, e.target.elements);
  };

  return (
    <div className="form-container">
      <h4 className="form-header">Player {playerID} settings</h4>
      <form onSubmit={handleSubmit} className="player-form">
        <div className="form-inputs">
          <div className="form-input">
            <label htmlFor="p1name">Name: </label>
            <input
              type="text"
              name="pname"
              id="name"
              placeholder={CONST.ENTER_PLAYER_NAME}
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label htmlFor="name">Color: </label>
            <input
              type="color"
              name="color"
              id="color"
              value={playerColor}
              onChange={(e) => setPlayerColor(e.target.value)}
            />
          </div>
        </div>
        <button className="form-button">Apply</button>
      </form>
    </div>
  );
}
