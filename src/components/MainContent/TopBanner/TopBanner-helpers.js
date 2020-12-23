import CONST from '../../../constants';

export const getMessage = (msg, nextPlayer) => {
  switch (msg) {
    case CONST.NOW_TO_MOVE:
      return `${CONST.NOW_TO_MOVE}${nextPlayer}`;
    case CONST.NO_MORE_ROOM:
      return `${CONST.NO_MORE_ROOM.replace('{PLAYER}', nextPlayer)}`;

    default:
      return `Error! Unknown message: ${msg}`;
  }
};
