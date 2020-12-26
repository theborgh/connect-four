import CONST from '../../../constants';

export const getMessage = (msg, nextPlayer, p1Name, p2Name) => {
  switch (msg) {
    case CONST.NOW_TO_MOVE:
      return (
        <span>
          {CONST.NOW_TO_MOVE}
          <strong>{getPlayerName(nextPlayer, p1Name, p2Name)}</strong>
        </span>
      );
    case CONST.NO_MORE_ROOM:
      return (
        <strong>
          {CONST.NO_MORE_ROOM.replace(
            '{PLAYER}',
            getPlayerName(nextPlayer, p1Name, p2Name)
          )}
        </strong>
      );
    case CONST.DRAW:
      return <strong>{CONST.DRAW}</strong>;
    case CONST.PLAYER_WINS:
      return (
        <strong>
          {CONST.PLAYER_WINS.replace(
            '{PLAYER}',
            getPlayerName(nextPlayer, p2Name, p1Name)
          )}
        </strong>
      );

    default:
      return `Error! Unknown message: ${msg}`;
  }
};

const getPlayerName = (playerCode, p1Name, p2Name) => {
  return playerCode === CONST.PLAYER_1 ? p1Name : p2Name;
};
