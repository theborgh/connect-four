import CONST from '../../constants';

export const addPieceToColumn = (isGameFinished, column, player) => {
  let newColumn = [];
  let inserted = false;

  if (!isGameFinished) {
    newColumn = [...column];
    let i = newColumn.length - 1;

    while (!inserted && i >= 0) {
      if (newColumn[i] === CONST.EMPTY) {
        newColumn[i] =
          player === CONST.PLAYER_1 ? CONST.PLAYER_1 : CONST.PLAYER_2;
        inserted = true;
      }

      i--;
    }
  }

  return { newColumn, inserted };
};

export const checkEndgameConditions = (board) => {
  let gameState = CONST.NOW_TO_MOVE;

  if (checkForWin(board)) {
    gameState = CONST.PLAYER_WINS;
  } else if (checkDrawCondition(board)) {
    gameState = CONST.DRAW;
  }

  return gameState;
};

// The draw condition is checked after the win condition, so we only need to check whether the board is full
const checkDrawCondition = (board) => {
  return !board.some((column) => column.some((el) => el === CONST.EMPTY));
};

const checkForWin = (board) => {
  return false;
};
