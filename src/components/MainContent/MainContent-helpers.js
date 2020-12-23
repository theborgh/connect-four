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
  if (
    checkForRowWin(board) ||
    checkForColumnWin(board) ||
    checkForDiagonalWin(board)
  ) {
    return true;
  }

  return false;
};

const checkForRowWin = (board) => {
  let consecutiveP1Count = 0,
    consecutiveP2Count = 0;
  let previousPiece = CONST.EMPTY;

  for (let i = 0; i < CONST.columnCount; i++) {
    for (let j = 0; j < CONST.rowCount; j++) {
      if (board[i][j] === CONST.PLAYER_1) {
        if (previousPiece === CONST.PLAYER_1) {
          consecutiveP1Count++;
          if (consecutiveP1Count === CONST.WINNING_LENGTH) return true;
        } else {
          consecutiveP1Count = 1;
          consecutiveP2Count = 0;
        }
      } else if (board[i][j] === CONST.PLAYER_2) {
        if (previousPiece === CONST.PLAYER_2) {
          consecutiveP2Count++;
          if (consecutiveP2Count === CONST.WINNING_LENGTH) return true;
        } else {
          consecutiveP1Count = 0;
          consecutiveP2Count = 1;
        }
      }

      previousPiece = board[i][j];
    }

    consecutiveP1Count = 0;
    consecutiveP2Count = 0;
    previousPiece = CONST.EMPTY;
  }

  return false;
};

const checkForColumnWin = (board) => {
  let consecutiveP1Count = 0,
    consecutiveP2Count = 0;
  let previousPiece = CONST.EMPTY;

  for (let i = 0; i < CONST.rowCount; i++) {
    for (let j = 0; j < CONST.columnCount; j++) {
      if (board[j][i] === CONST.PLAYER_1) {
        if (previousPiece === CONST.PLAYER_1) {
          consecutiveP1Count++;
          if (consecutiveP1Count === CONST.WINNING_LENGTH) return true;
        } else {
          consecutiveP1Count = 1;
          consecutiveP2Count = 0;
        }
      } else if (board[j][i] === CONST.PLAYER_2) {
        if (previousPiece === CONST.PLAYER_2) {
          consecutiveP2Count++;
          if (consecutiveP2Count === CONST.WINNING_LENGTH) return true;
        } else {
          consecutiveP1Count = 0;
          consecutiveP2Count = 1;
        }
      }

      previousPiece = board[j][i];
    }

    consecutiveP1Count = 0;
    consecutiveP2Count = 0;
    previousPiece = CONST.EMPTY;
  }

  return false;
};

const checkForDiagonalWin = (board) => {
  return false;
};
