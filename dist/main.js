/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/** ****/ (() => { // webpackBootstrap
/** ****/ 	const __webpack_modules__ = ({

    /***/ './src/index.js':
    /* !**********************!*\
  !*** ./src/index.js ***!
  \**********************/
    /***/ (() => {
      eval('/* eslint-disable require-jsdoc */\nconst playerGrid = document.getElementById(\'playerGrid\');\nconst computerGrid = document.getElementById(\'computerGrid\');\n\nmakePlayerGrid();\nmakeComputerGrid();\nfunction makePlayerGrid() {\n  for (let i = 1; i < (10 * 10) + 1; i++) {\n    const cell = document.createElement(\'div\');\n    cell.classList.add(\'grid-cell\');\n    cell.setAttribute(\'id\', i);\n    cell.style.cssText = `border: 1px solid black;`;\n    playerGrid.appendChild(cell);\n  }\n}\nfunction makeComputerGrid() {\n  for (let i = 1; i < (10 * 10) + 1; i++) {\n    const cell = document.createElement(\'div\');\n    cell.classList.add(\'grid-cell\');\n    cell.setAttribute(\'id\', i);\n    cell.style.cssText = `border: 1px solid black;`;\n    computerGrid.appendChild(cell);\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/index.js?');
      /***/}),

    /** ****/});
  /** **********************************************************************/
  /** ****/
  /** ****/ 	// startup
  /** ****/ 	// Load entry module and return exports
  /** ****/ 	// This entry module can't be inlined because the eval devtool is used.
  /** ****/ 	const __webpack_exports__ = {};
  /** ****/ 	__webpack_modules__['./src/index.js']();
/** ****/
/** ****/ })()
;
