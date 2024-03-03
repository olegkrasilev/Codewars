// Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

// Battleship (also Battleships or Sea Battle) is a guessing game for two players. Each player has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells on his field. The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version. In this kata we will use Soviet/Russian version of the game.

// Before the game begins, players set up the board and place the ships accordingly to the following rules:

//     There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships.
//     Each ship must be a straight line, except for submarines, which are just single cell.
//     The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.

// This is all you need to solve this kata. If you're interested in more information about the game, visit this link.

function validateBattlefield(field) {
  const validModel = {
    battleship: 1,
    cruisers: 2,
    destroyers: 3,
    submarines: 4,
  };

  const candidateModel = {
    battleship: 0,
    cruisers: 0,
    destroyers: 0,
    submarines: 0,
  };

  let isInContact = false;
  for (let row = 0; row < field.length; row++) {
    for (let cell = 0; cell < field[row].length; cell++) {
      // battleship
      if (
        field[row][cell] === 1 &&
        field[row][cell + 1] === 1 &&
        field[row][cell + 2] === 1 &&
        field[row][cell + 3] === 1
      ) {
        if (
          (field[row - 1] && field[row - 1][cell - 1] === 1) ||
          (field[row - 1] && field[row - 1][cell] === 1) ||
          (field[row - 1] && field[row - 1][cell + 1] === 1) ||
          (field[row - 1] && field[row - 1][cell + 2] === 1) ||
          (field[row - 1] && field[row - 1][cell + 3] === 1) ||
          (field[row - 1] && field[row - 1][cell + 4] === 1) ||
          (field[row] && field[row][cell - 1] === 1) ||
          (field[row] && field[row][cell + 4] === 1) ||
          (field[row + 1] && field[row + 1][cell - 1] === 1) ||
          (field[row + 1] && field[row + 1][cell + 4] === 1)
        ) {
          isInContact = true;
        }
        candidateModel.battleship++;
        field[row][cell] = 0;
        field[row][cell + 1] = 0;
        field[row][cell + 2] = 0;
        field[row][cell + 3] = 0;
      }

      if (
        field[row][cell] === 1 &&
        field[row + 1][cell] === 1 &&
        field[row + 2][cell] === 1 &&
        field[row + 3][cell] === 1
      ) {
        if (
          (field[row - 1] && field[row - 1][cell - 1] === 1) ||
          (field[row - 1] && field[row - 1][cell] === 1) ||
          (field[row - 1] && field[row - 1][cell + 1] === 1) ||
          (field[row - 1] && field[row - 1][cell + 2] === 1) ||
          (field[row - 1] && field[row - 1][cell + 3] === 1) ||
          (field[row - 1] && field[row - 1][cell + 3] === 1) ||
          (field[row] && field[row][cell - 1] === 1) ||
          (field[row] && field[row][cell + 3] === 1) ||
          (field[row + 1] && field[row + 1][cell - 1] === 1) ||
          (field[row + 1] && field[row + 1][cell + 3] === 1)
        ) {
          isInContact = true;
        }
        candidateModel.battleship++;
        field[row][cell] = 0;
        field[row + 1][cell] = 0;
        field[row + 2][cell] = 0;
        field[row + 3][cell] = 0;
      }
      // cruiser
      if (
        field[row][cell] === 1 &&
        field[row][cell + 1] === 1 &&
        field[row][cell + 2] === 1
      ) {
        if (
          (field[row - 1] && field[row - 1][cell - 1] === 1) ||
          (field[row - 1] && field[row - 1][cell] === 1) ||
          (field[row - 1] && field[row - 1][cell + 1] === 1) ||
          (field[row - 1] && field[row - 1][cell + 2] === 1) ||
          (field[row - 1] && field[row - 1][cell + 3] === 1) ||
          (field[row - 1] && field[row - 1][cell + 3] === 1) ||
          (field[row] && field[row][cell - 1] === 1) ||
          (field[row] && field[row][cell + 3] === 1) ||
          (field[row + 1] && field[row + 1][cell - 1] === 1) ||
          (field[row + 1] && field[row + 1][cell + 3] === 1)
        ) {
          isInContact = true;
        }
        candidateModel.cruisers++;
        field[row][cell] = 0;
        field[row][cell + 1] = 0;
        field[row][cell + 2] = 0;
      }

      if (
        field[row][cell] === 1 &&
        field[row + 1][cell] === 1 &&
        field[row + 2][cell] === 1
      ) {
        if (
          (field[row - 1] && field[row - 1][cell - 1] === 1) ||
          (field[row - 1] && field[row - 1][cell] === 1) ||
          (field[row - 1] && field[row - 1][cell + 1] === 1) ||
          (field[row - 1] && field[row - 1][cell + 2] === 1) ||
          (field[row - 1] && field[row - 1][cell + 3] === 1) ||
          (field[row - 1] && field[row - 1][cell + 3] === 1) ||
          (field[row] && field[row][cell - 1] === 1) ||
          (field[row] && field[row][cell + 3] === 1) ||
          (field[row + 1] && field[row + 1][cell - 1] === 1) ||
          (field[row + 1] && field[row + 1][cell + 3] === 1)
        ) {
          isInContact = true;
        }
        candidateModel.cruisers++;
        field[row][cell] = 0;
        field[row + 1][cell] = 0;
        field[row + 2][cell] = 0;
      }
      // destroyers
      if (field[row][cell] === 1 && field[row][cell + 1] === 1) {
        if (
          (field[row - 1] && field[row - 1][cell - 1] === 1) ||
          (field[row - 1] && field[row - 1][cell] === 1) ||
          (field[row - 1] && field[row - 1][cell + 1] === 1) ||
          (field[row - 1] && field[row - 1][cell + 2] === 1) ||
          (field[row] && field[row][cell - 1] === 1) ||
          (field[row] && field[row][cell + 2] === 1) ||
          (field[row + 1] && field[row + 1][cell - 1] === 1) ||
          (field[row + 1] && field[row + 1][cell + 2] === 1)
        ) {
          isInContact = true;
        }
        candidateModel.destroyers++;
        field[row][cell] = 0;
        field[row][cell + 1] = 0;
      }

      if (field[row][cell] === 1 && field[row + 1][cell] === 1) {
        if (
          (field[row - 1] && field[row - 1][cell - 1] === 1) ||
          (field[row - 1] && field[row - 1][cell] === 1) ||
          (field[row - 1] && field[row - 1][cell + 1] === 1) ||
          (field[row - 1] && field[row - 1][cell + 2] === 1) ||
          (field[row] && field[row][cell - 1] === 1) ||
          (field[row] && field[row][cell + 2] === 1) ||
          (field[row + 1] && field[row + 1][cell - 1] === 1)
        ) {
          isInContact = true;
        }
        candidateModel.destroyers++;
        field[row][cell] = 0;
        field[row + 1][cell] = 0;
      }
      // submarine
      if (field[row][cell] === 1) {
        if (
          (field[row - 1] && field[row - 1][cell - 1] === 1) ||
          (field[row - 1] && field[row - 1][cell] === 1) ||
          (field[row - 1] && field[row - 1][cell + 1] === 1) ||
          (field[row - 1] && field[row - 1][cell + 2] === 1) ||
          (field[row] && field[row][cell - 1] === 1) ||
          (field[row] && field[row][cell + 4] === 1) ||
          (field[row + 1] && field[row + 1][cell - 1] === 1) ||
          (field[row + 1] && field[row + 1][cell + 1] === 1)
        ) {
          isInContact = true;
        }
        candidateModel.submarines++;
        field[row][cell] = 0;
      }
    }
  }

  return (
    JSON.stringify(validModel) === JSON.stringify(candidateModel) &&
    !isInContact
  );
}
