function isSolved(board) {
  const x = 1;
  const o = 2;
  let isXWon = false;
  let isOWon = false;
  let isUnfinished = false;

  function checkRow(row) {
    if (isXWon || isOWon) {
      return;
    }

    if (row.every((currentValue) => currentValue === x)) {
      isXWon = true;
    }

    if (row.every((currentValue) => currentValue === o)) {
      isOWon = true;
    }
  }

  function checkHorizontalRow(board) {
    for (const row of board) {
      checkRow(row);
    }
  }

  function checkVerticalRow(board) {
    const [row1, row2, row3] = board;
    const firstColumn = [row1[0], row2[0], row3[0]];
    const secondColumn = [row1[1], row2[1], row3[1]];
    const thirdColumn = [row1[2], row2[2], row3[2]];

    checkRow(firstColumn);
    checkRow(secondColumn);
    checkRow(thirdColumn);
  }

  function checkCrossRow(board) {
    const [row1, row2, row3] = board;
    const upperLeftToBottomRightColumn = [row1[0], row2[1], row3[2]];
    const upperRightToBottomLeftColumn = [row1[2], row2[1], row3[0]];

    checkRow(upperLeftToBottomRightColumn);
    checkRow(upperRightToBottomLeftColumn);
  }

  function checkIsFinished(board) {
    const flatArr = [...board[0], ...board[1], ...board[2]];
    isUnfinished = flatArr.join("").includes("0");
  }

  checkHorizontalRow(board);
  checkVerticalRow(board);
  checkCrossRow(board);
  checkIsFinished(board);

  if (isXWon) {
    return 1;
  }

  if (isOWon) {
    return 2;
  }

  if (isUnfinished) {
    return -1;
  }

  return 0;
}
