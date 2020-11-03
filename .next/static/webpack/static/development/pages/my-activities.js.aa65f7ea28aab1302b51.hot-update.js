webpackHotUpdate("static/development/pages/my-activities.js",{

/***/ "./pages/my-activities.js":
/*!********************************!*\
  !*** ./pages/my-activities.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_activityList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/activityList */ \"./components/activityList.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ \"./actions/index.js\");\n/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth0 */ \"./services/auth0.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Documents/discoverdoo-app/pages/my-activities.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar MyActivities = function MyActivities(props) {\n  var filterActivities = function filterActivities(activities) {\n    return activities.filter(function (a) {\n      return a.userId && a.userId.includes(js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get('sub'));\n    });\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, \"DiscoverDoo - My activities\"), __jsx(\"meta\", {\n    name: \"title\",\n    content: \"DiscoverDoo fun finder\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"contain home-page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, _services_auth0__WEBPACK_IMPORTED_MODULE_5__[\"default\"].isAuthenticated() && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"rowz\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }), __jsx(_components_activityList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    activities: filterActivities(props.activities) || [],\n    title: \"My\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  })), _services_auth0__WEBPACK_IMPORTED_MODULE_5__[\"default\"].isAuthenticated() === false && __jsx(\"div\", {\n    className: \"rowz\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, \"You need to sign in to see your activities\"))));\n};\n\n_c = MyActivities;\nMyActivities.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  var activities;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return Object(_actions__WEBPACK_IMPORTED_MODULE_4__[\"getActivities\"])();\n\n        case 2:\n          activities = _context.sent;\n          return _context.abrupt(\"return\", {\n            activities: activities\n          });\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyActivities);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyActivities\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9teS1hY3Rpdml0aWVzLmpzP2VkMTUiXSwibmFtZXMiOlsiTXlBY3Rpdml0aWVzIiwicHJvcHMiLCJmaWx0ZXJBY3Rpdml0aWVzIiwiYWN0aXZpdGllcyIsImZpbHRlciIsImEiLCJ1c2VySWQiLCJpbmNsdWRlcyIsIkNvb2tpZXMiLCJnZXQiLCJhdXRoMCIsImlzQXV0aGVudGljYXRlZCIsImdldEluaXRpYWxQcm9wcyIsImdldEFjdGl2aXRpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBRTlCLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsVUFBVSxFQUFJO0FBQ3JDLFdBQU9BLFVBQVUsQ0FBQ0MsTUFBWCxDQUFrQixVQUFDQyxDQUFELEVBQU87QUFDOUIsYUFBT0EsQ0FBQyxDQUFDQyxNQUFGLElBQVlELENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxRQUFULENBQWtCQyxnREFBTyxDQUFDQyxHQUFSLENBQVksS0FBWixDQUFsQixDQUFuQjtBQUNELEtBRk0sQ0FBUDtBQUdELEdBSkQ7O0FBTUEsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURGLEVBRUU7QUFBTSxRQUFJLEVBQUMsT0FBWDtBQUFtQixXQUFPLEVBQUMsd0JBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJQyx1REFBSyxDQUFDQyxlQUFOLE1BQ0osbUVBQ0k7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFHSSxNQUFDLGdFQUFEO0FBQ0EsY0FBVSxFQUFFVCxnQkFBZ0IsQ0FBQ0QsS0FBSyxDQUFDRSxVQUFQLENBQWhCLElBQXNDLEVBRGxEO0FBRUEsU0FBSyxFQUFDLElBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLENBRkEsRUFXSU8sdURBQUssQ0FBQ0MsZUFBTixPQUE0QixLQUE1QixJQUNBO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBREYsQ0FaSixDQUxGLENBREY7QUF5QkQsQ0FqQ0Q7O0tBQU1YLFk7QUFtQ05BLFlBQVksQ0FBQ1ksZUFBYixpTUFBK0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDRkMsOERBQWEsRUFEWDs7QUFBQTtBQUNyQlYsb0JBRHFCO0FBQUEsMkNBRXBCO0FBQ0xBLHNCQUFVLEVBQVZBO0FBREssV0FGb0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBL0I7QUFPZUgsMkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9teS1hY3Rpdml0aWVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGl2aXR5TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2FjdGl2aXR5TGlzdCdcbmltcG9ydCB7IGdldEFjdGl2aXRpZXMgfSBmcm9tICcuLi9hY3Rpb25zJ1xuaW1wb3J0IGF1dGgwIGZyb20gJy4uL3NlcnZpY2VzL2F1dGgwJ1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jb25zdCBNeUFjdGl2aXRpZXMgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBmaWx0ZXJBY3Rpdml0aWVzID0gYWN0aXZpdGllcyA9PiB7XG4gICAgcmV0dXJuIGFjdGl2aXRpZXMuZmlsdGVyKChhKSA9PiB7XG4gICAgICByZXR1cm4gYS51c2VySWQgJiYgYS51c2VySWQuaW5jbHVkZXMoQ29va2llcy5nZXQoJ3N1YicpKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkRpc2NvdmVyRG9vIC0gTXkgYWN0aXZpdGllczwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aXRsZVwiIGNvbnRlbnQ9XCJEaXNjb3ZlckRvbyBmdW4gZmluZGVyXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbiBob21lLXBhZ2VcIj5cbiAgICAgICAgeyBhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd3pcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8QWN0aXZpdHlMaXN0IFxuICAgICAgICAgIGFjdGl2aXRpZXM9e2ZpbHRlckFjdGl2aXRpZXMocHJvcHMuYWN0aXZpdGllcykgfHwgW119XG4gICAgICAgICAgdGl0bGU9XCJNeVwiXG4gICAgICAgICAgLz5cbiAgICAgIDwvPlxuICAgICAgICB9XG4gICAgICAgIHsgYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkgPT09IGZhbHNlICYmXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3d6XCI+XG4gICAgICAgICAgICA8aDI+WW91IG5lZWQgdG8gc2lnbiBpbiB0byBzZWUgeW91ciBhY3Rpdml0aWVzPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuTXlBY3Rpdml0aWVzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhY3Rpdml0aWVzID0gYXdhaXQgZ2V0QWN0aXZpdGllcygpXG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2aXRpZXNcbiAgICB9XG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgTXlBY3Rpdml0aWVzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/my-activities.js\n");

/***/ })

})