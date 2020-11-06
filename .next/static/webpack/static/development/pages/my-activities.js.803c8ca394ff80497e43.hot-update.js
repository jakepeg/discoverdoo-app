webpackHotUpdate("static/development/pages/my-activities.js",{

/***/ "./pages/my-activities.js":
/*!********************************!*\
  !*** ./pages/my-activities.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_activityList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/activityList */ \"./components/activityList.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ \"./actions/index.js\");\n/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth0 */ \"./services/auth0.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Documents/discoverdoo-app/pages/my-activities.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar MyActivities = function MyActivities() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      activities = _useState[0],\n      setActivities = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"getMyActivities\"])(js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('sub')).then(function (data) {\n      return setActivities(data);\n    });\n    console.log(getA);\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, \"DiscoverDoo - My activities\"), __jsx(\"meta\", {\n    name: \"title\",\n    content: \"DiscoverDoo fun finder\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"contain home-page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated() && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"rowz\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, activities)), _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated() === false && __jsx(\"div\", {\n    className: \"rowz\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, \"You need to sign in to see your activities\"))));\n}; // export async function getInitialProps() {\n//   const activities = await getMyActivities(Cookies.get('sub'))\n//   return {\n//     props: {activities}\n//   }\n// }\n\n\n_s(MyActivities, \"1F2cFjeXEAcqtnXRupaUdcqpqWI=\");\n\n_c = MyActivities;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyActivities);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyActivities\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9teS1hY3Rpdml0aWVzLmpzP2VkMTUiXSwibmFtZXMiOlsiTXlBY3Rpdml0aWVzIiwidXNlU3RhdGUiLCJhY3Rpdml0aWVzIiwic2V0QWN0aXZpdGllcyIsInVzZUVmZmVjdCIsImdldE15QWN0aXZpdGllcyIsIkNvb2tpZXMiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJnZXRBIiwiYXV0aDAiLCJpc0F1dGhlbnRpY2F0ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQUEsa0JBRVdDLHNEQUFRLEVBRm5CO0FBQUEsTUFFbEJDLFVBRmtCO0FBQUEsTUFFTkMsYUFGTTs7QUFJekJDLHlEQUFTLENBQUMsWUFBSTtBQUVaQyxvRUFBZSxDQUFDQyxnREFBTyxDQUFDQyxHQUFSLENBQVksS0FBWixDQUFELENBQWYsQ0FBb0NDLElBQXBDLENBQXlDLFVBQUFDLElBQUk7QUFBQSxhQUFJTixhQUFhLENBQUNNLElBQUQsQ0FBakI7QUFBQSxLQUE3QztBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBWjtBQUNBLEdBSk8sRUFJTixFQUpNLENBQVQ7QUFNQSxTQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREYsRUFFRTtBQUFNLFFBQUksRUFBQyxPQUFYO0FBQW1CLFdBQU8sRUFBQyx3QkFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFLRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0lDLHVEQUFLLENBQUNDLGVBQU4sTUFDSixtRUFDSTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS1osVUFBTCxDQVBKLENBRkEsRUFZSVcsdURBQUssQ0FBQ0MsZUFBTixPQUE0QixLQUE1QixJQUNBO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBREYsQ0FiSixDQUxGLENBREY7QUEwQkQsQ0FwQ0QsQyxDQXNDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztHQTVDTWQsWTs7S0FBQUEsWTtBQThDU0EsMkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9teS1hY3Rpdml0aWVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBY3Rpdml0eUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9hY3Rpdml0eUxpc3QnXG5pbXBvcnQgeyBnZXRNeUFjdGl2aXRpZXMgfSBmcm9tICcuLi9hY3Rpb25zJ1xuaW1wb3J0IGF1dGgwIGZyb20gJy4uL3NlcnZpY2VzL2F1dGgwJ1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jb25zdCBNeUFjdGl2aXRpZXMgPSAoKSA9PiB7XG5cbiAgY29uc3QgW2FjdGl2aXRpZXMsIHNldEFjdGl2aXRpZXNdID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCk9PntcblxuICAgIGdldE15QWN0aXZpdGllcyhDb29raWVzLmdldCgnc3ViJykpLnRoZW4oZGF0YSA9PiBzZXRBY3Rpdml0aWVzKGRhdGEpKVxuICAgIGNvbnNvbGUubG9nKGdldEEpXG4gICB9LFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RGlzY292ZXJEb28gLSBNeSBhY3Rpdml0aWVzPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRpdGxlXCIgY29udGVudD1cIkRpc2NvdmVyRG9vIGZ1biBmaW5kZXJcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluIGhvbWUtcGFnZVwiPlxuICAgICAgICB7IGF1dGgwLmlzQXV0aGVudGljYXRlZCgpICYmXG4gICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93elwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiA8QWN0aXZpdHlMaXN0IFxuICAgICAgICAgIGFjdGl2aXRpZXM9e2FjdGl2aXRpZXN9XG4gICAgICAgICAgdGl0bGU9XCJNeVwiXG4gICAgICAgICAgLz4gKi99XG4gICAgICAgICAgPHA+eyBhY3Rpdml0aWVzIH08L3A+XG4gICAgICA8Lz5cbiAgICAgICAgfVxuICAgICAgICB7IGF1dGgwLmlzQXV0aGVudGljYXRlZCgpID09PSBmYWxzZSAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93elwiPlxuICAgICAgICAgICAgPGgyPllvdSBuZWVkIHRvIHNpZ24gaW4gdG8gc2VlIHlvdXIgYWN0aXZpdGllczwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbml0aWFsUHJvcHMoKSB7XG4gIFxuLy8gICBjb25zdCBhY3Rpdml0aWVzID0gYXdhaXQgZ2V0TXlBY3Rpdml0aWVzKENvb2tpZXMuZ2V0KCdzdWInKSlcbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge2FjdGl2aXRpZXN9XG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgTXlBY3Rpdml0aWVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/my-activities.js\n");

/***/ })

})