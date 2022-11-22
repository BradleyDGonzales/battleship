/* eslint-disable max-len */
import {choice} from './index.js';
import {rotation} from './index.js';
export let gameboardFlag;
export let gameStart = false;
export const occupiedCells = [];
export const Gameboard = () => {
  const place = (ship, coordinates) => {
    if (!rotation) {
      if (occupiedCells.length === 0) {
        occupiedCells.push([coordinates[0][0], coordinates[0][1]]);
      }
      let shipArray = [];
      if (occupiedCells.length != 1) {
        const isFounded = JSON.stringify(occupiedCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]]));
        console.log(isFounded);
        if (isFounded === -1) {
          shipArray.push([coordinates[0][0], coordinates[0][1]]);
          if (JSON.stringify(occupiedCells).indexOf([coordinates[0][0], coordinates[0][1]]) === -1) {
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
        let count = 0;
        if (!shipArray.some((el) => el[1] >= 9 || el[1] < 0)) {
          shipArray.push([coordinates[0][0], coordinates[0][1] + i]);
          if (JSON.stringify(occupiedCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1] + i])) === -1) {
            count++;
            occupiedCells.push([coordinates[0][0], coordinates[0][1] + i]);
          } else {
            count++;
            shipArray = [];
            for (let i = 0; i <= count; i++) {
              occupiedCells.pop();
            }
            alert('Out of bounds (adjacent elements)');
            return;
          }
        } else {
          shipArray = [];
          alert('Out of bounds');
          return;
        }
      }
      const tempArray = [];
      const ADJACENT_DIRECTIONS = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
      const initArrayLength = shipArray.length;
      for (let j = 0; j < initArrayLength; j++) {
        for (let k = 0; k < ADJACENT_DIRECTIONS.length; k++) {
          const dx = (shipArray[j][0] + ADJACENT_DIRECTIONS[k][0]);
          const dy = (shipArray[j][1] + ADJACENT_DIRECTIONS[k][1]);
          if ((JSON.stringify(occupiedCells).indexOf(JSON.stringify([dx, dy])) === -1) && (JSON.stringify(shipArray).indexOf(JSON.stringify([dx, dy])) === -1) && (JSON.stringify(tempArray).indexOf(JSON.stringify([dx, dy]))) === -1 && (dx >= 0) && (dx <=9) && (dy >= 0) && (dy <= 9)) {
            tempArray.push([dx, dy]);
            occupiedCells.push([dx, dy]);
          }
        }
      }
      const adjacentCells = [...new Set(tempArray)];
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
      if (occupiedCells.length != 1) {
        const isFounded = JSON.stringify(occupiedCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]]));
        console.log(isFounded);
        if (isFounded === -1) {
          shipArray.push([coordinates[0][0], coordinates[0][1]]);
          if (JSON.stringify(occupiedCells).indexOf([coordinates[0][0], coordinates[0][1]]) === -1) {
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
        let count = 0;
        if (!shipArray.some((el) => el[0] >= 9 || el[0] < 0)) {
          shipArray.push([coordinates[0][0] + i, coordinates[0][1]]);
          if (JSON.stringify(occupiedCells).indexOf(JSON.stringify([coordinates[0][0] + i, coordinates[0][1]])) === -1) {
            count++;
            occupiedCells.push([coordinates[0][0] + i, coordinates[0][1]]);
          } else {
            count++;
            shipArray = [];
            for (let i = 0; i <= count; i++) {
              occupiedCells.pop();
            }
            alert('Out of bounds (adjacent elements)');
            return;
          }
        } else {
          shipArray = [];
          alert('Out of bounds');
          return;
        }
      }
      const tempArray = [];
      const ADJACENT_DIRECTIONS = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
      const initArrayLength = shipArray.length;
      for (let j = 0; j < initArrayLength; j++) {
        for (let k = 0; k < ADJACENT_DIRECTIONS.length; k++) {
          const dx = (shipArray[j][0] + ADJACENT_DIRECTIONS[k][0]);
          const dy = (shipArray[j][1] + ADJACENT_DIRECTIONS[k][1]);
          if ((JSON.stringify(occupiedCells).indexOf(JSON.stringify([dx, dy])) === -1) && (JSON.stringify(shipArray).indexOf(JSON.stringify([dx, dy])) === -1) && (JSON.stringify(tempArray).indexOf(JSON.stringify([dx, dy]))) === -1 && (dx >= 0) && (dx <=9) && (dy >= 0) && (dy <= 9)) {
            tempArray.push([dx, dy]);
            occupiedCells.push([dx, dy]);
          }
        }
      }
      const adjacentCells = [...new Set(tempArray)];
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
      // const tempArray = [];
      // const ADJACENT_DIRECTIONS = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
      // const initArrayLength = shipArray.length;
      // for (let j = 0; j < initArrayLength; j++) {
      //   for (let k = 0; k < ADJACENT_DIRECTIONS.length; k++) {
      //     const dx = (shipArray[j][0] + ADJACENT_DIRECTIONS[k][0]);
      //     const dy = (shipArray[j][1] + ADJACENT_DIRECTIONS[k][1]);
      //     if ((JSON.stringify(occupiedCells).indexOf(JSON.stringify([dx, dy])) === -1) && (JSON.stringify(shipArray).indexOf(JSON.stringify([dx, dy])) === -1) && (JSON.stringify(tempArray).indexOf(JSON.stringify([dx, dy]))) === -1 && (dx >= 0) && (dx <=9) && (dy >= 0) && (dy <= 9)) {
      //       tempArray.push([dx, dy]);
      //       occupiedCells.push([dx, dy]);
      //     }
      //   }
      // }
    }
  };
  const receiveAttack = (coordinates) => {
    const selectComputerCell = document.getElementById(`computerCell${coordinates[0][0]}${coordinates[0][1]}`);
    selectComputerCell.style.backgroundColor = 'red';
  };
  return {
    place, receiveAttack,
  };
};
