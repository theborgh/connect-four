import CONST from '../../../constants';

export const getMessage = (msg, nextPlayer) => {
  switch (msg) {
    case CONST.NOW_TO_MOVE:
      return `${CONST.NOW_TO_MOVE}${nextPlayer}`;
    case CONST.NO_MORE_ROOM:
      return `${CONST.NO_MORE_ROOM.replace('{PLAYER}', nextPlayer)}`;
    case CONST.DRAW:
      return CONST.DRAW;
    case CONST.PLAYER_WINS:
      return `${CONST.PLAYER_WINS.replace(
        '{PLAYER}',
        getWinningPlayer(nextPlayer)
      )}`;

    default:
      return `Error! Unknown message: ${msg}`;
  }
};

const getWinningPlayer = (nextPlayer) => {
  return nextPlayer === CONST.PLAYER_1 ? CONST.PLAYER_2 : CONST.PLAYER_1;
};
