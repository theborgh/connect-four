import React, { useState } from 'react';
import CONST from '../../../constants';

export default function PlayerForm(props) {
  const { name, color, playerID } = props;
  const [playerName, setPlayerName] = useState(name);
  const [playerColor, setPlayerColor] = useState(color);

  const handleSubmit = (e) => {
    const { playerID, handleFormSubmit } = props;

    e.preventDefault();
    handleFormSubmit(playerID, e.target.elements);
  };

  return (
    <>
      <h5 className="formheader">Player {playerID} settings</h5>
      <form onSubmit={handleSubmit}>
        <div className="form-name">
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
        <div className="form-color">
          <label htmlFor="name">Color: </label>
          <input
            type="color"
            name="color"
            id="color"
            value={playerColor}
            onChange={(e) => setPlayerColor(e.target.value)}
          />
        </div>
        <button>OK</button>
      </form>
    </>
  );
}
