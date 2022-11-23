/* eslint-disable max-len */
import {choice} from './index.js';
import {rotation} from './index.js';
export let gameboardFlag;
export let gameStart = false;
export const occupiedCells = [];
export let adjacentCells = [];
export let count = 0;
export const tempArray = [];
export const missedAttacks = [];
export const attemptedAttacks = [];
export const Gameboard = () => {
  const place = (ship, coordinates) => {
    if (!rotation) {
      if (occupiedCells.length === 0) {
        occupiedCells.push([coordinates[0][0], coordinates[0][1]]);
      }
      let shipArray = [];
      if (occupiedCells.length !== 1) {
        const isFounded = JSON.stringify(occupiedCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]]));
        const isFoundedAdjacent = JSON.stringify(adjacentCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]]));
        console.log(isFounded);
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
          if ((JSON.stringify(occupiedCells).indexOf(JSON.stringify([dx, dy])) === -1) && (JSON.stringify(shipArray).indexOf(JSON.stringify([dx, dy])) === -1) && (JSON.stringify(tempArray).indexOf(JSON.stringify([dx, dy]))) === -1 && (dx >= 0) && (dx <=9) && (dy >= 0) && (dy <= 9)) {
            tempArray.push([dx, dy]);
          }
        }
      }
      adjacentCells = [...new Set(tempArray)];
      console.log(adjacentCells);
      for (let i = 0; i < adjacentCells.length; i++) {
        const cellID = adjacentCells[i];
        const selectCells = document.getElementById(`playerCell${cellID[0]}${cellID[1]}`);
        selectCells.style.cssText = 'background-color: brown; border: 2px solid black;';
      }
      console.log(occupiedCells);
      for (let i = 0; i < shipArray.length; i++) {
        const cellID = shipArray[i];
        const selectCells = document.getElementById(`playerCell${cellID[0]}${cellID[1]}`);
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
          if ((JSON.stringify(occupiedCells).indexOf(JSON.stringify([dx, dy])) === -1) && (JSON.stringify(shipArray).indexOf(JSON.stringify([dx, dy])) === -1) && (JSON.stringify(tempArray).indexOf(JSON.stringify([dx, dy]))) === -1 && (dx >= 0) && (dx <=9) && (dy >= 0) && (dy <= 9)) {
            tempArray.push([dx, dy]);
          }
        }
      }
      console.log(tempArray);
      adjacentCells = [...new Set(tempArray)];
      console.log(adjacentCells);
      for (let i = 0; i < adjacentCells.length; i++) {
        const cellID = adjacentCells[i];
        const selectCells = document.getElementById(`playerCell${cellID[0]}${cellID[1]}`);
        selectCells.style.cssText = 'background-color: brown; border: 2px solid black;';
      }
      console.log(occupiedCells);
      for (let i = 0; i < shipArray.length; i++) {
        const cellID = shipArray[i];
        const selectCells = document.getElementById(`playerCell${cellID[0]}${cellID[1]}`);
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
    if (JSON.stringify(attemptedAttacks).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]])) === -1) {
      attemptedAttacks.push([coordinates[0][0], coordinates[0][1]]);
      const selectComputerCell = document.getElementById(`computerCell${coordinates[0][0]}${coordinates[0][1]}`);
      if (JSON.stringify(occupiedCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]])) !== -1 && JSON.stringify(missedAttacks).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]])) === -1) {
        selectComputerCell.style.backgroundColor = 'red';
        for (let i = 0; i < occupiedCells.length; i++) {
          console.log(JSON.stringify(occupiedCells[i]));
          console.log(JSON.stringify([coordinates[0][0], coordinates[0][1]]));
          if (JSON.stringify(occupiedCells[i]) === JSON.stringify([coordinates[0][0], coordinates[0][1]])) {
            occupiedCells.splice(i, 1);
            break;
          }
        }
      } else {
        missedAttacks.push([coordinates[0][0], coordinates[0][1]]);
        selectComputerCell.style.backgroundColor = 'yellow';
      }
    } else {
      alert('Cell already attacked');
    }
    if (occupiedCells.length === 0) {
      setTimeout(function() {
        alert('game over');
      }, 50);
      return;
    }
  };
  return {
    place, receiveAttack,
  };
};
