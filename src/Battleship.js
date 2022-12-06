import {carrierHits, battleShipHits, destroyerHits, patrolBoatHits, submarineHits, playerOneTurn, submarineAdjacentCells, patrolboatAdjacentCells, destroyerAdjacentCells, battleshipAdjacentCells, computerCarrierAdjacentCells, computerBattleshipAdjacentCells, computerDestroyerAdjacentCells, computerPatrolboatAdjacentCells, computerSubmarineAdjacentCells, carrierAdjacentCells, computerUniqueBattleshipAdjacentCells, computerUniqueCarrierAdjacentCells, computerUniqueDestroyerAdjacentCells, computerUniquePatrolboatAdjacentCells, computerUniqueSubmarineAdjacentCells} from './Gameboard.js';
import {playerBattleShipHits, playerCarrierHits, playerDestroyerHits, playerPatrolBoatHits, playerSubmarineHits, playerTwoTurn} from './Player.js';
export const Ship = () => {
  const Carrier = {
    name: 'Carrier',
    size: 5,
    playerHits: 0,
    computerHits: 0,
    status: false,
  };
  const Battleship = {
    name: 'Battleship',
    size: 4,
    playerHits: 0,
    computerHits: 0,
    status: false,
  };
  const Destroyer = {
    name: 'Destroyer',
    size: 3,
    playerHits: 0,
    computerHits: 0,
    status: false,
  };
  const Submarine = {
    name: 'Submarine',
    size: 3,
    playerHits: 0,
    computerHits: 0,
    status: false,
  };
  const PatrolBoat = {
    name: 'PatrolBoat',
    size: 2,
    playerHits: 0,
    computerHits: 0,
    status: false,
  };
  const hit = (ship) => {
    if (playerOneTurn) {
      switch (ship.name) {
        case 'Carrier':
          ship.hits = carrierHits;
          if (ship.hits === ship.size) {
            ship.status = isSunk(ship);
            const selectText = document.getElementById('computerCarrier');
            selectText.style.setProperty('text-decoration', 'line-through');
            for (let i = 0; i < computerUniqueCarrierAdjacentCells.length; i++) {
              const cellString = computerUniqueCarrierAdjacentCells[i].toString();
              const index = cellString.split(',');
              const selectComputerCell = document.getElementById(`computerCell${index[0]}${index[1]}`);
              console.log('HERE');
              selectComputerCell.innerText = '●';
              selectComputerCell.textContent = '●';
            }
          }
          break;
        case 'Battleship':
          ship.hits = battleShipHits;
          if (ship.hits === ship.size) {
            ship.status = isSunk(ship);
            const selectText = document.getElementById('computerBattleship');
            selectText.style.setProperty('text-decoration', 'line-through');
            for (let i = 0; i < computerUniqueBattleshipAdjacentCells.length; i++) {
              const cellString = computerUniqueBattleshipAdjacentCells[i].toString();
              const index = cellString.split(',');
              const selectComputerCell = document.getElementById(`computerCell${index[0]}${index[1]}`);
              console.log('HERE');
              selectComputerCell.innerText = '●';
              selectComputerCell.textContent = '●';
            }
          }
          break;
        case 'Destroyer':
          ship.hits = destroyerHits;
          if (ship.hits === ship.size) {
            ship.status = isSunk(ship);
            const selectText = document.getElementById('computerDestroyer');
            selectText.style.setProperty('text-decoration', 'line-through');
            for (let i = 0; i < computerUniqueDestroyerAdjacentCells.length; i++) {
              const cellString = computerUniqueDestroyerAdjacentCells[i].toString();
              const index = cellString.split(',');
              const selectComputerCell = document.getElementById(`computerCell${index[0]}${index[1]}`);
              console.log('HERE');
              selectComputerCell.innerText = '●';
              selectComputerCell.textContent = '●';
            }
          }
          break;
        case 'Submarine':
          ship.hits = submarineHits;
          if (ship.hits === ship.size) {
            ship.status = isSunk(ship);
            const selectText = document.getElementById('computerSubmarine');
            selectText.style.setProperty('text-decoration', 'line-through');
            for (let i = 0; i < computerUniqueSubmarineAdjacentCells.length; i++) {
              const cellString = computerUniqueSubmarineAdjacentCells[i].toString();
              const index = cellString.split(',');
              const selectComputerCell = document.getElementById(`computerCell${index[0]}${index[1]}`);
              console.log('HERE');
              selectComputerCell.innerText = '●';
              selectComputerCell.textContent = '●';
            }
          }
          break;
        case 'PatrolBoat':
          ship.hits = patrolBoatHits;
          if (ship.hits === ship.size) {
            ship.status = isSunk(ship);
            const selectText = document.getElementById('computerPatrolBoat');
            selectText.style.setProperty('text-decoration', 'line-through');
            for (let i = 0; i < computerUniquePatrolboatAdjacentCells.length; i++) {
              const cellString = computerUniquePatrolboatAdjacentCells[i].toString();
              const index = cellString.split(',');
              const selectComputerCell = document.getElementById(`computerCell${index[0]}${index[1]}`);
              console.log('HERE');
              selectComputerCell.innerText = '●';
              selectComputerCell.textContent = '●';
            }
          }
          break;
      }
    } else if (playerTwoTurn) {
      switch (ship.name) {
        case 'Carrier':
          ship.hits = playerCarrierHits;
          if (ship.hits === ship.size) {
            ship.status = isSunk(ship);
            const selectText = document.getElementById('playerCarrier');
            selectText.style.setProperty('text-decoration', 'line-through');
            for (let i = 0; i < carrierAdjacentCells.length; i++) {
              const cellString = carrierAdjacentCells[i].toString();
              const index = cellString.split(',');
              const selectPlayerCell = document.getElementById(`playerCell${index[0]}${index[1]}`);
              console.log('HERE');
              selectPlayerCell.textContent = '●';
            }
          }
          break;
        case 'Battleship':
          ship.hits = playerBattleShipHits;
          if (ship.hits === ship.size) {
            ship.status = isSunk(ship);
            const selectText = document.getElementById('playerBattleship');
            selectText.style.setProperty('text-decoration', 'line-through');
            for (let i = 0; i < battleshipAdjacentCells.length; i++) {
              const cellString = battleshipAdjacentCells[i].toString();
              const index = cellString.split(',');
              const selectPlayerCell = document.getElementById(`playerCell${index[0]}${index[1]}`);
              console.log('HERE');
              selectPlayerCell.textContent = '●';
            }
          }
          break;
        case 'Destroyer':
          ship.hits = playerDestroyerHits;
          if (ship.hits === ship.size) {
            ship.status = isSunk(ship);
            const selectText = document.getElementById('playerDestroyer');
            selectText.style.setProperty('text-decoration', 'line-through');
            for (let i = 0; i < destroyerAdjacentCells.length; i++) {
              const cellString = destroyerAdjacentCells[i].toString();
              const index = cellString.split(',');
              const selectPlayerCell = document.getElementById(`playerCell${index[0]}${index[1]}`);
              console.log('HERE');

              selectPlayerCell.textContent = '●';
            }
          }
          break;
        case 'Submarine':
          ship.hits = playerSubmarineHits;
          if (ship.hits === ship.size) {
            ship.status = isSunk(ship);
            const selectText = document.getElementById('playerSubmarine');
            selectText.style.setProperty('text-decoration', 'line-through');
            for (let i = 0; i < submarineAdjacentCells.length; i++) {
              const cellString = submarineAdjacentCells[i].toString();
              const index = cellString.split(',');

              const selectPlayerCell = document.getElementById(`playerCell${index[0]}${index[1]}`);
              console.log('HERE');
              selectPlayerCell.textContent = '●';
            }
          }
          break;
        case 'PatrolBoat':
          ship.hits = playerPatrolBoatHits;
          if (ship.hits === ship.size) {
            ship.status = isSunk(ship);
            const selectText = document.getElementById('playerPatrolBoat');
            selectText.style.setProperty('text-decoration', 'line-through');
            for (let i = 0; i < patrolboatAdjacentCells.length; i++) {
              const cellString = patrolboatAdjacentCells[i].toString();
              const index = cellString.split(',');
              const selectPlayerCell = document.getElementById(`playerCell${index[0]}${index[1]}`);
              console.log('HERE');
              selectPlayerCell.textContent = '●';
            }
          }
          break;
      }
    }
  };
  const isSunk = (ship) => {
    return ship.hits === ship.size ? true : false;
  };
  return {
    Carrier, Battleship, Destroyer, Submarine, PatrolBoat, hit, isSunk,
  };
};

