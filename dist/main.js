/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Battleship.js":
/*!***************************!*\
  !*** ./src/Battleship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nconst Ship = () => {\n  const Carrier = {\n    name: 'Carrier',\n    size: 5,\n    hits: 0,\n    status: false,\n  };\n  const Battleship = {\n    name: 'Battleship',\n    size: 4,\n    hits: 0,\n    status: false,\n  };\n  const Destroyer = {\n    name: 'Destroyer',\n    size: 3,\n    hits: 0,\n    status: false,\n  };\n  const Submarine = {\n    name: 'Submarine',\n    size: 3,\n    hits: 0,\n    status: false,\n  };\n  const PatrolBoat = {\n    name: 'PatrolBoat',\n    size: 2,\n    hits: 0,\n    status: false,\n  };\n  const hit = (ship) => {\n    if (ship.hits === ship.size) {\n      return 'sunk';\n    } else {\n      return ship.hits += 1;\n    }\n  };\n  const isSunk = (ship) => {\n    return ship.hits === ship.size ? true : false;\n  };\n  return {\n    Carrier, Battleship, Destroyer, Submarine, PatrolBoat, hit, isSunk,\n  };\n};\nconst test = Ship();\n\n\n//# sourceURL=webpack://battleship/./src/Battleship.js?");

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard),\n/* harmony export */   \"adjacentCells\": () => (/* binding */ adjacentCells),\n/* harmony export */   \"attemptedAttacks\": () => (/* binding */ attemptedAttacks),\n/* harmony export */   \"count\": () => (/* binding */ count),\n/* harmony export */   \"gameStart\": () => (/* binding */ gameStart),\n/* harmony export */   \"gameboardFlag\": () => (/* binding */ gameboardFlag),\n/* harmony export */   \"missedAttacks\": () => (/* binding */ missedAttacks),\n/* harmony export */   \"occupiedCells\": () => (/* binding */ occupiedCells),\n/* harmony export */   \"tempArray\": () => (/* binding */ tempArray)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* eslint-disable max-len */\n\n\nlet gameboardFlag;\nlet gameStart = false;\nconst occupiedCells = [];\nlet adjacentCells = [];\nlet count = 0;\nconst tempArray = [];\nconst missedAttacks = [];\nconst attemptedAttacks = [];\nconst Gameboard = () => {\n  const place = (ship, coordinates) => {\n    if (!_index_js__WEBPACK_IMPORTED_MODULE_0__.rotation) {\n      if (occupiedCells.length === 0) {\n        occupiedCells.push([coordinates[0][0], coordinates[0][1]]);\n      }\n      let shipArray = [];\n      if (occupiedCells.length !== 1) {\n        const isFounded = JSON.stringify(occupiedCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]]));\n        const isFoundedAdjacent = JSON.stringify(adjacentCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]]));\n        console.log(isFounded);\n        if (isFounded === -1 && isFoundedAdjacent === -1) {\n          shipArray.push([coordinates[0][0], coordinates[0][1]]);\n          if (JSON.stringify(occupiedCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]])) === -1 && JSON.stringify(adjacentCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]])) === -1) {\n            occupiedCells.push([coordinates[0][0], coordinates[0][1]]);\n          } else {\n            alert('Cell is used or trying to place on adjacent cell');\n            gameboardFlag = true;\n            return;\n          }\n        } else {\n          alert('Cell is used');\n          gameboardFlag = true;\n          return;\n        }\n      } else {\n        shipArray.push([coordinates[0][0], coordinates[0][1]]);\n      }\n      for (let i = 1; i < ship.size; i++) {\n        shipArray.push([coordinates[0][0], coordinates[0][1] + i]);\n        count++;\n        if (!shipArray.some((el) => el[1] > 9 || el[1] < 0)) {\n          if (JSON.stringify(occupiedCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1] + i])) === -1 && JSON.stringify(adjacentCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1] + i])) === -1) {\n            occupiedCells.push([coordinates[0][0], coordinates[0][1] + i]);\n          } else {\n            shipArray = [];\n            for (let i = 0; i < count; i++) {\n              occupiedCells.pop();\n            }\n            count = 0;\n            alert('Out of bounds (adjacent elements)');\n            return;\n          }\n        } else {\n          if (count === 0) {\n            occupiedCells.pop();\n          } else {\n            for (let i = 0; i < count; i++) {\n              occupiedCells.pop();\n            }\n          }\n          count = 0;\n          shipArray = [];\n          alert('Out of bounds');\n          return;\n        }\n      }\n      const ADJACENT_DIRECTIONS = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];\n      const initArrayLength = shipArray.length;\n      for (let j = 0; j < initArrayLength; j++) {\n        for (let k = 0; k < ADJACENT_DIRECTIONS.length; k++) {\n          const dx = (shipArray[j][0] + ADJACENT_DIRECTIONS[k][0]);\n          const dy = (shipArray[j][1] + ADJACENT_DIRECTIONS[k][1]);\n          if ((JSON.stringify(occupiedCells).indexOf(JSON.stringify([dx, dy])) === -1) && (JSON.stringify(shipArray).indexOf(JSON.stringify([dx, dy])) === -1) && (JSON.stringify(tempArray).indexOf(JSON.stringify([dx, dy]))) === -1 && (dx >= 0) && (dx <=9) && (dy >= 0) && (dy <= 9)) {\n            tempArray.push([dx, dy]);\n          }\n        }\n      }\n      adjacentCells = [...new Set(tempArray)];\n      console.log(adjacentCells);\n      for (let i = 0; i < adjacentCells.length; i++) {\n        const cellID = adjacentCells[i];\n        const selectCells = document.getElementById(`playerCell${cellID[0]}${cellID[1]}`);\n        selectCells.style.cssText = 'background-color: brown; border: 2px solid black;';\n      }\n      console.log(occupiedCells);\n      for (let i = 0; i < shipArray.length; i++) {\n        const cellID = shipArray[i];\n        const selectCells = document.getElementById(`playerCell${cellID[0]}${cellID[1]}`);\n        selectCells.style.cssText = 'background-color: grey; border: 2px solid black;';\n      }\n      count = 0;\n      const selectText = document.getElementById('BattleshipText');\n      if (_index_js__WEBPACK_IMPORTED_MODULE_0__.choice.length !== 0) {\n        _index_js__WEBPACK_IMPORTED_MODULE_0__.choice.shift();\n        if (_index_js__WEBPACK_IMPORTED_MODULE_0__.choice.length === 0) {\n          selectText.innerText = 'Begin Game';\n          gameStart = true;\n        } else {\n          selectText.innerText = `Place your ${_index_js__WEBPACK_IMPORTED_MODULE_0__.choice[0]}`;\n        }\n      }\n    } else {\n      if (occupiedCells.length === 0) {\n        occupiedCells.push([coordinates[0][0], coordinates[0][1]]);\n      }\n      let shipArray = [];\n      if (occupiedCells.length !== 1) {\n        const isFounded = JSON.stringify(occupiedCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]]));\n        const isFoundedAdjacent = JSON.stringify(adjacentCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]]));\n        if (isFounded === -1 && isFoundedAdjacent === -1) {\n          shipArray.push([coordinates[0][0], coordinates[0][1]]);\n          if (JSON.stringify(occupiedCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]])) === -1 && JSON.stringify(adjacentCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]])) === -1) {\n            occupiedCells.push([coordinates[0][0], coordinates[0][1]]);\n          } else {\n            alert('Cell is used12321');\n            gameboardFlag = true;\n            return;\n          }\n        } else {\n          alert('Cell is used');\n          gameboardFlag = true;\n          return;\n        }\n      } else {\n        shipArray.push([coordinates[0][0], coordinates[0][1]]);\n      }\n      for (let i = 1; i < ship.size; i++) {\n        shipArray.push([coordinates[0][0] + i, coordinates[0][1]]);\n        count++;\n        if (!shipArray.some((el) => el[0] > 9 || el[0] < 0)) {\n          if (JSON.stringify(occupiedCells).indexOf(JSON.stringify([coordinates[0][0] + i, coordinates[0][1]])) === -1 && JSON.stringify(adjacentCells).indexOf(JSON.stringify([coordinates[0][0] + i, coordinates[0][1]])) === -1) {\n            occupiedCells.push([coordinates[0][0] + i, coordinates[0][1]]);\n          } else {\n            shipArray = [];\n            for (let i = 0; i < count; i++) {\n              occupiedCells.pop();\n            }\n            count = 0;\n            alert('Out of bounds (adjacent elements)');\n            return;\n          }\n        } else {\n          if (count === 0) {\n            occupiedCells.pop();\n          } else {\n            for (let i = 0; i < count; i++) {\n              occupiedCells.pop();\n            }\n          }\n          count = 0;\n          shipArray = [];\n          alert('Out of bounds');\n          return;\n        }\n      }\n      const ADJACENT_DIRECTIONS = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];\n      const initArrayLength = shipArray.length;\n      for (let j = 0; j < initArrayLength; j++) {\n        for (let k = 0; k < ADJACENT_DIRECTIONS.length; k++) {\n          const dx = (shipArray[j][0] + ADJACENT_DIRECTIONS[k][0]);\n          const dy = (shipArray[j][1] + ADJACENT_DIRECTIONS[k][1]);\n          if ((JSON.stringify(occupiedCells).indexOf(JSON.stringify([dx, dy])) === -1) && (JSON.stringify(shipArray).indexOf(JSON.stringify([dx, dy])) === -1) && (JSON.stringify(tempArray).indexOf(JSON.stringify([dx, dy]))) === -1 && (dx >= 0) && (dx <=9) && (dy >= 0) && (dy <= 9)) {\n            tempArray.push([dx, dy]);\n          }\n        }\n      }\n      console.log(tempArray);\n      adjacentCells = [...new Set(tempArray)];\n      console.log(adjacentCells);\n      for (let i = 0; i < adjacentCells.length; i++) {\n        const cellID = adjacentCells[i];\n        const selectCells = document.getElementById(`playerCell${cellID[0]}${cellID[1]}`);\n        selectCells.style.cssText = 'background-color: brown; border: 2px solid black;';\n      }\n      console.log(occupiedCells);\n      for (let i = 0; i < shipArray.length; i++) {\n        const cellID = shipArray[i];\n        const selectCells = document.getElementById(`playerCell${cellID[0]}${cellID[1]}`);\n        selectCells.style.cssText = 'background-color: grey; border: 2px solid black;';\n      }\n      count = 0;\n      const selectText = document.getElementById('BattleshipText');\n      if (_index_js__WEBPACK_IMPORTED_MODULE_0__.choice.length !== 0) {\n        _index_js__WEBPACK_IMPORTED_MODULE_0__.choice.shift();\n        if (_index_js__WEBPACK_IMPORTED_MODULE_0__.choice.length === 0) {\n          selectText.innerText = 'Begin Game';\n          gameStart = true;\n        } else {\n          selectText.innerText = `Place your ${_index_js__WEBPACK_IMPORTED_MODULE_0__.choice[0]}`;\n        }\n      }\n    }\n  };\n  const receiveAttack = (coordinates) => {\n    if (JSON.stringify(attemptedAttacks).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]])) === -1) {\n      attemptedAttacks.push([coordinates[0][0], coordinates[0][1]]);\n      const selectComputerCell = document.getElementById(`computerCell${coordinates[0][0]}${coordinates[0][1]}`);\n      if (JSON.stringify(occupiedCells).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]])) !== -1 && JSON.stringify(missedAttacks).indexOf(JSON.stringify([coordinates[0][0], coordinates[0][1]])) === -1) {\n        selectComputerCell.style.backgroundColor = 'red';\n        for (let i = 0; i < occupiedCells.length; i++) {\n          console.log(JSON.stringify(occupiedCells[i]));\n          console.log(JSON.stringify([coordinates[0][0], coordinates[0][1]]));\n          if (JSON.stringify(occupiedCells[i]) === JSON.stringify([coordinates[0][0], coordinates[0][1]])) {\n            occupiedCells.splice(i, 1);\n            break;\n          }\n        }\n      } else {\n        missedAttacks.push([coordinates[0][0], coordinates[0][1]]);\n        selectComputerCell.style.backgroundColor = 'yellow';\n      }\n    } else {\n      alert('Cell already attacked');\n    }\n    if (occupiedCells.length === 0) {\n      setTimeout(function() {\n        alert('game over');\n      }, 50);\n      return;\n    }\n  };\n  return {\n    place, receiveAttack,\n  };\n};\n\n\n//# sourceURL=webpack://battleship/./src/Gameboard.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player),\n/* harmony export */   \"computerChoice\": () => (/* binding */ computerChoice),\n/* harmony export */   \"computerOccupiedCells\": () => (/* binding */ computerOccupiedCells)\n/* harmony export */ });\nconst computerOccupiedCells = [];\nconst computerChoice = ['Carrier', 'Battleship', 'Destroyer', 'Submarine', 'PatrolBoat'];\nconst Player = () => {\n  const randomComputerPlacements = () => {\n    const rotation = Math.floor(Math.random() * (2 - 1 + 1) + 1);\n    let index = Math.floor(Math.random() * (99 - 0 + 1) + 0);\n    // 1 = true, 2 = false\n    if (rotation === 1) {\n      const indexLength = index.toString().length;\n      if (indexLength === 1) {\n        console.log('inside 1');\n        index = index.toString().padStart(2, '0');\n      } else {\n        console.log('inside else');\n        index = index.toString();\n      }\n    } else {\n      const indexLength = index.toString().length;\n      if (indexLength === 1) {\n        console.log('inside 1');\n        index = index.toString().padStart(2, '0');\n      } else {\n        console.log('inside else');\n        index = index.toString();\n      }\n    }\n    console.log(index);\n\n    const coordinates = [parseInt(index.charAt(0)), parseInt(index.charAt(1))];\n    console.log(coordinates);\n  };\n  const playerOne = () => {\n\n  };\n  const playerTwo = () => {\n\n  };\n  return {\n    randomComputerPlacements, playerOne, playerTwo,\n  };\n};\n\n\n//# sourceURL=webpack://battleship/./src/Player.js?");

