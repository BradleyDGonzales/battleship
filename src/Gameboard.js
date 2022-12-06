/* eslint-disable max-len */
import {Ship} from './Battleship.js';
import {choice, rotation, currentTarget, currentETarget} from './index.js';
import {Player, computerChoice, computerRotation, playerTwoTurn, successfulHit} from './Player.js';
export let playerOneTurn = true;
export let gameboardFlag;
export let gameStart = false;
export const occupiedCells = [];
export const computerOccupiedCells = [];
export let adjacentCells = [];
export const carrierAdjacentCells = [];
export const battleshipAdjacentCells = [];
export const submarineAdjacentCells = [];
export const patrolboatAdjacentCells = [];
export const destroyerAdjacentCells = [];
export const computerCarrierAdjacentCells = [];
export const computerBattleshipAdjacentCells = [];
export const computerSubmarineAdjacentCells = [];
export const computerPatrolboatAdjacentCells = [];
export const computerDestroyerAdjacentCells = [];
export let computerUniqueCarrierAdjacentCells = [];
export let computerUniqueBattleshipAdjacentCells = [];
export let computerUniqueSubmarineAdjacentCells = [];
export let computerUniquePatrolboatAdjacentCells = [];
export let computerUniqueDestroyerAdjacentCells = [];
export let computerAdjacentCells = [];
export let count = 0;
export const tempArray = [];
export const computerTempArray = [];
export const missedAttacks = [];
export const computerMissedAttacks = [];
export const attemptedAttacks = [];
export const computerAttemptedAttacks = [];
export let carrierHits = 0;
export let battleShipHits = 0;
export let destroyerHits = 0;
export let submarineHits = 0;
export let patrolBoatHits = 0;
export let currentShipName = '';
export let computerPiecePlaced = false;
export const Gameboard = () => {
  const computerPlace = (ship, coordinates) => {
    currentShipName = ship.name;
    if (computerRotation === 1) {
      if (computerOccupiedCells.length === 0) {
        computerOccupiedCells.push([coordinates[0][0], coordinates[0][1]]);
      }
      let shipArray = [];
      if (computerOccupiedCells.length !== 1) {
        const isFounded = JSON.stringify(computerOccupiedCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]]));
        const isFoundedAdjacent = JSON.stringify(computerAdjacentCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]]));
        if (isFounded === -1 && isFoundedAdjacent === -1) {
          shipArray.push([coordinates[0][0], coordinates[0][1]]);
          if (JSON.stringify(computerOccupiedCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]])) === -1 && JSON.stringify(computerAdjacentCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]])) === -1) {
            computerOccupiedCells.push([coordinates[0][0], coordinates[0][1]]);
          } else {
            computerPiecePlaced = false;
            gameboardFlag = true;
            return;
          }
        } else {
          computerPiecePlaced = false;
          gameboardFlag = true;
          return;
        }
      } else {
        shipArray.push([coordinates[0][0], coordinates[0][1]]);
      }
      for (let i = 1; i < ship.size; i++) {
        shipArray.push([coordinates[0][0], coordinates[0][1] + i]);
        count++;
        if (!shipArray.some((el) => el[1] > 9 || el[1] < 0)) {
          if (JSON.stringify(computerOccupiedCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1] + i])) === -1 && JSON.stringify(computerAdjacentCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1] + i])) === -1) {
            computerOccupiedCells.push([coordinates[0][0], coordinates[0][1] + i]);
          } else {
            shipArray = [];
            for (let i = 0; i < count; i++) {
              computerOccupiedCells.pop();
            }
            count = 0;
            computerPiecePlaced = false;
            return;
          }
        } else {
          if (count === 0) {
            computerOccupiedCells.pop();
          } else {
            for (let i = 0; i < count; i++) {
              computerOccupiedCells.pop();
            }
          }
          count = 0;
          shipArray = [];
          computerPiecePlaced = false;
          return;
        }
      }
      const ADJACENT_DIRECTIONS = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
      const initArrayLength = shipArray.length;
      for (let j = 0; j < initArrayLength; j++) {
        for (let k = 0; k < ADJACENT_DIRECTIONS.length; k++) {
          const dx = (shipArray[j][0] + ADJACENT_DIRECTIONS[k][0]);
          const dy = (shipArray[j][1] + ADJACENT_DIRECTIONS[k][1]);
          if ((JSON.stringify(computerOccupiedCells).indexOf(JSON.stringify([dx, dy])) === -1) && (JSON.stringify(shipArray).indexOf(JSON.stringify([dx, dy])) === -1) && (dx >= 0) && (dx <=9) && (dy >= 0) && (dy <= 9)) {
            if (currentShipName === 'Destroyer') {
              computerDestroyerAdjacentCells.push([dx, dy]);
            }
            if (currentShipName === 'Submarine') {
              computerSubmarineAdjacentCells.push([dx, dy]);
            }
            if (currentShipName === 'PatrolBoat') {
              computerPatrolboatAdjacentCells.push([dx, dy]);
            }
            if (currentShipName === 'Carrier') {
              computerCarrierAdjacentCells.push([dx, dy]);
            }
            if (currentShipName === 'Battleship') {
              computerBattleshipAdjacentCells.push([dx, dy]);
            }
            computerTempArray.push([dx, dy]);
          }
        }
      }
      computerAdjacentCells = [...new Set(computerTempArray)];
      computerUniqueBattleshipAdjacentCells = [...new Set(computerBattleshipAdjacentCells)];
      computerUniqueDestroyerAdjacentCells = [...new Set(computerDestroyerAdjacentCells)];
      computerUniqueSubmarineAdjacentCells = [...new Set(computerSubmarineAdjacentCells)];
      computerUniquePatrolboatAdjacentCells = [...new Set(computerPatrolboatAdjacentCells)];
      computerUniqueCarrierAdjacentCells = [...new Set(computerCarrierAdjacentCells)];
      for (let i = 0; i < shipArray.length; i++) {
        const cellID = shipArray[i];
        const selectCells = document.getElementById(`computerCell${cellID[0]}${cellID[1]}`);
        selectCells.id = `computerCell${cellID[0]}${cellID[1]}${currentShipName}`;
      }
      computerPiecePlaced = true;
      count = 0;
      const selectText = document.getElementById('BattleshipText');
      if (computerChoice.length !== 0) {
        computerChoice.shift();
        if (computerChoice.length === 0) {
          selectText.innerText = 'Begin Game';
        } else {
          selectText.innerText = `Place your ${computerChoice[0]}`;
        }
      }
    } else {
      if (computerOccupiedCells.length === 0) {
        computerOccupiedCells.push([coordinates[0][0], coordinates[0][1]]);
      }
      let shipArray = [];
      if (computerOccupiedCells.length !== 1) {
        const isFounded = JSON.stringify(computerOccupiedCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]]));
        const isFoundedAdjacent = JSON.stringify(computerAdjacentCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]]));
        if (isFounded === -1 && isFoundedAdjacent === -1) {
          shipArray.push([coordinates[0][0], coordinates[0][1]]);
          if (JSON.stringify(computerOccupiedCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]])) === -1 && JSON.stringify(computerAdjacentCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]])) === -1) {
            computerOccupiedCells.push([coordinates[0][0], coordinates[0][1]]);
          } else {
            computerPiecePlaced = false;
            gameboardFlag = true;
            return;
          }
        } else {
          computerPiecePlaced = false;
          gameboardFlag = true;
          return;
        }
      } else {
        shipArray.push([coordinates[0][0], coordinates[0][1]]);
      }
      for (let i = 1; i < ship.size; i++) {
        shipArray.push([coordinates[0][0] + i, coordinates[0][1]]);
        count++;
        if (!shipArray.some((el) => el[0] > 9 || el[0] < 0)) {
          if (JSON.stringify(computerOccupiedCells).indexOf(JSON.stringify([coordinates[0][0] + i, coordinates[0][1]])) === -1 && JSON.stringify(computerAdjacentCells).indexOf(JSON.stringify([coordinates[0][0] + i, coordinates[0][1]])) === -1) {
            computerOccupiedCells.push([coordinates[0][0] + i, coordinates[0][1]]);
          } else {
            shipArray = [];
            for (let i = 0; i < count; i++) {
              computerOccupiedCells.pop();
            }
            count = 0;
            computerPiecePlaced = false;
            return;
          }
        } else {
          if (count === 0) {
            computerOccupiedCells.pop();
          } else {
            for (let i = 0; i < count; i++) {
              computerOccupiedCells.pop();
            }
          }
          count = 0;
          shipArray = [];
          computerPiecePlaced = false;
          return;
        }
      }
      const ADJACENT_DIRECTIONS = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
      const initArrayLength = shipArray.length;
      for (let j = 0; j < initArrayLength; j++) {
        for (let k = 0; k < ADJACENT_DIRECTIONS.length; k++) {
          const dx = (shipArray[j][0] + ADJACENT_DIRECTIONS[k][0]);
          const dy = (shipArray[j][1] + ADJACENT_DIRECTIONS[k][1]);
          if ((JSON.stringify(computerOccupiedCells).indexOf(JSON.stringify([dx, dy])) === -1) && (JSON.stringify(shipArray).indexOf(JSON.stringify([dx, dy])) === -1) && (dx >= 0) && (dx <=9) && (dy >= 0) && (dy <= 9)) {
            if (currentShipName === 'Destroyer') {
              computerDestroyerAdjacentCells.push([dx, dy]);
            }
            if (currentShipName === 'Submarine') {
              computerSubmarineAdjacentCells.push([dx, dy]);
            }
            if (currentShipName === 'PatrolBoat') {
              computerPatrolboatAdjacentCells.push([dx, dy]);
            }
            if (currentShipName === 'Carrier') {
              computerCarrierAdjacentCells.push([dx, dy]);
            }
            if (currentShipName === 'Battleship') {
              computerBattleshipAdjacentCells.push([dx, dy]);
            }
            computerTempArray.push([dx, dy]);
          }
        }
      }
      computerAdjacentCells = [...new Set(computerTempArray)];
      computerUniqueBattleshipAdjacentCells = [...new Set(computerBattleshipAdjacentCells)];
      computerUniqueDestroyerAdjacentCells = [...new Set(computerDestroyerAdjacentCells)];
      computerUniqueSubmarineAdjacentCells = [...new Set(computerSubmarineAdjacentCells)];
      computerUniquePatrolboatAdjacentCells = [...new Set(computerPatrolboatAdjacentCells)];
      computerUniqueCarrierAdjacentCells = [...new Set(computerCarrierAdjacentCells)];
      computerAdjacentCells = [...new Set(computerTempArray)];
      for (let i = 0; i < shipArray.length; i++) {
        const cellID = shipArray[i];
        const selectCells = document.getElementById(`computerCell${cellID[0]}${cellID[1]}`);
        selectCells.id = `computerCell${cellID[0]}${cellID[1]}${currentShipName}`;
      }
      count = 0;
      const selectText = document.getElementById('BattleshipText');
      if (computerChoice.length !== 0) {
        computerChoice.shift();
        if (computerChoice.length === 0) {
          selectText.innerText = 'Begin Game';
        } else {
          selectText.innerText = `Place your ${computerChoice[0]}`;
        }
      }
    }
  };


  const place = (ship, coordinates) => {
    currentShipName = ship.name;
    if (!rotation) {
      if (occupiedCells.length === 0) {
        occupiedCells.push([coordinates[0][0], coordinates[0][1]]);
      }
      let shipArray = [];
      if (occupiedCells.length !== 1) {
        const isFounded = JSON.stringify(occupiedCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]]));
        const isFoundedAdjacent = JSON.stringify(adjacentCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]]));
        if (isFounded === -1 && isFoundedAdjacent === -1) {
          shipArray.push([coordinates[0][0], coordinates[0][1]]);
          if (JSON.stringify(occupiedCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]])) === -1 && JSON.stringify(adjacentCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]])) === -1) {
            occupiedCells.push([coordinates[0][0], coordinates[0][1]]);
          } else {
            alert('Cell is used or trying to place on adjacent cell');
            gameboardFlag = true;
            return;
          }
        } else {
          alert('Cell is used');
          gameboardFlag = true;
          return;
        }
      } else {
        shipArray.push([coordinates[0][0], coordinates[0][1]]);
      }
      for (let i = 1; i < ship.size; i++) {
        shipArray.push([coordinates[0][0], coordinates[0][1] + i]);
        count++;
        if (!shipArray.some((el) => el[1] > 9 || el[1] < 0)) {
          if (JSON.stringify(occupiedCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1] + i])) === -1 && JSON.stringify(adjacentCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1] + i])) === -1) {
            occupiedCells.push([coordinates[0][0], coordinates[0][1] + i]);
          } else {
            shipArray = [];
            for (let i = 0; i < count; i++) {
              occupiedCells.pop();
            }
            count = 0;
            alert('Out of bounds (adjacent elements)');
            return;
          }
        } else {
          if (count === 0) {
            occupiedCells.pop();
          } else {
            for (let i = 0; i < count; i++) {
              occupiedCells.pop();
            }
          }
          count = 0;
          shipArray = [];
          alert('Out of bounds');
          return;
        }
      }
      const ADJACENT_DIRECTIONS = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
      const initArrayLength = shipArray.length;
      for (let j = 0; j < initArrayLength; j++) {
        for (let k = 0; k < ADJACENT_DIRECTIONS.length; k++) {
          const dx = (shipArray[j][0] + ADJACENT_DIRECTIONS[k][0]);
          const dy = (shipArray[j][1] + ADJACENT_DIRECTIONS[k][1]);
          if ((JSON.stringify(occupiedCells).indexOf(JSON.stringify([dx, dy])) === -1) && (JSON.stringify(shipArray).indexOf(JSON.stringify([dx, dy])) === -1) && (dx >= 0) && (dx <=9) && (dy >= 0) && (dy <= 9)) {
            if (currentShipName === 'Destroyer') {
              destroyerAdjacentCells.push([dx, dy]);
            }
            if (currentShipName === 'Submarine') {
              submarineAdjacentCells.push([dx, dy]);
            }
            if (currentShipName === 'PatrolBoat') {
              patrolboatAdjacentCells.push([dx, dy]);
            }
            if (currentShipName === 'Carrier') {
              carrierAdjacentCells.push([dx, dy]);
            }
            if (currentShipName === 'Battleship') {
              battleshipAdjacentCells.push([dx, dy]);
            }
            tempArray.push([dx, dy]);
          }
        }
      }
      adjacentCells = [...new Set(tempArray)];

      for (let i = 0; i < shipArray.length; i++) {
        const cellID = shipArray[i];
        const selectCells = document.getElementById(`playerCell${cellID[0]}${cellID[1]}`);
        selectCells.id = `playerCell${cellID[0]}${cellID[1]}${currentShipName}`;
        selectCells.style.cssText = 'background-color: grey; border: 2px solid black;';
      }
      count = 0;
      const selectText = document.getElementById('BattleshipText');
      if (choice.length !== 0) {
        choice.shift();
        if (choice.length === 0) {
          selectText.innerText = 'Begin Game';
          gameStart = true;
          playerOneTurn = true;
        } else {
          selectText.innerText = `Place your ${choice[0]}`;
        }
      }
    } else {
      if (occupiedCells.length === 0) {
        occupiedCells.push([coordinates[0][0], coordinates[0][1]]);
      }
      let shipArray = [];
      if (occupiedCells.length !== 1) {
        const isFounded = JSON.stringify(occupiedCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]]));
        const isFoundedAdjacent = JSON.stringify(adjacentCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]]));
        if (isFounded === -1 && isFoundedAdjacent === -1) {
          shipArray.push([coordinates[0][0], coordinates[0][1]]);
          if (JSON.stringify(occupiedCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]])) === -1 && JSON.stringify(adjacentCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]])) === -1) {
            occupiedCells.push([coordinates[0][0], coordinates[0][1]]);
          } else {
            alert('Cell is used12321');
            gameboardFlag = true;
            return;
          }
        } else {
          alert('Cell is used');
          gameboardFlag = true;
          return;
        }
      } else {
        shipArray.push([coordinates[0][0], coordinates[0][1]]);
      }
      for (let i = 1; i < ship.size; i++) {
        shipArray.push([coordinates[0][0] + i, coordinates[0][1]]);
        count++;
        if (!shipArray.some((el) => el[0] > 9 || el[0] < 0)) {
          if (JSON.stringify(occupiedCells).indexOf(JSON.stringify([coordinates[0][0] + i, coordinates[0][1]])) === -1 && JSON.stringify(adjacentCells).indexOf(JSON.stringify([coordinates[0][0] + i, coordinates[0][1]])) === -1) {
            occupiedCells.push([coordinates[0][0] + i, coordinates[0][1]]);
          } else {
            shipArray = [];
            for (let i = 0; i < count; i++) {
              occupiedCells.pop();
            }
            count = 0;
            alert('Out of bounds (adjacent elements)');
            return;
          }
        } else {
          if (count === 0) {
            occupiedCells.pop();
          } else {
            for (let i = 0; i < count; i++) {
              occupiedCells.pop();
            }
          }
          count = 0;
          shipArray = [];
          alert('Out of bounds');
          return;
        }
      }
      const ADJACENT_DIRECTIONS = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
      const initArrayLength = shipArray.length;
      for (let j = 0; j < initArrayLength; j++) {
        for (let k = 0; k < ADJACENT_DIRECTIONS.length; k++) {
          const dx = (shipArray[j][0] + ADJACENT_DIRECTIONS[k][0]);
          const dy = (shipArray[j][1] + ADJACENT_DIRECTIONS[k][1]);
          if ((JSON.stringify(occupiedCells).indexOf(JSON.stringify([dx, dy])) === -1) && (JSON.stringify(shipArray).indexOf(JSON.stringify([dx, dy])) === -1) && (dx >= 0) && (dx <=9) && (dy >= 0) && (dy <= 9)) {
            if (currentShipName === 'Destroyer') {
              destroyerAdjacentCells.push([dx, dy]);
            }
            if (currentShipName === 'Submarine') {
              submarineAdjacentCells.push([dx, dy]);
            }
            if (currentShipName === 'PatrolBoat') {
              patrolboatAdjacentCells.push([dx, dy]);
            }
            if (currentShipName === 'Carrier') {
              carrierAdjacentCells.push([dx, dy]);
            }
            if (currentShipName === 'Battleship') {
              battleshipAdjacentCells.push([dx, dy]);
            }
            tempArray.push([dx, dy]);
          }
        }
      }
      adjacentCells = [...new Set(tempArray)];
      for (let i = 0; i < shipArray.length; i++) {
        const cellID = shipArray[i];
        const selectCells = document.getElementById(`playerCell${cellID[0]}${cellID[1]}`);
        selectCells.id = `playerCell${cellID[0]}${cellID[1]}${currentShipName}`;
        selectCells.style.cssText = 'background-color: grey; border: 2px solid black;';
      }
      count = 0;
      const selectText = document.getElementById('BattleshipText');
      if (choice.length !== 0) {
        choice.shift();
        if (choice.length === 0) {
          selectText.innerText = 'Begin Game';
          gameStart = true;
        } else {
          selectText.innerText = `Place your ${choice[0]}`;
        }
      }
    }
  };


  const receiveAttack = (coordinates) => {
    if (playerOneTurn) {
      if (JSON.stringify(attemptedAttacks).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]])) === -1 && currentETarget.textContent !== '●') {
        attemptedAttacks.push([coordinates[0][0], coordinates[0][1]]);
        let selectComputerCell = document.getElementById(`computerCell${[coordinates[0][0]]}${[coordinates[0][1]]}`);
        if (selectComputerCell === null) {
          selectComputerCell = document.getElementById(`${currentTarget}`);
        }
        if (JSON.stringify(computerOccupiedCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]])) !== -1) {
          const shipName = currentTarget.slice(14, currentTarget.length);
          switch (shipName) {
            case 'Carrier':
              carrierHits++;
              Ship().hit(Ship().Carrier);
              break;
            case 'Battleship':
              battleShipHits++;
              Ship().hit(Ship().Battleship);
              break;
            case 'Destroyer':
              destroyerHits++;
              Ship().hit(Ship().Destroyer);
              break;
            case 'Submarine':
              submarineHits++;
              Ship().hit(Ship().Submarine);
              break;
            case 'PatrolBoat':
              patrolBoatHits++;
              Ship().hit(Ship().PatrolBoat);
              break;
          }
          selectComputerCell.style.backgroundColor = 'red';
          for (let i = 0; i < computerOccupiedCells.length; i++) {
            if (JSON.stringify(computerOccupiedCells[i]) === JSON.stringify([coordinates[0][0], coordinates[0][1]])) {
              computerOccupiedCells.splice(i, 1);
              break;
            }
          }
        } else {
          missedAttacks.push([coordinates[0][0], coordinates[0][1]]);
          console.log('HERE');
          selectComputerCell.innerText = '●';
          selectComputerCell.textContent = '●';
          playerOneTurn = false;
          setTimeout(function() {
            Player().playerTwo.randomComputerHit();
            playerOneTurn = true;
          }, 1000);
        }
      } else {
        alert('Cell already attacked');
      }
      if (computerOccupiedCells.length === 0) {
        setTimeout(function() {
          alert('game over');
        }, 50);
        const selectPlayerGrid = document.getElementById('playerGrid');
        const selectComputerGrid = document.getElementById('computerGrid');
        selectPlayerGrid.style.pointerEvents = 'none';
        selectComputerGrid.style.pointerEvents = 'none';
        return;
      }
    }
  };
  return {
    computerPlace, place, receiveAttack,
  };
};
