const Ship = () => {
  constructor();
  const Carrier = {
    size: 5,
    hits: 0,
    status: false,
  };
  const Battleship = {
    size: 4,
    hits: 0,
    status: false,
  };
  const Destroyer = {
    size: 3,
    hits: 0,
    status: false,
  };
  const Submarine = {
    size: 3,
    hits: 0,
    status: false,
  };
  const PatrolBoat = {
    size: 2,
    hits: 0,
    status: false,
  };
  const hit = (ship) => {
    if (ship.hits === ship.size) {
      return 'sunk';
    } else {
      return ship.hits = ship.hits + 1;
    }
  };
  const isSunk = (ship) => {
    return ship.hits === ship.size ? true : false;
  };
  return {
    Carrier, Battleship, Destroyer, Submarine, PatrolBoat, hit, isSunk,
  };
};
const test = Ship();
module.exports = Ship;

// const carrierSize = 5;
// const battleShipSize = 4;
// const destroyerSize = 3;
// const submarineSize = 3;
// const patrolBoatSize = 2;