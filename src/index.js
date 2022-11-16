/* eslint-disable require-jsdoc */

import {getGridElementsPosition, getNodeIndex} from './coordinates.js';
import {Gameboard} from './Gameboard.js';
import {Ship} from './Battleship';
const playerGrid = document.getElementById('playerGrid');
const computerGrid = document.getElementById('computerGrid');
const choice = ['PatrolBoat', 'Carrier', 'Destroyer', 'Submarine', 'Battleship'];
makePlayerGrid();
makeComputerGrid();
function makePlayerGrid() {
  for (let i = 0; i < (10 * 10); i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    cell.setAttribute('id', `player${i.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}`);
    cell.style.cssText = `border: 1px solid black;`;
    playerGrid.appendChild(cell);
  }
}
function makeComputerGrid() {
  for (let i = 0; i < (10 * 10); i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    cell.setAttribute('id', `computer${i.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}`);
    cell.style.cssText = `border: 1px solid black;`;
    computerGrid.appendChild(cell);
  }
}
window.addEventListener('DOMContentLoaded', (e) => {
  document.querySelectorAll('.grid-cell').forEach((el) => {
    el.addEventListener('click', function(e) {
      const position = getGridElementsPosition(getNodeIndex(e.target));
      const coordinates = [[position.row, position.column]];
      if (choice.length === 0) {
        alert('no more pieces');
      }
      if (choice[0] === 'PatrolBoat') {
        Gameboard().place(Ship().PatrolBoat, coordinates);
        choice.shift();
        return;
      }
      if (choice[0] === 'Carrier') {
        Gameboard().place(Ship().Carrier, coordinates);
        choice.shift();
        return;
      }
      if (choice[0] === 'Destroyer') {
        Gameboard().place(Ship().Destroyer, coordinates);
        choice.shift();
        return;
      }
      if (choice[0] === 'Submarine') {
        Gameboard().place(Ship().Submarine, coordinates);
        choice.shift();
        return;
      }
      if (choice[0] === 'Battleship') {
        Gameboard().place(Ship().Battleship, coordinates);
        choice.shift();
        return;
      }
    });
  });
});
