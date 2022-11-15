/* eslint-disable require-jsdoc */
const playerGrid = document.getElementById('playerGrid');
const computerGrid = document.getElementById('computerGrid');

makePlayerGrid();
makeComputerGrid();
function makePlayerGrid() {
  for (let i = 1; i < (10 * 10) + 1; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    cell.setAttribute('id', i);
    cell.style.cssText = `border: 1px solid black;`;
    playerGrid.appendChild(cell);
  }
}
function makeComputerGrid() {
  for (let i = 1; i < (10 * 10) + 1; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    cell.setAttribute('id', i);
    cell.style.cssText = `border: 1px solid black;`;
    computerGrid.appendChild(cell);
  }
}
