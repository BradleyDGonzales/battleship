import {Gameboard, computerPiecePlaced, playerOneTurn, adjacentCells} from './Gameboard.js';
import {computerAttemptedAttacks, computerOccupiedCells, computerMissedAttacks, occupiedCells} from './Gameboard.js';
import {Ship} from './Battleship';
export const computerChoice = ['Carrier', 'Battleship', 'Destroyer', 'Submarine', 'PatrolBoat'];
export let index;
export let prevIndex;
export let successfulHit = false;
export let playerCarrierHits = 0;
export let playerBattleShipHits = 0;
export let playerDestroyerHits = 0;
export let playerSubmarineHits = 0;
export let playerPatrolBoatHits = 0;
export let playerTwoTurn = false;
export let computerRotation;
export let tempBool;
export const Player = () => {
  const playerOne = {
    name: 'You',
  };
  const playerTwo = {
    name: 'Computer',
    randomComputerPlacements() {
      computerRotation = Math.floor(Math.random() * (2 - 1 + 1) + 1);
      let index = Math.floor(Math.random() * (99 - 0 + 1) + 0);
      index = index.toString().padStart(2, '0');
      const coordinates = [parseInt(index.charAt(0)), parseInt(index.charAt(1))];
      while (computerChoice.length !== 0) {
        if (computerChoice[0] === 'PatrolBoat') {
          Gameboard().computerPlace(Ship().PatrolBoat, [coordinates]);
          if (!computerPiecePlaced) {
            this.randomComputerPlacements();
          }
        }
        if (computerChoice[0] === 'Carrier') {
          Gameboard().computerPlace(Ship().Carrier, [coordinates]);
          if (!computerPiecePlaced) {
            this.randomComputerPlacements();
          }
        }
        if (computerChoice[0] === 'Destroyer') {
          Gameboard().computerPlace(Ship().Destroyer, [coordinates]);
          if (!computerPiecePlaced) {
            this.randomComputerPlacements();
          }
        }
        if (computerChoice[0] === 'Submarine') {
          Gameboard().computerPlace(Ship().Submarine, [coordinates]);
          if (!computerPiecePlaced) {
            this.randomComputerPlacements();
          }
        }
        if (computerChoice[0] === 'Battleship') {
          Gameboard().computerPlace(Ship().Battleship, [coordinates]);
          if (!computerPiecePlaced) {
            this.randomComputerPlacements();
          }
        }
      }
    },
    randomComputerHit() {
      playerTwoTurn = true;
      if (successfulHit) {
        // [-1,0],[1,0],[0, -1], [0,1]
        const ADJACENT_DIRECTIONS_2D = [[-1, 0], [0, -1], [0, 1], [1, 0]];
        const possibleMoves = [];
        for (let k = 0; k < ADJACENT_DIRECTIONS_2D.length; k++) {
          const dx = parseInt(prevIndex.charAt(0)) + ADJACENT_DIRECTIONS_2D[k][0];
          const dy = parseInt(prevIndex.charAt(1)) + ADJACENT_DIRECTIONS_2D[k][1];
          if (dx >= 0 && dx <=9 && dy >= 0 && dy <= 9) {
            possibleMoves.push([dx, dy]);
          }
        }
        console.log(possibleMoves);
        for (const el of possibleMoves) {
          index = `${el[0]}${el[1]}`;
          index = index.toString().padStart(2, '0');
          const coordinates = [[parseInt(index.charAt(0)), parseInt(index.charAt(1))]];
          if (JSON.stringify(computerAttemptedAttacks).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]])) === -1) {
            computerAttemptedAttacks.push([coordinates[0][0], coordinates[0][1]]);
            const selectPlayerCell = document.getElementById(`playerCell${index}`) || document.getElementById(`playerCell${index}Carrier`) || document.getElementById(`playerCell${index}Destroyer`) || document.getElementById(`playerCell${index}Submarine`) || document.getElementById(`playerCell${index}Battleship`) || document.getElementById(`playerCell${index}PatrolBoat`);
            if (JSON.stringify(occupiedCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]])) !== -1 && JSON.stringify(computerMissedAttacks).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]])) === -1) {
              const shipName = selectPlayerCell.id.slice(12, selectPlayerCell.id.length);
              switch (shipName) {
                case 'Carrier':
                  playerCarrierHits++;
                  Ship().hit(Ship().Carrier);
                  break;
                case 'Battleship':
                  playerBattleShipHits++;
                  Ship().hit(Ship().Battleship);
                  break;
                case 'Destroyer':
                  playerDestroyerHits++;
                  Ship().hit(Ship().Destroyer);
                  break;
                case 'Submarine':
                  playerSubmarineHits++;
                  Ship().hit(Ship().Submarine);
                  break;
                case 'PatrolBoat':
                  playerPatrolBoatHits++;
                  Ship().hit(Ship().PatrolBoat);
                  break;
              }
              setTimeout(function() {
                selectPlayerCell.style.backgroundColor = 'red';
              }, 1000);
              for (let i = 0; i < occupiedCells.length; i++) {
                if (JSON.stringify(occupiedCells[i]) === JSON.stringify([coordinates[0][0], coordinates[0][1]])) {
                  occupiedCells.splice(i, 1);
                  break;
                }
              }
              successfulHit = true;
              prevIndex = index;
              this.randomComputerHit();
              break;
            } else {
              successfulHit = false;
              computerMissedAttacks.push([coordinates[0][0], coordinates[0][1]]);
              setTimeout(function() {
                selectPlayerCell.innerText = '●';
                selectPlayerCell.textContent = '●';
              }, 500);
              playerTwoTurn = false;
              break;
            }
          }
        }
      } else {
        index = Math.floor(Math.random() * (99 - 0 + 1) + 0);
        index = index.toString().padStart(2, '0');
        const coordinates = [[parseInt(index.charAt(0)), parseInt(index.charAt(1))]];
        if (JSON.stringify(computerAttemptedAttacks).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]])) === -1) {
          computerAttemptedAttacks.push([coordinates[0][0], coordinates[0][1]]);
          const selectPlayerCell = document.getElementById(`playerCell${index}`) || document.getElementById(`playerCell${index}Carrier`) || document.getElementById(`playerCell${index}Destroyer`) || document.getElementById(`playerCell${index}Submarine`) || document.getElementById(`playerCell${index}Battleship`) || document.getElementById(`playerCell${index}PatrolBoat`);
          if (JSON.stringify(occupiedCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]])) !== -1 && JSON.stringify(computerMissedAttacks).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]])) === -1) {
            const shipName = selectPlayerCell.id.slice(12, selectPlayerCell.id.length);
            switch (shipName) {
              case 'Carrier':
                playerCarrierHits++;
                Ship().hit(Ship().Carrier);
                break;
              case 'Battleship':
                playerBattleShipHits++;
                Ship().hit(Ship().Battleship);
                break;
              case 'Destroyer':
                playerDestroyerHits++;
                Ship().hit(Ship().Destroyer);
                break;
              case 'Submarine':
                playerSubmarineHits++;
                Ship().hit(Ship().Submarine);
                break;
              case 'PatrolBoat':
                playerPatrolBoatHits++;
                Ship().hit(Ship().PatrolBoat);
                break;
            }
            setTimeout(function() {
              selectPlayerCell.style.backgroundColor = 'red';
            }, 1000);
            for (let i = 0; i < occupiedCells.length; i++) {
              if (JSON.stringify(occupiedCells[i]) === JSON.stringify([coordinates[0][0], coordinates[0][1]])) {
                occupiedCells.splice(i, 1);
                break;
              }
            }
            successfulHit = true;
            prevIndex = index;
            this.randomComputerHit();
          } else {
            successfulHit = false;
            computerMissedAttacks.push([coordinates[0][0], coordinates[0][1]]);
            setTimeout(function() {
              selectPlayerCell.textContent = '●';
            }, 1000);
            playerTwoTurn = false;
          }
        }
      }
      // } else {
      //   successfulHit = false;
      //   computerMissedAttacks.push([coordinates[0][0], coordinates[0][1]]);
      //   selectPlayerCell.innerText = '●';
      //   selectPlayerCell.textContent = '●';
      //   playerTwoTurn = false;
      //   this.randomComputerHit();
      // }
      if (occupiedCells.length === 0) {
        setTimeout(function() {
          alert('game over');
        }, 50);
        const selectPlayerGrid = document.getElementById('playerGrid');
        const selectComputerGrid = document.getElementById('computerGrid');
        selectPlayerGrid.style.pointerEvents = 'none';
        selectComputerGrid.style.pointerEvents = 'none';
        return;
      }
    },
  };
  return {
    playerOne, playerTwo,
  };
};
