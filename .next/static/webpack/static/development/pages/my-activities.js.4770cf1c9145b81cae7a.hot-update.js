webpackHotUpdate("static/development/pages/my-activities.js",{

/***/ "./pages/my-activities.js":
/*!********************************!*\
  !*** ./pages/my-activities.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_activityList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/activityList */ \"./components/activityList.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ \"./actions/index.js\");\n/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth0 */ \"./services/auth0.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Dev/discoverdoo-app/pages/my-activities.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nvar MyActivities = function MyActivities() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      activities = _useState[0],\n      setActivities = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('hidden'),\n      createMessage = _useState2[0],\n      setCreateMessage = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    Object(_actions__WEBPACK_IMPORTED_MODULE_3__[\"getMyActivities\"])(js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('sub')).then(function (data) {\n      return setActivities(data);\n    });\n\n    if (js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('action') === 'create') {\n      console.log('new activity');\n      setCreateMessage('visible');\n      js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove('action');\n    } // if it exists show the new activity message - Your new listing will be reviewed before it is pulished on the main directory, it will appear within 24 hours. In the meantime you can view the listing here, on your My Activities page\n    // remove the actions cookie\n\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    className: \"jsx-3362041222\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, \"DiscoverDoo - My activities\"), __jsx(\"meta\", {\n    name: \"title\",\n    content: \"DiscoverDoo fun finder\",\n    className: \"jsx-3362041222\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"jsx-3362041222\" + \" \" + \"contain home-page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    className: \"jsx-3362041222\" + \" \" + (createMessage || \"\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, \"Your new listing will be reviewed before it is published on the main directory, it will appear within 24 hours. In the meantime you can view the listing here, on your My Activities page\"), _services_auth0__WEBPACK_IMPORTED_MODULE_4__[\"default\"].isAuthenticated() && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"jsx-3362041222\" + \" \" + \"rowz\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }), __jsx(_components_activityList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    activities: activities,\n    title: \"My\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  })), _services_auth0__WEBPACK_IMPORTED_MODULE_4__[\"default\"].isAuthenticated() === false && __jsx(\"div\", {\n    className: \"jsx-3362041222\" + \" \" + \"rowz\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, __jsx(\"h2\", {\n    className: \"jsx-3362041222\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, \"You need to sign in to see your activities\"))), __jsx(\"div\", {\n    className: \"jsx-3362041222\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"3362041222\",\n    __self: _this\n  }, \".hidden.jsx-3362041222{display:none;}.visible.jsx-3362041222{display:inline-block;font-weight:500;margin-top:50px;}@media (max-width:1130px){}@media (max-width:992px){}@media (max-width:768px){}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EZXYvRGV2L2Rpc2NvdmVyZG9vLWFwcC9wYWdlcy9teS1hY3Rpdml0aWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEZ0IsQUFJc0IsQUFJUSxhQUh2QixRQUlrQixnQkFDQSxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL0Rldi9EZXYvZGlzY292ZXJkb28tYXBwL3BhZ2VzL215LWFjdGl2aXRpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFjdGl2aXR5TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2FjdGl2aXR5TGlzdCdcbmltcG9ydCB7IGdldE15QWN0aXZpdGllcyB9IGZyb20gJy4uL2FjdGlvbnMnXG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vc2VydmljZXMvYXV0aDAnXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmNvbnN0IE15QWN0aXZpdGllcyA9ICgpID0+IHtcblxuICBjb25zdCBbYWN0aXZpdGllcywgc2V0QWN0aXZpdGllc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjcmVhdGVNZXNzYWdlLCBzZXRDcmVhdGVNZXNzYWdlXSA9IHVzZVN0YXRlKCdoaWRkZW4nKTtcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBnZXRNeUFjdGl2aXRpZXMoQ29va2llcy5nZXQoJ3N1YicpKS50aGVuKGRhdGEgPT4gc2V0QWN0aXZpdGllcyhkYXRhKSlcbiAgICBpZiAoQ29va2llcy5nZXQoJ2FjdGlvbicpID09PSAnY3JlYXRlJykge1xuICAgICAgY29uc29sZS5sb2coJ25ldyBhY3Rpdml0eScpXG4gICAgICBzZXRDcmVhdGVNZXNzYWdlKCd2aXNpYmxlJylcbiAgICAgIENvb2tpZXMucmVtb3ZlKCdhY3Rpb24nKVxuICAgIH1cblxuICAvLyBpZiBpdCBleGlzdHMgc2hvdyB0aGUgbmV3IGFjdGl2aXR5IG1lc3NhZ2UgLSBZb3VyIG5ldyBsaXN0aW5nIHdpbGwgYmUgcmV2aWV3ZWQgYmVmb3JlIGl0IGlzIHB1bGlzaGVkIG9uIHRoZSBtYWluIGRpcmVjdG9yeSwgaXQgd2lsbCBhcHBlYXIgd2l0aGluIDI0IGhvdXJzLiBJbiB0aGUgbWVhbnRpbWUgeW91IGNhbiB2aWV3IHRoZSBsaXN0aW5nIGhlcmUsIG9uIHlvdXIgTXkgQWN0aXZpdGllcyBwYWdlXG4gIC8vIHJlbW92ZSB0aGUgYWN0aW9ucyBjb29raWVcbiAgIH0sW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5EaXNjb3ZlckRvbyAtIE15IGFjdGl2aXRpZXM8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidGl0bGVcIiBjb250ZW50PVwiRGlzY292ZXJEb28gZnVuIGZpbmRlclwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW4gaG9tZS1wYWdlXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9e2NyZWF0ZU1lc3NhZ2V9PllvdXIgbmV3IGxpc3Rpbmcgd2lsbCBiZSByZXZpZXdlZCBiZWZvcmUgaXQgaXMgcHVibGlzaGVkIG9uIHRoZSBtYWluIGRpcmVjdG9yeSwgaXQgd2lsbCBhcHBlYXIgd2l0aGluIDI0IGhvdXJzLiBJbiB0aGUgbWVhbnRpbWUgeW91IGNhbiB2aWV3IHRoZSBsaXN0aW5nIGhlcmUsIG9uIHlvdXIgTXkgQWN0aXZpdGllcyBwYWdlPC9oMz5cbiAgICAgICAgeyBhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3d6XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxBY3Rpdml0eUxpc3QgXG4gICAgICAgICAgICBhY3Rpdml0aWVzPXthY3Rpdml0aWVzfVxuICAgICAgICAgICAgdGl0bGU9XCJNeVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICAgICAgfVxuICAgICAgICB7IGF1dGgwLmlzQXV0aGVudGljYXRlZCgpID09PSBmYWxzZSAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93elwiPlxuICAgICAgICAgICAgPGgyPllvdSBuZWVkIHRvIHNpZ24gaW4gdG8gc2VlIHlvdXIgYWN0aXZpdGllczwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgPC9kaXY+XG5cblxuXG5cbiAgICA8c3R5bGUganN4PntgXG5cbiAgICAgIC5oaWRkZW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAudmlzaWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExMzBweCkge1xuXG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuXG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuXG5cblxuXG5cblxuXG5cblxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QWN0aXZpdGllcyJdfQ== */\\n/*@ sourceURL=/Users/Dev/Dev/discoverdoo-app/pages/my-activities.js */\"));\n};\n\n_s(MyActivities, \"iCuFT9QVtBWxStDYcHMHULg5ing=\");\n\n_c = MyActivities;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyActivities);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyActivities\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9teS1hY3Rpdml0aWVzLmpzP2VkMTUiXSwibmFtZXMiOlsiTXlBY3Rpdml0aWVzIiwidXNlU3RhdGUiLCJhY3Rpdml0aWVzIiwic2V0QWN0aXZpdGllcyIsImNyZWF0ZU1lc3NhZ2UiLCJzZXRDcmVhdGVNZXNzYWdlIiwidXNlRWZmZWN0IiwiZ2V0TXlBY3Rpdml0aWVzIiwiQ29va2llcyIsImdldCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlbW92ZSIsImF1dGgwIiwiaXNBdXRoZW50aWNhdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUFBLGtCQUVXQyxzREFBUSxDQUFDLEVBQUQsQ0FGbkI7QUFBQSxNQUVsQkMsVUFGa0I7QUFBQSxNQUVOQyxhQUZNOztBQUFBLG1CQUdpQkYsc0RBQVEsQ0FBQyxRQUFELENBSHpCO0FBQUEsTUFHbEJHLGFBSGtCO0FBQUEsTUFHSEMsZ0JBSEc7O0FBS3pCQyx5REFBUyxDQUFDLFlBQUk7QUFDWkMsb0VBQWUsQ0FBQ0MsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosQ0FBRCxDQUFmLENBQW9DQyxJQUFwQyxDQUF5QyxVQUFBQyxJQUFJO0FBQUEsYUFBSVIsYUFBYSxDQUFDUSxJQUFELENBQWpCO0FBQUEsS0FBN0M7O0FBQ0EsUUFBSUgsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosTUFBMEIsUUFBOUIsRUFBd0M7QUFDdENHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFDQVIsc0JBQWdCLENBQUMsU0FBRCxDQUFoQjtBQUNBRyxzREFBTyxDQUFDTSxNQUFSLENBQWUsUUFBZjtBQUNELEtBTlcsQ0FRZDtBQUNBOztBQUNFLEdBVk8sRUFVTixFQVZNLENBQVQ7QUFZQSxTQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERixFQUVFO0FBQU0sUUFBSSxFQUFDLE9BQVg7QUFBbUIsV0FBTyxFQUFDLHdCQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0U7QUFBQSx3Q0FBZSxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx5Q0FBZVYsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlNQURGLEVBRUlXLHVEQUFLLENBQUNDLGVBQU4sTUFDRixtRUFDSTtBQUFBLHdDQUFlLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBR0ksTUFBQyxnRUFBRDtBQUNBLGNBQVUsRUFBRWQsVUFEWjtBQUVBLFNBQUssRUFBQyxJQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQUhGLEVBWUlhLHVEQUFLLENBQUNDLGVBQU4sT0FBNEIsS0FBNUIsSUFDQTtBQUFBLHdDQUFlLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrREFERixDQWJKLENBTEYsRUF1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkJBO0FBQUE7QUFBQTtBQUFBLG9sSEFERjtBQWlFRCxDQWxGRDs7R0FBTWhCLFk7O0tBQUFBLFk7QUFvRlNBLDJFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbXktYWN0aXZpdGllcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQWN0aXZpdHlMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvYWN0aXZpdHlMaXN0J1xuaW1wb3J0IHsgZ2V0TXlBY3Rpdml0aWVzIH0gZnJvbSAnLi4vYWN0aW9ucydcbmltcG9ydCBhdXRoMCBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoMCdcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuY29uc3QgTXlBY3Rpdml0aWVzID0gKCkgPT4ge1xuXG4gIGNvbnN0IFthY3Rpdml0aWVzLCBzZXRBY3Rpdml0aWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2NyZWF0ZU1lc3NhZ2UsIHNldENyZWF0ZU1lc3NhZ2VdID0gdXNlU3RhdGUoJ2hpZGRlbicpO1xuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGdldE15QWN0aXZpdGllcyhDb29raWVzLmdldCgnc3ViJykpLnRoZW4oZGF0YSA9PiBzZXRBY3Rpdml0aWVzKGRhdGEpKVxuICAgIGlmIChDb29raWVzLmdldCgnYWN0aW9uJykgPT09ICdjcmVhdGUnKSB7XG4gICAgICBjb25zb2xlLmxvZygnbmV3IGFjdGl2aXR5JylcbiAgICAgIHNldENyZWF0ZU1lc3NhZ2UoJ3Zpc2libGUnKVxuICAgICAgQ29va2llcy5yZW1vdmUoJ2FjdGlvbicpXG4gICAgfVxuXG4gIC8vIGlmIGl0IGV4aXN0cyBzaG93IHRoZSBuZXcgYWN0aXZpdHkgbWVzc2FnZSAtIFlvdXIgbmV3IGxpc3Rpbmcgd2lsbCBiZSByZXZpZXdlZCBiZWZvcmUgaXQgaXMgcHVsaXNoZWQgb24gdGhlIG1haW4gZGlyZWN0b3J5LCBpdCB3aWxsIGFwcGVhciB3aXRoaW4gMjQgaG91cnMuIEluIHRoZSBtZWFudGltZSB5b3UgY2FuIHZpZXcgdGhlIGxpc3RpbmcgaGVyZSwgb24geW91ciBNeSBBY3Rpdml0aWVzIHBhZ2VcbiAgLy8gcmVtb3ZlIHRoZSBhY3Rpb25zIGNvb2tpZVxuICAgfSxbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkRpc2NvdmVyRG9vIC0gTXkgYWN0aXZpdGllczwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aXRsZVwiIGNvbnRlbnQ9XCJEaXNjb3ZlckRvbyBmdW4gZmluZGVyXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbiBob21lLXBhZ2VcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT17Y3JlYXRlTWVzc2FnZX0+WW91ciBuZXcgbGlzdGluZyB3aWxsIGJlIHJldmlld2VkIGJlZm9yZSBpdCBpcyBwdWJsaXNoZWQgb24gdGhlIG1haW4gZGlyZWN0b3J5LCBpdCB3aWxsIGFwcGVhciB3aXRoaW4gMjQgaG91cnMuIEluIHRoZSBtZWFudGltZSB5b3UgY2FuIHZpZXcgdGhlIGxpc3RpbmcgaGVyZSwgb24geW91ciBNeSBBY3Rpdml0aWVzIHBhZ2U8L2gzPlxuICAgICAgICB7IGF1dGgwLmlzQXV0aGVudGljYXRlZCgpICYmXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd3pcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEFjdGl2aXR5TGlzdCBcbiAgICAgICAgICAgIGFjdGl2aXRpZXM9e2FjdGl2aXRpZXN9XG4gICAgICAgICAgICB0aXRsZT1cIk15XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICAgICB9XG4gICAgICAgIHsgYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkgPT09IGZhbHNlICYmXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3d6XCI+XG4gICAgICAgICAgICA8aDI+WW91IG5lZWQgdG8gc2lnbiBpbiB0byBzZWUgeW91ciBhY3Rpdml0aWVzPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICA8L2Rpdj5cblxuXG5cblxuICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgLmhpZGRlbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC52aXNpYmxlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTEzMHB4KSB7XG5cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG5cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cblxuXG5cblxuXG5cblxuXG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBY3Rpdml0aWVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/my-activities.js\n");

/***/ })

})