/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/connection.js":
/*!******************************!*\
  !*** ./src/js/connection.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _dataHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataHandler */ \"./src/js/dataHandler.js\");\n/**\r\n * It establishes the retrieval of data keys and makes the necessary connection to the API\r\n */\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((query, movies) => {\r\n  query = query.replace(' ', '+');\r\n\r\n  fetch('../../env.json')\r\n    .then((response) => response.json())\r\n    .then((keys) => {\r\n      APICall(query, keys.OMDB_URL, keys.OMDB_KEY, movies);  \r\n    })\r\n    .catch((error) => {\r\n      console.error('An error ocurred while fetching the keys');\r\n      console.error(error);\r\n    });\r\n});\r\n\r\nconst APICall = (query, url, key, movies) => {\r\n  const API_url = `${url}/?apikey=${key}&s=${query}&type=movie`;\r\n\r\n  fetch(API_url)\r\n    .then((response) => response.json())\r\n    .then((content) => {\r\n      content.Search.forEach((entry) => {\r\n        movies.push(entry);\r\n      });\r\n\r\n      (0,_dataHandler__WEBPACK_IMPORTED_MODULE_0__.default)(movies);\r\n    })\r\n    .catch((error) => {\r\n      console.error('There was an error while communicating with the API');\r\n      console.error(error);\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://frontend-tech-test-main/./src/js/connection.js?");

/***/ }),

/***/ "./src/js/constructor.js":
/*!*******************************!*\
  !*** ./src/js/constructor.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/js/render.js\");\n/**\r\n * This function constructs the necessary HTML that's gonna be used\r\n */\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((list) => {\r\n  let html = '';\r\n  \r\n  list.forEach((movie) => {\r\n    html += `\r\n    <div class=\"movie\">\r\n      <div class=\"image-container\">\r\n        <img src=\"${movie.Poster}\" alt=\"Image\" class=\"poster\" />\r\n      </div>\r\n      <div class=\"data-container\">\r\n        <div class=\"title\">${movie.Title}</div>\r\n        <div class=\"year\">Year: ${movie.Year}</div>\r\n      </div>\r\n    </div>\r\n    `\r\n  });\r\n\r\n  (0,_render__WEBPACK_IMPORTED_MODULE_0__.default)(html);\r\n});\r\n\n\n//# sourceURL=webpack://frontend-tech-test-main/./src/js/constructor.js?");

/***/ }),

/***/ "./src/js/dataHandler.js":
/*!*******************************!*\
  !*** ./src/js/dataHandler.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ \"./src/js/constructor.js\");\n/**\r\n * The data handler orders the movies depending on their release year and sends the necessary components to the renderer\r\n */\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((movies) => {\r\n  let list = movies.sort((a, b) => (a.Year > b.Year) ? 1 : (a.Year < b.Year) ? -1 : 0);\r\n\r\n  (0,_constructor__WEBPACK_IMPORTED_MODULE_0__.default)(list);\r\n});\r\n\n\n//# sourceURL=webpack://frontend-tech-test-main/./src/js/dataHandler.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection */ \"./src/js/connection.js\");\n/**\r\n * This main JS file contains all the variables grabbed from the document, as well as\r\n * the event listener assignation\r\n */\r\n\r\n\r\n\r\nconst search_input = document.getElementById('search');\r\nconst search_button = document.getElementById('submit');\r\nconst loading_text = document.getElementById('loading-text');\r\n\r\nlet movies = [];\r\n\r\nconst dataSearch = () => {\r\n  const query = search_input.value;\r\n\r\n  search_input.value = '';\r\n  loading_text.className = 'loading';\r\n\r\n  (0,_connection__WEBPACK_IMPORTED_MODULE_0__.default)(query, movies);\r\n\r\n  loading_text.className = 'loading hidden';\r\n}\r\n\r\nsearch_button.addEventListener('click', () => {\r\n  dataSearch();\r\n});\r\n\r\nsearch_input.addEventListener('keypress', (e) => {\r\n  if (e.key === 'Enter') {\r\n    dataSearch();\r\n  }\r\n})\r\n\n\n//# sourceURL=webpack://frontend-tech-test-main/./src/js/main.js?");

/***/ }),

/***/ "./src/js/render.js":
/*!**************************!*\
  !*** ./src/js/render.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/**\r\n * This function receives the HTML and renders it in the appropriate section\r\n */\r\n\r\nconst section = document.getElementById('main');\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((html) => {\r\n  section.innerHTML = html;\r\n});\r\n\n\n//# sourceURL=webpack://frontend-tech-test-main/./src/js/render.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;