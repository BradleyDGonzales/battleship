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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nconst Ship = () => {\n  const Carrier = {\n    name: 'Carrier',\n    size: 5,\n    hits: 0,\n    status: false,\n  };\n  const Battleship = {\n    name: 'Battleship',\n    size: 4,\n    hits: 0,\n    status: false,\n  };\n  const Destroyer = {\n    name: 'Destroyer',\n    size: 3,\n    hits: 0,\n    status: false,\n  };\n  const Submarine = {\n    name: 'Submarine',\n    size: 3,\n    hits: 0,\n    status: false,\n  };\n  const PatrolBoat = {\n    name: 'PatrolBoat',\n    size: 2,\n    hits: 0,\n    status: false,\n  };\n  const hit = (...ship) => {\n    if (ship.hits === ship.size) {\n      return 'sunk';\n    } else {\n      return ship.hits = ship.hits + 1;\n    }\n  };\n  const isSunk = (ship) => {\n    return ship.hits === ship.size ? true : false;\n  };\n  return {\n    Carrier, Battleship, Destroyer, Submarine, PatrolBoat, hit, isSunk,\n  };\n};\nconst test = Ship();\n\n// const carrierSize = 5;\n// const battleShipSize = 4;\n// const destroyerSize = 3;\n// const submarineSize = 3;\n// const patrolBoatSize = 2;\n\n\n//# sourceURL=webpack://battleship/./src/Battleship.js?");

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\nconst Gameboard = () => {\n  const place = (ship, coordinates) => {\n    const shipArray = [[coordinates[0][0], coordinates[0][1]]];\n    const selectCell = document.querySelectorAll('.grid-cell');\n    for (let i = 1; i < ship.size; i++) {\n      shipArray.push([coordinates[0][0], coordinates[0][1] + i]);\n      console.log(shipArray);\n    }\n    const flag = shipArray.some((el) => el[1] > 9 || el[1] < 0);\n    if (!flag) {\n      console.log(shipArray[0][0]);\n      for (let i =0; i < shipArray.length; i++) {\n        const cellID = shipArray[i];\n        const selectCells = document.getElementById(`player${cellID[0]}${cellID[1]}`);\n        selectCells.style.cssText = 'background-color: grey;';\n      }\n      return;\n    } else {\n      alert('oob (out of bounds)');\n      return;\n    }\n  };\n  return {\n    place,\n  };\n};\n\n\n//# sourceURL=webpack://battleship/./src/Gameboard.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _coordinates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinates.js */ \"./src/coordinates.js\");\n/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard.js */ \"./src/Gameboard.js\");\n/* harmony import */ var _Battleship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Battleship */ \"./src/Battleship.js\");\n/* eslint-disable require-jsdoc */\n\n\n\n\nconst playerGrid = document.getElementById('playerGrid');\nconst computerGrid = document.getElementById('computerGrid');\nconst choice = ['PatrolBoat', 'Carrier', 'Destroyer', 'Submarine', 'Battleship'];\nmakePlayerGrid();\nmakeComputerGrid();\nfunction makePlayerGrid() {\n  for (let i = 0; i < (10 * 10); i++) {\n    const cell = document.createElement('div');\n    cell.classList.add('grid-cell');\n    cell.setAttribute('id', `player${i.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}`);\n    cell.style.cssText = `border: 1px solid black;`;\n    playerGrid.appendChild(cell);\n  }\n}\nfunction makeComputerGrid() {\n  for (let i = 0; i < (10 * 10); i++) {\n    const cell = document.createElement('div');\n    cell.classList.add('grid-cell');\n    cell.setAttribute('id', `computer${i.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}`);\n    cell.style.cssText = `border: 1px solid black;`;\n    computerGrid.appendChild(cell);\n  }\n}\nwindow.addEventListener('DOMContentLoaded', (e) => {\n  document.querySelectorAll('.grid-cell').forEach((el) => {\n    el.addEventListener('click', function(e) {\n      const position = (0,_coordinates_js__WEBPACK_IMPORTED_MODULE_0__.getGridElementsPosition)((0,_coordinates_js__WEBPACK_IMPORTED_MODULE_0__.getNodeIndex)(e.target));\n      const coordinates = [[position.row, position.column]];\n      if (choice.length === 0) {\n        alert('no more pieces');\n      }\n      if (choice[0] === 'PatrolBoat') {\n        (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard)().place((0,_Battleship__WEBPACK_IMPORTED_MODULE_2__.Ship)().PatrolBoat, coordinates);\n        choice.shift();\n        return;\n      }\n      if (choice[0] === 'Carrier') {\n        (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard)().place((0,_Battleship__WEBPACK_IMPORTED_MODULE_2__.Ship)().Carrier, coordinates);\n        choice.shift();\n        return;\n      }\n      if (choice[0] === 'Destroyer') {\n        (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard)().place((0,_Battleship__WEBPACK_IMPORTED_MODULE_2__.Ship)().Destroyer, coordinates);\n        choice.shift();\n        return;\n      }\n      if (choice[0] === 'Submarine') {\n        (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard)().place((0,_Battleship__WEBPACK_IMPORTED_MODULE_2__.Ship)().Submarine, coordinates);\n        choice.shift();\n        return;\n      }\n      if (choice[0] === 'Battleship') {\n        (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard)().place((0,_Battleship__WEBPACK_IMPORTED_MODULE_2__.Ship)().Battleship, coordinates);\n        choice.shift();\n        return;\n      }\n    });\n  });\n});\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;