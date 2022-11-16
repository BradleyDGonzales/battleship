/* eslint-disable require-jsdoc */

let coordinates;
function getGridElementsPosition(index) {
  const gridEl = document.getElementById('playerGrid');

  // our indexes are zero-based but gridColumns are 1-based, so subtract 1
  let offset = Number(window.getComputedStyle(gridEl.children[0]).gridColumnStart) - 1;

  // if we haven't specified the first child's grid column, then there is no offset
  if (isNaN(offset)) {
    offset = 0;
  }
  const colCount = window.getComputedStyle(gridEl).gridTemplateColumns.split(' ').length;

  const rowPosition = Math.floor((index + offset) / colCount);
  const colPosition = (index + offset) % colCount;

  // Return an object with properties row and column
  return {row: rowPosition, column: colPosition};
}

function getNodeIndex(elm) {
  const c = elm.parentNode.children;
  let i = 0;
  for (; i < c.length; i++) if (c[i] == elm) return i;
}

export {getGridElementsPosition, getNodeIndex};
