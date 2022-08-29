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

/***/ "./src/AddTaskButton.js":
/*!******************************!*\
  !*** ./src/AddTaskButton.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function AddTaskButton() {\r\n   const addTaskButton = document.createElement('button');\r\n   addTaskButton.type = 'text'\r\n   addTaskButton.classList.add('add__todo')\r\n   addTaskButton.innerText = 'Add task +'\r\n   return addTaskButton\r\n})());\n\n//# sourceURL=webpack://todo-list/./src/AddTaskButton.js?");

/***/ }),

/***/ "./src/Header.js":
/*!***********************!*\
  !*** ./src/Header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function Header() {\r\n   const header = document.createElement('h1');\r\n   header.innerText = 'Todo List'\r\n   return header\r\n})());\n\n//# sourceURL=webpack://todo-list/./src/Header.js?");

/***/ }),

/***/ "./src/StateButtons.js":
/*!*****************************!*\
  !*** ./src/StateButtons.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function StateButtons() {\r\n   const stateButtons = document.createElement('div');\r\n   stateButtons.classList.add('state__btns')\r\n   stateButtons.innerHTML = `\r\n   <button type=\"button\" class=\"all\">All</button>\r\n   <button type=\"button\" class=\"done\">Done</button>\r\n   <button type=\"button\" class=\"active\">Active</button>\r\n   `\r\n   return stateButtons\r\n})());\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/StateButtons.js?");

/***/ }),

/***/ "./src/TodoItem.js":
/*!*************************!*\
  !*** ./src/TodoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoItem)\n/* harmony export */ });\nfunction TodoItem(name, description, taskDate, isDone, taskId, isImportant) {\r\n   const todo = document.createElement('div')\r\n\r\n   todo.setAttribute('taskid', taskId);\r\n   todo.classList.add('todo')\r\n\r\n   isImportant ? todo.classList.add('task__important') : ''\r\n\r\n   todo.innerHTML = `\r\n   <p class=\"task__description\">${description}</p>\r\n   <p class=\"task__date\">${taskDate}</p>\r\n   <input type=\"checkbox\" name=\"isdone\" id=\"todo__isdone\" ${isDone ? \"checked\" : \"\"} >\r\n   <p class=\"task__name\">${name}</p>\r\n   <button type=\"button\" class=\"todo__delete\">Delete</button>\r\n   <button type=\"button\" class=\"todo__edit\">Edit</button>\r\n   `\r\n\r\n   return todo\r\n}\n\n//# sourceURL=webpack://todo-list/./src/TodoItem.js?");

/***/ }),

/***/ "./src/TodoList.js":
/*!*************************!*\
  !*** ./src/TodoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function TodoList() {\r\n   const todoList = document.createElement('ul');\r\n   todoList.classList.add('todos')\r\n   return todoList\r\n})());\n\n//# sourceURL=webpack://todo-list/./src/TodoList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./src/Header.js\");\n/* harmony import */ var _AddTaskButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddTaskButton */ \"./src/AddTaskButton.js\");\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoList */ \"./src/TodoList.js\");\n/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoItem */ \"./src/TodoItem.js\");\n/* harmony import */ var _StateButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StateButtons */ \"./src/StateButtons.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst todoItems = [\r\n   { taskName: 'task1', taskDescription: 'description for task1', taskDate: '10-10-2011', isDone: false, isImportant: false },\r\n   { taskName: 'task2', taskDescription: 'description for task2', taskDate: '10-10-2012', isDone: true, isImportant: true },\r\n   { taskName: 'task3', taskDescription: 'description for task3', taskDate: '10-10-2013', isDone: false, isImportant: false },\r\n   { taskName: 'task4', taskDescription: 'description for task4', taskDate: '10-10-2014', isDone: true, isImportant: true },\r\n   { taskName: 'task5', taskDescription: 'description for task5', taskDate: '10-10-2015', isDone: false, isImportant: false }\r\n]\r\n\r\nconst container = document.querySelector('#container')\r\ncontainer.appendChild(_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\ncontainer.appendChild(_AddTaskButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\r\ncontainer.appendChild(_TodoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\r\n\r\nconst todoList = document.querySelector('.todos')\r\ncontainer.appendChild(_StateButtons__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\r\n\r\nconst renderTodoItems = () => todoItems.forEach(item => {\r\n   let taskId = todoItems.indexOf(item) + 1\r\n   todoList.appendChild((0,_TodoItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(item.taskName, item.taskDescription, item.taskDate, item.isDone, taskId, item.isImportant))\r\n})\r\nrenderTodoItems()\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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