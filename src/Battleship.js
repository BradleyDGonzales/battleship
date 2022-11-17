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
    hits: 0,
    status: false,
  };
  const PatrolBoat = {
    name: 'PatrolBoat',
    size: 2,
    hits: 0,
    status: false,
  };
  const hit = (ship) => {
    if (ship.hits === ship.size) {
      return 'sunk';
    } else {
      return ship.hits += 1;
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
