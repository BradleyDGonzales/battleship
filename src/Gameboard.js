export const Gameboard = () => {
  const place = (ship, coordinates) => {
    const shipArray = [[coordinates[0][0], coordinates[0][1]]];
    const selectCell = document.querySelectorAll('.grid-cell');
    for (let i = 1; i < ship.size; i++) {
      shipArray.push([coordinates[0][0], coordinates[0][1] + i]);
      console.log(shipArray);
    }
    const flag = shipArray.some((el) => el[1] > 9 || el[1] < 0);
    if (!flag) {
      console.log(shipArray[0][0]);
      for (let i =0; i < shipArray.length; i++) {
        const cellID = shipArray[i];
        const selectCells = document.getElementById(`player${cellID[0]}${cellID[1]}`);
        selectCells.style.cssText = 'background-color: grey;';
      }
      return;
    } else {
      alert('oob (out of bounds)');
      return;
    }
  };
  return {
    place,
  };
};
