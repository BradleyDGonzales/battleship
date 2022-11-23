export const computerOccupiedCells = [];
export const computerChoice = ['Carrier', 'Battleship', 'Destroyer', 'Submarine', 'PatrolBoat'];
export const Player = () => {
  const randomComputerPlacements = () => {
    const rotation = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    let index = Math.floor(Math.random() * (99 - 0 + 1) + 0);
    // 1 = true, 2 = false
    if (rotation === 1) {
      const indexLength = index.toString().length;
      if (indexLength === 1) {
        console.log('inside 1');
        index = index.toString().padStart(2, '0');
      } else {
        console.log('inside else');
        index = index.toString();
      }
    } else {
      const indexLength = index.toString().length;
      if (indexLength === 1) {
        console.log('inside 1');
        index = index.toString().padStart(2, '0');
      } else {
        console.log('inside else');
        index = index.toString();
      }
    }
    console.log(index);

    const coordinates = [parseInt(index.charAt(0)), parseInt(index.charAt(1))];
    console.log(coordinates);
  };
  const playerOne = () => {

  };
  const playerTwo = () => {

  };
  return {
    randomComputerPlacements, playerOne, playerTwo,
  };
};
