(window["webpackChunkhello_modern"] = window["webpackChunkhello_modern"] || []).push([["main"],{

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _todoModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoModel */ "./src/todoModel.js");
/* harmony import */ var _todoModel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_todoModel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TodoApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoApp */ "./src/TodoApp.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_af6dacb2e0ca6f75b4843eef0b4234f3/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_af6dacb2e0ca6f75b4843eef0b4234f3/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js */ "./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _jsxFileName = "C:\\Users\\skye_\\hello-modern\\src\\App.jsx",
    _this = undefined;





var model = new _todoModel__WEBPACK_IMPORTED_MODULE_1__.TodoModel('react-todos');

var App = function App() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_TodoApp__WEBPACK_IMPORTED_MODULE_2__.TodoApp, {
    model: model
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 19
  }, _this);
};

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          false
        ) {}

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              false
            ) {}
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./src/TodoApp.jsx":
/*!*************************!*\
  !*** ./src/TodoApp.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoApp": function() { return /* binding */ TodoApp; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _TodoFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoFooter */ "./src/TodoFooter.jsx");
/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoItem */ "./src/TodoItem.jsx");
/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TodoItem__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_af6dacb2e0ca6f75b4843eef0b4234f3/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_af6dacb2e0ca6f75b4843eef0b4234f3/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js */ "./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _jsxFileName = "C:\\Users\\skye_\\hello-modern\\src\\TodoApp.jsx",
    _s2 = __webpack_require__.$Refresh$.signature();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function TodoApp(props) {
  _s2();

  var model = props.model;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      editing = _useState2[0],
      setEditing = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      newTodo = _useState4[0],
      setNewTodo = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all'),
      _useState6 = _slicedToArray(_useState5, 2),
      nowShowing = _useState6[0],
      setNowShowing = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState8 = _slicedToArray(_useState7, 2),
      status = _useState8[0],
      setStatus = _useState8[1];

  var ENTER_KEY = 13;
  var ALL_TODOS = 'all';
  var ACTIVE_TODOS = 'active';
  var COMPLETED_TODOS = 'completed';

  function handleChange(event) {
    setNewTodo(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.keyCode === ENTER_KEY) {
      event.preventDefault();
      var val = newTodo.trim();

      if (val) {
        model.addTodo(val);
        setNewTodo('');
      }
    }
  }

  function toggle(todoTodoggle) {
    model.toggle(todoTodoggle);
    setStatus(!status);
  }

  function toggleAll(event) {
    model.toggleAll(event.target.checked);
    setStatus(!status);
  }

  function destroy(todo) {
    model.destroy(todo);
    setStatus(!status);
  }

  function edit(todo) {
    setEditing(todo.id);
  }

  function save(todoToSave, text) {
    model.save(todoToSave, text);
    setEditing(null);
  }

  function cancel() {
    setEditing(null);
  }

  function clearCompleted() {
    model.clearCompleted();
    setStatus(!status);
  }

  function createTodoApp() {
    var _this = this;

    var footer, main;
    var todos = model.todos;
    var shownTodos = todos.filter(function (todo) {
      switch (nowShowing) {
        case ACTIVE_TODOS:
          return !todo.completed;

        case COMPLETED_TODOS:
          return todo.completed;

        default:
          return true;
      }
    });
    var todoItems = shownTodos.map(function (todo) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_TodoItem__WEBPACK_IMPORTED_MODULE_2__.TodoItem, {
        todo: todo,
        onToggle: function onToggle() {
          return toggle(todo);
        },
        onDestroy: function onDestroy() {
          return destroy(todo);
        },
        onEdit: function onEdit() {
          return edit(todo);
        },
        isEditing: editing === todo.id,
        onSave: function onSave(text) {
          return save(todo, text);
        },
        onCancel: function onCancel() {
          return cancel();
        }
      }, todo.id, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 7
      }, _this);
    });
    var activeTodoCount = todos.reduce(function (accum, todo) {
      return todo.completed ? accum : accum + 1;
    }, 0);
    var completedCount = todos.length - activeTodoCount;

    if (activeTodoCount || completedCount) {
      footer = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_TodoFooter__WEBPACK_IMPORTED_MODULE_1__.TodoFooter, {
        count: activeTodoCount,
        completedCount: completedCount,
        nowShowing: nowShowing,
        onClearCompleted: function onClearCompleted() {
          return clearCompleted();
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this);
    }

    if (todos.length) {
      main = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
        className: "main",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          id: "toggle-all",
          className: "toggle-all",
          type: "checkbox",
          onChange: function onChange(event) {
            return toggleAll(event);
          },
          checked: activeTodoCount === 0
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
          htmlFor: "toggle-all"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("ul", {
          className: "todo-list",
          children: todoItems
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this);
    }

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "todoapp",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("header", {
        className: "header",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
          children: "todos"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          className: "new-todo",
          placeholder: "What needs to be done?",
          value: newTodo,
          onKeyDown: function onKeyDown(event) {
            return handleKeyDown(event);
          },
          onChange: function onChange(event) {
            return handleChange(event);
          },
          autoFocus: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, this), main, footer]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, this);
  }

  return createTodoApp();
}

