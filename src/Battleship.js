import {carrierHits, battleShipHits, destroyerHits, patrolBoatHits, submarineHits, playerOneTurn} from './Gameboard.js';
export const Ship = () => {
  const Carrier = {
    name: 'Carrier',
    size: 5,
    hits: 0,
    status: false,
  };
  const Battleship = {
    name: 'Battleship',
    size: 4,
    hits: 0,
    status: false,
  };
  const Destroyer = {
    name: 'Destroyer',
    size: 3,
    hits: 0,
    status: false,
  };
  const Submarine = {
    name: 'Submarine',
    size: 3,
    status: false,
  };
  const PatrolBoat = {
    name: 'PatrolBoat',
    size: 2,
    hits: 0,
    status: false,
  };
  const hit = (ship) => {
    switch (ship.name) {
      case 'Carrier':
        ship.hits = carrierHits;
        if (ship.hits === ship.size) {
          ship.status = isSunk(ship);
          const selectText = document.getElementById('computerCarrier');
          selectText.style.setProperty('text-decoration', 'line-through');
        }
        break;
      case 'Battleship':
        ship.hits = battleShipHits;
        if (ship.hits === ship.size) {
          ship.status = isSunk(ship);
          const selectText = document.getElementById('computerBattleship');
          selectText.style.setProperty('text-decoration', 'line-through');
        }
        break;
      case 'Destroyer':
        ship.hits = destroyerHits;
        if (ship.hits === ship.size) {
          ship.status = isSunk(ship);
          const selectText = document.getElementById('computerDestroyer');
          selectText.style.setProperty('text-decoration', 'line-through');
        }
        break;
      case 'Submarine':
        ship.hits = submarineHits;
        if (ship.hits === ship.size) {
          ship.status = isSunk(ship);
          const selectText = document.getElementById('computerSubmarine');
          selectText.style.setProperty('text-decoration', 'line-through');
        }
        break;
      case 'PatrolBoat':
        ship.hits = patrolBoatHits;
        if (ship.hits === ship.size) {
          ship.status = isSunk(ship);
          const selectText = document.getElementById('computerPatrolBoat');
          selectText.style.setProperty('text-decoration', 'line-through');
        }
        break;
    }
  };
  const isSunk = (ship) => {
    return ship.hits === ship.size ? true : false;
  };
  return {
    Carrier, Battleship, Destroyer, Submarine, PatrolBoat, hit, isSunk,
    // set hits(amtOfHits) {
    //   this.hit = amtOfHits;
    // },
  };
};
const test = Ship();
