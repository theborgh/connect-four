import CONST from '../../../constants';

export const getMessage = (msg, nextPlayer) => {
  switch (msg) {
    case CONST.NOW_TO_MOVE:
      return (
        <span>
          {CONST.NOW_TO_MOVE}
          <strong>{nextPlayer}</strong>
        </span>
      );
    case CONST.NO_MORE_ROOM:
      return (
        <strong>{CONST.NO_MORE_ROOM.replace('{PLAYER}', nextPlayer)}</strong>
      );
    case CONST.DRAW:
      return <strong>CONST.DRAW</strong>;
    case CONST.PLAYER_WINS:
      return (
        <strong>
          {CONST.PLAYER_WINS.replace('{PLAYER}', getWinningPlayer(nextPlayer))}
        </strong>
      );

    default:
      return `Error! Unknown message: ${msg}`;
  }
};

const getWinningPlayer = (nextPlayer) => {
  return nextPlayer === CONST.PLAYER_1 ? CONST.PLAYER_2 : CONST.PLAYER_1;
};