/***/ }),

/***/ "./src/coordinates.js":
/*!****************************!*\
  !*** ./src/coordinates.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getGridElementsPosition\": () => (/* binding */ getGridElementsPosition),\n/* harmony export */   \"getNodeIndex\": () => (/* binding */ getNodeIndex)\n/* harmony export */ });\n/* eslint-disable require-jsdoc */\n\nlet coordinates;\nfunction getGridElementsPosition(index) {\n  const gridEl = document.getElementById('playerGrid');\n\n  // our indexes are zero-based but gridColumns are 1-based, so subtract 1\n  let offset = Number(window.getComputedStyle(gridEl.children[0]).gridColumnStart) - 1;\n\n  // if we haven't specified the first child's grid column, then there is no offset\n  if (isNaN(offset)) {\n    offset = 0;\n  }\n  const colCount = window.getComputedStyle(gridEl).gridTemplateColumns.split(' ').length;\n\n  const rowPosition = Math.floor((index + offset) / colCount);\n  const colPosition = (index + offset) % colCount;\n\n  // Return an object with properties row and column\n  return {row: rowPosition, column: colPosition};\n}\n\nfunction getNodeIndex(elm) {\n  const c = elm.parentNode.children;\n  let i = 0;\n  for (; i < c.length; i++) if (c[i] == elm) return i;\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/coordinates.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"choice\": () => (/* binding */ choice),\n/* harmony export */   \"rotation\": () => (/* binding */ rotation)\n/* harmony export */ });\n/* harmony import */ var _coordinates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinates.js */ \"./src/coordinates.js\");\n/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard.js */ \"./src/Gameboard.js\");\n/* harmony import */ var _Battleship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Battleship */ \"./src/Battleship.js\");\n/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Player.js */ \"./src/Player.js\");\n/* eslint-disable max-len */\n/* eslint-disable require-jsdoc */\n\n\n\n\n\nconst playerGrid = document.getElementById('playerGrid');\nconst computerGrid = document.getElementById('computerGrid');\nconst choice = ['Carrier', 'Battleship', 'Destroyer', 'Submarine', 'PatrolBoat'];\nlet rotation = false;\nmakePlayerGrid();\nmakeComputerGrid();\n// const test123 = Player().randomComputerPlacements();\nfunction makePlayerGrid() {\n  for (let i = 0; i < (10 * 10); i++) {\n    const cell = document.createElement('div');\n    cell.classList.add('playerGrid-cells');\n    cell.setAttribute('id', `playerCell${i.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}`);\n    cell.style.cssText = `border: 1px solid black;`;\n    playerGrid.appendChild(cell);\n  }\n}\nfunction makeComputerGrid() {\n  for (let i = 0; i < (10 * 10); i++) {\n    const cell = document.createElement('div');\n    cell.classList.add('computerGrid-cells');\n    cell.setAttribute('id', `computerCell${i.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}`);\n    cell.style.cssText = `border: 1px solid black;`;\n    computerGrid.appendChild(cell);\n  }\n}\nwindow.addEventListener('DOMContentLoaded', (e) => {\n  document.querySelectorAll('.playerGrid-cells').forEach((el) => {\n    el.addEventListener('click', function(e) {\n      if (!_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.gameStart) {\n        const position = (0,_coordinates_js__WEBPACK_IMPORTED_MODULE_0__.getGridElementsPosition)((0,_coordinates_js__WEBPACK_IMPORTED_MODULE_0__.getNodeIndex)(e.target));\n        const coordinates = [[position.row, position.column]];\n        console.log(coordinates);\n        if (choice[0] === 'PatrolBoat') {\n          (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard)().place((0,_Battleship__WEBPACK_IMPORTED_MODULE_2__.Ship)().PatrolBoat, coordinates);\n          return;\n        }\n        if (choice[0] === 'Carrier') {\n          (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard)().place((0,_Battleship__WEBPACK_IMPORTED_MODULE_2__.Ship)().Carrier, coordinates);\n          return;\n        }\n        if (choice[0] === 'Destroyer') {\n          (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard)().place((0,_Battleship__WEBPACK_IMPORTED_MODULE_2__.Ship)().Destroyer, coordinates);\n          return;\n        }\n        if (choice[0] === 'Submarine') {\n          (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard)().place((0,_Battleship__WEBPACK_IMPORTED_MODULE_2__.Ship)().Submarine, coordinates);\n          return;\n        }\n        if (choice[0] === 'Battleship') {\n          (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard)().place((0,_Battleship__WEBPACK_IMPORTED_MODULE_2__.Ship)().Battleship, coordinates);\n          return;\n        }\n      } else {\n        alert('Silly, attack the enemy not yourself!');\n      }\n    });\n  });\n  document.querySelectorAll('.computerGrid-cells').forEach((el) => {\n    el.addEventListener('click', function(e) {\n      if (_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.gameStart) {\n        const position = (0,_coordinates_js__WEBPACK_IMPORTED_MODULE_0__.getGridElementsPosition)((0,_coordinates_js__WEBPACK_IMPORTED_MODULE_0__.getNodeIndex)(e.target));\n        const coordinates = [[position.row, position.column]];\n        (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard)().receiveAttack(coordinates);\n      } else {\n        alert('Finish setting up your pieces!');\n      }\n    });\n  });\n  document.getElementById('RotationButton').addEventListener('click', function(e) {\n    const rotationText = document.getElementById('RotationText');\n    if (rotationText.textContent.includes('horizontal')) {\n      rotationText.textContent = 'Currently placing your pieces vertically (top to down)';\n      rotation = true;\n    } else if (rotationText.textContent.includes('vertical')) {\n      rotationText.textContent = 'Currently placing your pieces horizontally (left to right)';\n      rotation = false;\n    }\n  });\n});\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;