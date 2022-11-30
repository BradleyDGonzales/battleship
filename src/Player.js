import {Gameboard, playerOneTurn, computerPiecePlaced} from './Gameboard';
import {Ship} from './Battleship';
export const computerChoice = ['Carrier', 'Battleship', 'Destroyer', 'Submarine', 'PatrolBoat'];
export const playerTwoTurn = false;
export let computerRotation;
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


  };
  return {
    playerOne, playerTwo,
  };
};
