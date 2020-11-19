webpackHotUpdate("static/development/pages/activity/[id].js",{

/***/ "./components/recommended.js":
/*!***********************************!*\
  !*** ./components/recommended.js ***!
  \***********************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ \"./actions/index.js\");\n/* harmony import */ var _activityList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activityList */ \"./components/activityList.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Documents/discoverdoo-app/components/recommended.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar Recommended = function Recommended(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var id = router.query.id;\n  var cat = id;\n  var activities = props.activities;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"contain top-space\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(_activityList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    activities: props.activities || [],\n    title: \"Similar \",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 10\n    }\n  })));\n};\n\n_s(Recommended, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Recommended;\nfunction getServerSideProps() {\n  return _getServerSideProps.apply(this, arguments);\n}\n\nfunction _getServerSideProps() {\n  _getServerSideProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var activities;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log('getServerSideProps');\n            _context.next = 3;\n            return Object(_actions__WEBPACK_IMPORTED_MODULE_4__[\"getRecommendedActivities\"])();\n\n          case 3:\n            activities = _context.sent;\n            return _context.abrupt(\"return\", {\n              props: {\n                activities: activities\n              }\n            });\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getServerSideProps.apply(this, arguments);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Recommended);\n\nvar _c;\n\n$RefreshReg$(_c, \"Recommended\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlY29tbWVuZGVkLmpzPzYwMDQiXSwibmFtZXMiOlsiUmVjb21tZW5kZWQiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJjYXQiLCJhY3Rpdml0aWVzIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29uc29sZSIsImxvZyIsImdldFJlY29tbWVuZGVkQWN0aXZpdGllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzdCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFENkIsTUFFckJDLEVBRnFCLEdBRWRGLE1BQU0sQ0FBQ0csS0FGTyxDQUVyQkQsRUFGcUI7QUFHN0IsTUFBTUUsR0FBRyxHQUFHRixFQUFaO0FBSDZCLE1BSXJCRyxVQUpxQixHQUlOTixLQUpNLENBSXJCTSxVQUpxQjtBQU03QixTQUNFLG1FQUNFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxNQUFDLHFEQUFEO0FBQ0EsY0FBVSxFQUFFTixLQUFLLENBQUNNLFVBQU4sSUFBb0IsRUFEaEM7QUFFQSxTQUFLLEVBQUMsVUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREgsQ0FERixDQURGO0FBVUQsQ0FoQkQ7O0dBQU1QLFc7VUFDV0cscUQ7OztLQURYSCxXO0FBa0JDLFNBQWVRLGtCQUF0QjtBQUFBO0FBQUE7Ozt5TUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTEMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBREs7QUFBQSxtQkFFb0JDLHlFQUF3QixFQUY1Qzs7QUFBQTtBQUVDSixzQkFGRDtBQUFBLDZDQUdFO0FBQ0xOLG1CQUFLLEVBQUU7QUFBQ00sMEJBQVUsRUFBVkE7QUFBRDtBQURGLGFBSEY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQVFRUCwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcmVjb21tZW5kZWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IGdldFJlY29tbWVuZGVkQWN0aXZpdGllcyB9IGZyb20gJy4uL2FjdGlvbnMnXG5pbXBvcnQgQWN0aXZpdHlMaXN0IGZyb20gJy4vYWN0aXZpdHlMaXN0J1xuXG5jb25zdCBSZWNvbW1lbmRlZCA9IChwcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcbiAgY29uc3QgY2F0ID0gaWRcbiAgY29uc3QgeyBhY3Rpdml0aWVzIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbiB0b3Atc3BhY2VcIj5cbiAgICAgICAgIDxBY3Rpdml0eUxpc3QgXG4gICAgICAgICBhY3Rpdml0aWVzPXtwcm9wcy5hY3Rpdml0aWVzIHx8IFtdfSBcbiAgICAgICAgIHRpdGxlPVwiU2ltaWxhciBcIiAgXG4gICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc29sZS5sb2coJ2dldFNlcnZlclNpZGVQcm9wcycpXG4gIGNvbnN0IGFjdGl2aXRpZXMgPSBhd2FpdCBnZXRSZWNvbW1lbmRlZEFjdGl2aXRpZXMoKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7YWN0aXZpdGllc31cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNvbW1lbmRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/recommended.js\n");

/***/ })

})