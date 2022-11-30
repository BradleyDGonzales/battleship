/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

import {getGridElementsPosition, getNodeIndex} from './coordinates.js';
import {Gameboard, gameStart, playerOneTurn} from './Gameboard.js';
import {Ship} from './Battleship';
import {Player} from './Player.js';
const playerGrid = document.getElementById('playerGrid');
const computerGrid = document.getElementById('computerGrid');
export const choice = ['Carrier', 'Battleship', 'Destroyer', 'Submarine', 'PatrolBoat'];
export let rotation = false;
export let currentTarget = '';
makePlayerGrid();
makeComputerGrid();
const test123 = Player().playerTwo.randomComputerPlacements();
function makePlayerGrid() {
  for (let i = 0; i < (10 * 10); i++) {
    const cell = document.createElement('div');
    cell.classList.add('playerGrid-cells');
    cell.setAttribute('id', `playerCell${i.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}`);
    cell.style.cssText = `border: 1px solid black;`;
    playerGrid.appendChild(cell);
  }
}
function makeComputerGrid() {
  for (let i = 0; i < (10 * 10); i++) {
    const cell = document.createElement('div');
    cell.classList.add('computerGrid-cells');
    cell.setAttribute('id', `computerCell${i.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}`);
    cell.style.cssText = `border: 1px solid black;`;
    computerGrid.appendChild(cell);
  }
}
window.addEventListener('DOMContentLoaded', (e) => {
  document.querySelectorAll('.playerGrid-cells').forEach((el) => {
    el.addEventListener('click', function(e) {
      if (!gameStart) {
        const position = getGridElementsPosition(getNodeIndex(e.target));
        const coordinates = [[position.row, position.column]];
        console.log(coordinates);
        if (choice[0] === 'PatrolBoat') {
          Gameboard().place(Ship().PatrolBoat, coordinates);
          return;
        }
        if (choice[0] === 'Carrier') {
          Gameboard().place(Ship().Carrier, coordinates);
          return;
        }
        if (choice[0] === 'Destroyer') {
          Gameboard().place(Ship().Destroyer, coordinates);
          return;
        }
        if (choice[0] === 'Submarine') {
          Gameboard().place(Ship().Submarine, coordinates);
          return;
        }
        if (choice[0] === 'Battleship') {
          Gameboard().place(Ship().Battleship, coordinates);
          return;
        }
      } else {
        alert('Silly, attack the enemy not yourself!');
      }
    });
  });
  document.querySelectorAll('.computerGrid-cells').forEach((el) => {
    el.addEventListener('click', function(e) {
      if (gameStart) {
        const position = getGridElementsPosition(getNodeIndex(e.target));
        const coordinates = [[position.row, position.column]];
        currentTarget = e.target.id;
        Gameboard().receiveAttack(coordinates);
      } else {
        alert('Finish setting up your pieces!');
      }
    });
  });
  document.getElementById('RotationButton').addEventListener('click', function(e) {
    const rotationText = document.getElementById('RotationText');
    if (rotationText.textContent.includes('horizontal')) {
      rotationText.textContent = 'Currently placing your pieces vertically (top to down)';
      rotation = true;
    } else if (rotationText.textContent.includes('vertical')) {
      rotationText.textContent = 'Currently placing your pieces horizontally (left to right)';
      rotation = false;
    }
  });
});