_s2(TodoApp, "1W/y4o+INWuJ5NKLBR8CNHhGW9o=");

_c = TodoApp;

var _c;

__webpack_require__.$Refresh$.register(_c, "TodoApp");

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          false
        ) {}

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              false
            ) {}
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./src/TodoFooter.jsx":
/*!****************************!*\
  !*** ./src/TodoFooter.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoFooter": function() { return /* binding */ TodoFooter; }
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'classNames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_af6dacb2e0ca6f75b4843eef0b4234f3/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_af6dacb2e0ca6f75b4843eef0b4234f3/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js */ "./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _jsxFileName = "C:\\Users\\skye_\\hello-modern\\src\\TodoFooter.jsx";



function TodoFooter(props) {
  var count = props.count,
      completedCount = props.completedCount,
      nowShowing = props.nowShowing,
      onClearCompleted = props.onClearCompleted;
  var activeTodoWord = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(count, 'item');
  var clearButton = null;
  var ALL_TODOS = 'all';
  var ACTIVE_TODOS = 'active';
  var COMPLETED_TODOS = 'completed';

  if (completedCount > 0) {
    clearButton = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      type: "button",
      className: "clear-completed",
      onClick: onClearCompleted,
      children: "Clear completed"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("footer", {
    className: "footer",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      className: "todo-count",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("strong", {
        children: count
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), " ", activeTodoWord, " left"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
      className: "filters",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          // href="#/"
          className: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'classNames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
            selected: nowShowing === ALL_TODOS
          }),
          children: "All"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          // href="#/active"
          className: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'classNames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
            selected: nowShowing === ACTIVE_TODOS
          }),
          children: "Active"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          // href="#/completed"
          className: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'classNames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
            selected: nowShowing === COMPLETED_TODOS
          }),
          children: "Completed"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), clearButton]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
_c = TodoFooter;

var _c;

