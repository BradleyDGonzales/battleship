import {carrierHits, battleShipHits, destroyerHits, patrolBoatHits, submarineHits} from './index';
export const Ship = () => {
  const Carrier = {
    name: 'Carrier',
    size: 5,
    status: false,
  };
  const Battleship = {
    name: 'Battleship',
    size: 4,
    status: false,
  };
  const Destroyer = {
    name: 'Destroyer',
    size: 3,
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
    status: false,
  };
  const hit = (ship) => {
    switch (ship.name) {
      case 'Carrier':
        ship.hits = carrierHits;
        break;
      case 'Battleship':
        ship.hits = battleShipHits++;
        break;
      case 'Destroyer':
        ship.hits = destroyerHits++;
        break;
      case 'Submarine':
        ship.hits = submarineHits++;
        break;
      case 'PatrolBoat':
        ship.hits = patrolBoatHits++;
        break;
    }
    console.log(ship);
    // if (ship.hits === ship.size) {
    //   ship.status = true;
    // } else {
    //   Object.keys(ship).forEach((item) => {
    //     if (item === 'hits') {
    //       ship[item] += 1;
    //     }
    //   });
    // }
    // if (ship['hits'] === ship.size) {
    //   return 'sunk';
    // } else {
    //   return ship['hits'] += 1;
    // }
  };
  const isSunk = ({ship}) => {
    return ship.hits === ship.size ? true : false;
  };
  return {
    Carrier, Battleship, Destroyer, Submarine, PatrolBoat, hit, isSunk,
  };
};
const test = Ship();
