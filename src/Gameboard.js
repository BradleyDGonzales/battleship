/* eslint-disable max-len */
import {choice} from './index.js';
export let gameboardFlag;
export let gameStart = false;
export const occupiedCells = [];
export const Gameboard = () => {
  const place = (ship, coordinates) => {
    if (occupiedCells.length === 0) {
      occupiedCells.push([coordinates[0][0], coordinates[0][1]]);
    }
    let shipArray = [];
    if (occupiedCells.length != 1) {
      const isFounded = JSON.stringify(occupiedCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]]));
      console.log(isFounded);
      if (isFounded === -1) {
        shipArray.push([coordinates[0][0], coordinates[0][1]]);
        occupiedCells.push([coordinates[0][0], coordinates[0][1]]);
      } else {
        alert('Cell is used');
        gameboardFlag = true;
        return;
      }
    } else {
      shipArray.push([coordinates[0][0], coordinates[0][1]]);
    }
    // const selectCell = document.querySelectorAll('.grid-cell');
    for (let i = 1; i < ship.size; i++) {
      if (!shipArray.some((el) => el[1] >= 9 || el[1] < 0)) {
        shipArray.push([coordinates[0][0], coordinates[0][1] + i]);
        occupiedCells.push([coordinates[0][0], coordinates[0][1] + i]);
      } else {
        shipArray = [];
        alert('Out of bounds');
        return;
      }
    }
    // const flag = shipArray.some((el) => el[1] >= 9 || el[1] < 0);
    console.log(`occupiedCells = ${occupiedCells}`);
    // gameboardFlag = flag;
    // if (!flag) {
    for (let i = 0; i < shipArray.length; i++) {
      const cellID = shipArray[i];
      const selectCells = document.getElementById(`playerCell${cellID[0]}${cellID[1]}`);
      selectCells.style.cssText = 'background-color: grey;';
    }
    const selectText = document.getElementById('test');
    if (choice.length !== 0) {
      choice.shift();
      if (choice.length === 0) {
        selectText.innerText = 'Begin Game';
        gameStart = true;
      } else {
        selectText.innerText = `Place your ${choice[0]}`;
      }
    }
    // } else {
    //   shipArray = [];
    //   alert('oob (out of bounds)');
    // }
  };
  const receiveAttack = (coordinates) => {
    const selectComputerCell = document.getElementById(`computerCell${coordinates[0][0]}${coordinates[0][1]}`);
    selectComputerCell.style.backgroundColor = 'red';
  };
  return {
    place, receiveAttack,
  };
};