__webpack_require__.$Refresh$.register(_c, "TodoFooter");

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          false
        ) {}

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              false
            ) {}
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./src/TodoItem.jsx":
/*!**************************!*\
  !*** ./src/TodoItem.jsx ***!
  \**************************/
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/.pnpm/babel-loader@8.2.3_webpack@5.70.0/node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\skye_\\hello-modern\\src\\TodoItem.jsx: Unexpected token (106:1)\n\n\u001b[0m \u001b[90m 104 |\u001b[39m     }\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 105 |\u001b[39m   })\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 106 |\u001b[39m })()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     |\u001b[39m  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 107 |\u001b[39m\u001b[0m\n    at instantiate (C:\\Users\\skye_\\hello-modern\\node_modules\\.pnpm\\@babel+parser@7.17.8\\node_modules\\@babel\\parser\\lib\\index.js:72:32)\n    at constructor (C:\\Users\\skye_\\hello-modern\\node_modules\\.pnpm\\@babel+parser@7.17.8\\node_modules\\@babel\\parser\\lib\\index.js:358:12)\n    at Object.raise (C:\\Users\\skye_\\hello-modern\\node_modules\\.pnpm\\@babel+parser@7.17.8\\node_modules\\@babel\\parser\\lib\\index.js:3334:19)\n    at Object.unexpected (C:\\Users\\skye_\\hello-modern\\node_modules\\.pnpm\\@babel+parser@7.17.8\\node_modules\\@babel\\parser\\lib\\index.js:3372:16)\n    at Object.parseExprAtom (C:\\Users\\skye_\\hello-modern\\node_modules\\.pnpm\\@babel+parser@7.17.8\\node_modules\\@babel\\parser\\lib\\index.js:13014:22)\n    at Object.parseExprAtom (C:\\Users\\skye_\\hello-modern\\node_modules\\.pnpm\\@babel+parser@7.17.8\\node_modules\\@babel\\parser\\lib\\index.js:8033:20)\n    at Object.parseExprSubscripts (C:\\Users\\skye_\\hello-modern\\node_modules\\.pnpm\\@babel+parser@7.17.8\\node_modules\\@babel\\parser\\lib\\index.js:12539:23)\n    at Object.parseUpdate (C:\\Users\\skye_\\hello-modern\\node_modules\\.pnpm\\@babel+parser@7.17.8\\node_modules\\@babel\\parser\\lib\\index.js:12518:21)\n    at Object.parseMaybeUnary (C:\\Users\\skye_\\hello-modern\\node_modules\\.pnpm\\@babel+parser@7.17.8\\node_modules\\@babel\\parser\\lib\\index.js:12489:23)\n    at Object.parseMaybeUnary (C:\\Users\\skye_\\hello-modern\\node_modules\\.pnpm\\@babel+parser@7.17.8\\node_modules\\@babel\\parser\\lib\\index.js:10707:20)");

/***/ }),

/***/ "./src/todoModel.js":
/*!**************************!*\
  !*** ./src/todoModel.js ***!
  \**************************/
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/.pnpm/babel-loader@8.2.3_webpack@5.70.0/node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\skye_\\hello-modern\\src\\todoModel.js: Missing semicolon. (78:1)\n\n\u001b[0m \u001b[90m 76 |\u001b[39m     \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39minform()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 77 |\u001b[39m   }\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 78 |\u001b[39m })()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 79 |\u001b[39m\u001b[0m\n    at instantiate (C:\\Users\\skye_\\hello-modern\\node_modules\\.pnpm\\@babel+parser@7.17.8\\node_modules\\@babel\\parser\\lib\\index.js:72:32)\n    at constructor (C:\\Users\\skye_\\hello-modern\\node_modules\\.pnpm\\@babel+parser@7.17.8\\node_modules\\@babel\\parser\\lib\\index.js:358:12)\n    at Object.raise (C:\\Users\\skye_\\hello-modern\\node_modules\\.pnpm\\@babel+parser@7.17.8\\node_modules\\@babel\\parser\\lib\\index.js:3334:19)\n    at Object.semicolon (C:\\Users\\skye_\\hello-modern\\node_modules\\.pnpm\\@babel+parser@7.17.8\\node_modules\\@babel\\parser\\lib\\index.js:3995:10)\n    at Object.parseVarStatement (C:\\Users\\skye_\\hello-modern\\node_modules\\.pnpm\\@babel+parser@7.17.8\\node_modules\\@babel\\parser\\lib\\index.js:15058:10)\n    at Object.parseVarStatement (C:\\Users\\skye_\\hello-modern\\node_modules\\.pnpm\\@babel+parser@7.17.8\\node_modules\\@babel\\parser\\lib\\index.js:10225:31)\n    at Object.parseStatementContent (C:\\Users\\skye_\\hello-modern\\node_modules\\.pnpm\\@babel+parser@7.17.8\\node_modules\\@babel\\parser\\lib\\index.js:14603:21)\n    at Object.parseStatementContent (C:\\Users\\skye_\\hello-modern\\node_modules\\.pnpm\\@babel+parser@7.17.8\\node_modules\\@babel\\parser\\lib\\index.js:10266:18)\n    at Object.parseStatement (C:\\Users\\skye_\\hello-modern\\node_modules\\.pnpm\\@babel+parser@7.17.8\\node_modules\\@babel\\parser\\lib\\index.js:14528:17)\n    at Object.parseExportDeclaration (C:\\Users\\skye_\\hello-modern\\node_modules\\.pnpm\\@babel+parser@7.17.8\\node_modules\\@babel\\parser\\lib\\index.js:15904:17)");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1648263507978
      var cssReload = __webpack_require__(/*! ./node_modules/.pnpm/mini-css-extract-plugin@2.4.7_webpack@5.70.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.4.7_webpack@5.70.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_pnpm_modern-js_hmr-client_1_2_2_node_modules_modern-js_hmr-client_dist_j-8763f5"], function() { return __webpack_exec__("./node_modules/.pnpm/@modern-js+hmr-client@1.2.2/node_modules/@modern-js/hmr-client/dist/js/node/index.js?&host=localhost&path=/_modern_js_hmr_ws&port=8080"), __webpack_exec__("./node_modules/.pnpm/webpack@5.70.0/node_modules/webpack/hot/dev-server.js"), __webpack_exec__("./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_af6dacb2e0ca6f75b4843eef0b4234f3/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js"), __webpack_exec__("./node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/index.js"), __webpack_exec__("./node_modules/.pnpm/regenerator-runtime@0.13.9/node_modules/regenerator-runtime/runtime.js"), __webpack_exec__("./node_modules/.modern-js/main/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map