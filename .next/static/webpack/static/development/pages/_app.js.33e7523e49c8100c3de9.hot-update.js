webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/sideMenu.js":
/*!********************************!*\
  !*** ./components/sideMenu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth0 */ \"./services/auth0.js\");\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-burger-menu */ \"./node_modules/react-burger-menu/lib/BurgerMenu.js\");\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Documents/discoverdoo-app/components/sideMenu.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar styles = {\n  bmBurgerButton: {\n    position: 'absolute',\n    width: '32px',\n    height: '26px',\n    right: '26px',\n    top: '20px'\n  },\n  bmBurgerBars: {\n    background: '#ffffff'\n  },\n  bmBurgerBarsHover: {\n    background: '#a90000'\n  },\n  bmCrossButton: {\n    height: '24px',\n    width: '24px'\n  },\n  bmCross: {\n    background: '#ffffff'\n  },\n  bmMenuWrap: {\n    position: 'fixed',\n    height: '100%',\n    top: '-0px'\n  },\n  bmMenu: {\n    background: '#494949',\n    padding: '',\n    fontSize: '1.6em',\n    border: '2px solid #cccccc'\n  },\n  bmMorphShape: {\n    fill: '#373a47'\n  },\n  bmItemList: {\n    color: '#b8b7ad',\n    padding: '1em 0 0 0.8em'\n  },\n  bmItem: {\n    display: 'block',\n    padding: '0.2em 0',\n    color: 'white',\n    fontFamily: 'Paytone One',\n    fontWeight: '300'\n  },\n  bmOverlay: {\n    background: 'rgba(0, 0, 0, 0)'\n  }\n};\n\nvar SideMenu = function SideMenu() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, _services_auth0__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isAuthenticated() && __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__[\"stack\"], {\n    className: \"burger\",\n    right: true,\n    styles: styles,\n    width: '220px',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }, \"Home\"), __jsx(\"a\", {\n    href: \"/create\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }, \"Add activity\"), __jsx(\"a\", {\n    href: \"/my-activities\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, \"My activities\"), __jsx(\"a\", {\n    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_1__[\"default\"].logout,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, \"Logout\")), _services_auth0__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isAuthenticated() === false && __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__[\"stack\"], {\n    className: \"burger\",\n    right: true,\n    styles: styles,\n    width: '220px',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, \"Home\"), __jsx(\"a\", {\n    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loginAddActivity,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }, \"Add activity\"), __jsx(\"a\", {\n    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_1__[\"default\"].login,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }, \"Sign in\")));\n};\n\n_c = SideMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"SideMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGVNZW51LmpzPzU2ODMiXSwibmFtZXMiOlsic3R5bGVzIiwiYm1CdXJnZXJCdXR0b24iLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwicmlnaHQiLCJ0b3AiLCJibUJ1cmdlckJhcnMiLCJiYWNrZ3JvdW5kIiwiYm1CdXJnZXJCYXJzSG92ZXIiLCJibUNyb3NzQnV0dG9uIiwiYm1Dcm9zcyIsImJtTWVudVdyYXAiLCJibU1lbnUiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJib3JkZXIiLCJibU1vcnBoU2hhcGUiLCJmaWxsIiwiYm1JdGVtTGlzdCIsImNvbG9yIiwiYm1JdGVtIiwiZGlzcGxheSIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwiYm1PdmVybGF5IiwiU2lkZU1lbnUiLCJhdXRoMCIsImlzQXV0aGVudGljYXRlZCIsImxvZ291dCIsImxvZ2luQWRkQWN0aXZpdHkiLCJsb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLE1BQU0sR0FBRztBQUNYQyxnQkFBYyxFQUFFO0FBQ2RDLFlBQVEsRUFBRSxVQURJO0FBRWRDLFNBQUssRUFBRSxNQUZPO0FBR2RDLFVBQU0sRUFBRSxNQUhNO0FBSWRDLFNBQUssRUFBRSxNQUpPO0FBS2RDLE9BQUcsRUFBRTtBQUxTLEdBREw7QUFRWEMsY0FBWSxFQUFFO0FBQ1pDLGNBQVUsRUFBRTtBQURBLEdBUkg7QUFXWEMsbUJBQWlCLEVBQUU7QUFDakJELGNBQVUsRUFBRTtBQURLLEdBWFI7QUFjWEUsZUFBYSxFQUFFO0FBQ2JOLFVBQU0sRUFBRSxNQURLO0FBRWJELFNBQUssRUFBRTtBQUZNLEdBZEo7QUFrQlhRLFNBQU8sRUFBRTtBQUNQSCxjQUFVLEVBQUU7QUFETCxHQWxCRTtBQXFCWEksWUFBVSxFQUFFO0FBQ1ZWLFlBQVEsRUFBRSxPQURBO0FBRVZFLFVBQU0sRUFBRSxNQUZFO0FBR1ZFLE9BQUcsRUFBRTtBQUhLLEdBckJEO0FBMEJYTyxRQUFNLEVBQUU7QUFDTkwsY0FBVSxFQUFFLFNBRE47QUFFTk0sV0FBTyxFQUFFLEVBRkg7QUFHTkMsWUFBUSxFQUFFLE9BSEo7QUFJTkMsVUFBTSxFQUFFO0FBSkYsR0ExQkc7QUFnQ1hDLGNBQVksRUFBRTtBQUNaQyxRQUFJLEVBQUU7QUFETSxHQWhDSDtBQW1DWEMsWUFBVSxFQUFFO0FBQ1ZDLFNBQUssRUFBRSxTQURHO0FBRVZOLFdBQU8sRUFBRTtBQUZDLEdBbkNEO0FBdUNYTyxRQUFNLEVBQUU7QUFDTkMsV0FBTyxFQUFFLE9BREg7QUFFTlIsV0FBTyxFQUFFLFNBRkg7QUFHTk0sU0FBSyxFQUFFLE9BSEQ7QUFJTkcsY0FBVSxFQUFFLGFBSk47QUFLTkMsY0FBVSxFQUFFO0FBTE4sR0F2Q0c7QUE4Q1hDLFdBQVMsRUFBRTtBQUNUakIsY0FBVSxFQUFFO0FBREg7QUE5Q0EsQ0FBYjs7QUFtREEsSUFBTWtCLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFFckIsU0FDRSxtRUFDSUMsdURBQUssQ0FBQ0MsZUFBTixNQUNBLE1BQUMsdURBQUQ7QUFBTSxhQUFTLEVBQUMsUUFBaEI7QUFBeUIsU0FBSyxNQUE5QjtBQUErQixVQUFNLEVBQUc1QixNQUF4QztBQUFpRCxTQUFLLEVBQUcsT0FBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBRyxRQUFJLEVBQUMsU0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLEVBR0U7QUFBRyxRQUFJLEVBQUMsZ0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixFQUlFO0FBQUcsV0FBTyxFQUFFMkIsdURBQUssQ0FBQ0UsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLENBRkosRUFVSUYsdURBQUssQ0FBQ0MsZUFBTixPQUE0QixLQUE1QixJQUNBLE1BQUMsdURBQUQ7QUFBTSxhQUFTLEVBQUMsUUFBaEI7QUFBeUIsU0FBSyxNQUE5QjtBQUErQixVQUFNLEVBQUc1QixNQUF4QztBQUFpRCxTQUFLLEVBQUcsT0FBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLEVBRUE7QUFBRyxXQUFPLEVBQUUyQix1REFBSyxDQUFDRyxnQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGQSxFQUdBO0FBQUcsV0FBTyxFQUFFSCx1REFBSyxDQUFDSSxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEEsQ0FYSixDQURGO0FBb0JELENBdEJEOztLQUFNTCxRO0FBd0JTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc2lkZU1lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vc2VydmljZXMvYXV0aDAnXG5pbXBvcnQgeyBzdGFjayBhcyBNZW51IH0gZnJvbSBcInJlYWN0LWJ1cmdlci1tZW51XCI7XG5cbnZhciBzdHlsZXMgPSB7XG4gIGJtQnVyZ2VyQnV0dG9uOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2lkdGg6ICczMnB4JyxcbiAgICBoZWlnaHQ6ICcyNnB4JyxcbiAgICByaWdodDogJzI2cHgnLFxuICAgIHRvcDogJzIwcHgnXG4gIH0sXG4gIGJtQnVyZ2VyQmFyczoge1xuICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmJ1xuICB9LFxuICBibUJ1cmdlckJhcnNIb3Zlcjoge1xuICAgIGJhY2tncm91bmQ6ICcjYTkwMDAwJ1xuICB9LFxuICBibUNyb3NzQnV0dG9uOiB7XG4gICAgaGVpZ2h0OiAnMjRweCcsXG4gICAgd2lkdGg6ICcyNHB4J1xuICB9LFxuICBibUNyb3NzOiB7XG4gICAgYmFja2dyb3VuZDogJyNmZmZmZmYnXG4gIH0sXG4gIGJtTWVudVdyYXA6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB0b3A6ICctMHB4JyxcbiAgfSxcbiAgYm1NZW51OiB7XG4gICAgYmFja2dyb3VuZDogJyM0OTQ5NDknLFxuICAgIHBhZGRpbmc6ICcnLFxuICAgIGZvbnRTaXplOiAnMS42ZW0nLFxuICAgIGJvcmRlcjogJzJweCBzb2xpZCAjY2NjY2NjJ1xuICB9LFxuICBibU1vcnBoU2hhcGU6IHtcbiAgICBmaWxsOiAnIzM3M2E0NydcbiAgfSxcbiAgYm1JdGVtTGlzdDoge1xuICAgIGNvbG9yOiAnI2I4YjdhZCcsXG4gICAgcGFkZGluZzogJzFlbSAwIDAgMC44ZW0nLFxuICB9LFxuICBibUl0ZW06IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBhZGRpbmc6ICcwLjJlbSAwJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBmb250RmFtaWx5OiAnUGF5dG9uZSBPbmUnLFxuICAgIGZvbnRXZWlnaHQ6ICczMDAnXG4gIH0sXG4gIGJtT3ZlcmxheToge1xuICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDApJyxcbiAgfSxcbn1cblxuY29uc3QgU2lkZU1lbnUgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgeyBhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgICA8TWVudSBjbGFzc05hbWU9XCJidXJnZXJcIiByaWdodCBzdHlsZXM9eyBzdHlsZXMgfSB3aWR0aD17ICcyMjBweCcgfT5cbiAgICAgICAgICA8YSBocmVmPVwiL1wiPkhvbWU8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIi9jcmVhdGVcIj5BZGQgYWN0aXZpdHk8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIi9teS1hY3Rpdml0aWVzXCI+TXkgYWN0aXZpdGllczwvYT5cbiAgICAgICAgICA8YSBvbkNsaWNrPXthdXRoMC5sb2dvdXR9PkxvZ291dDwvYT5cbiAgICAgICAgPC9NZW51PlxuICAgICAgfVxuXG4gICAgICB7IGF1dGgwLmlzQXV0aGVudGljYXRlZCgpID09PSBmYWxzZSAmJlxuICAgICAgICA8TWVudSBjbGFzc05hbWU9XCJidXJnZXJcIiByaWdodCBzdHlsZXM9eyBzdHlsZXMgfSB3aWR0aD17ICcyMjBweCcgfT5cbiAgICAgICAgPGEgaHJlZj1cIi9cIj5Ib21lPC9hPlxuICAgICAgICA8YSBvbkNsaWNrPXthdXRoMC5sb2dpbkFkZEFjdGl2aXR5fT5BZGQgYWN0aXZpdHk8L2E+XG4gICAgICAgIDxhIG9uQ2xpY2s9e2F1dGgwLmxvZ2lufT5TaWduIGluPC9hPlxuICAgICAgICA8L01lbnU+XG4gICAgICB9XG4gICAgPC8+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVNZW51OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sideMenu.js\n");

/***/ })

})