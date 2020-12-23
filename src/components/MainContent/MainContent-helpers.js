import CONST from '../../constants';

export const addPieceToColumn = (column, player) => {
  const newColumn = [...column];
  let inserted = false;
  let i = newColumn.length - 1;

  while (!inserted && i >= 0) {
    if (newColumn[i] === CONST.EMPTY) {
      newColumn[i] =
        player === CONST.PLAYER_1 ? CONST.PLAYER_1 : CONST.PLAYER_2;
      inserted = true;
    }

    i--;
  }

  return { newColumn, inserted };
};
