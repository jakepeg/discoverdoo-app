webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/sideMenu.js":
/*!********************************!*\
  !*** ./components/sideMenu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth0 */ \"./services/auth0.js\");\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-burger-menu */ \"./node_modules/react-burger-menu/lib/BurgerMenu.js\");\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Documents/discoverdoo-app/components/sideMenu.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar styles = {\n  bmBurgerButton: {\n    position: 'absolute',\n    width: '32px',\n    height: '26px',\n    right: '26px',\n    top: '20px'\n  },\n  bmBurgerBars: {\n    background: '#ffffff'\n  },\n  bmBurgerBarsHover: {\n    background: '#a90000'\n  },\n  bmCrossButton: {\n    height: '24px',\n    width: '24px'\n  },\n  bmCross: {\n    background: '#bdc3c7'\n  },\n  bmMenuWrap: {\n    position: 'fixed',\n    height: '100%',\n    top: '-0px'\n  },\n  bmMenu: {\n    background: '#0b334d',\n    padding: '',\n    fontSize: '1.6em',\n    borderLeft: '5px solid #cccccc'\n  },\n  bmMorphShape: {\n    fill: '#373a47'\n  },\n  bmItemList: {\n    color: '#b8b7ad',\n    padding: '0.8em'\n  },\n  bmItem: {\n    display: 'block',\n    padding: '12px 0',\n    color: 'white',\n    fontFamily: 'Paytone One'\n  },\n  bmOverlay: {\n    background: 'rgba(0, 0, 0, 0)'\n  }\n};\n\nvar SideMenu = function SideMenu() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, _services_auth0__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isAuthenticated() && __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__[\"stack\"], {\n    className: \"burger\",\n    right: true,\n    styles: styles,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 3\n    }\n  }, __jsx(\"a\", {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 5\n    }\n  }, \"Home\"), __jsx(\"a\", {\n    href: \"/create\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 5\n    }\n  }, \"Add activity\"), __jsx(\"a\", {\n    href: \"/my-activities\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }\n  }, \"My activities\"), __jsx(\"a\", {\n    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_1__[\"default\"].logout,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 5\n    }\n  }, \"Logout\")), _services_auth0__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isAuthenticated() === false && __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__[\"stack\"], {\n    className: \"burger\",\n    right: true,\n    styles: styles,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 1\n    }\n  }, __jsx(\"a\", {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 1\n    }\n  }, \"Home\"), __jsx(\"a\", {\n    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loginAddActivity,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 1\n    }\n  }, \"Add activity\"), __jsx(\"a\", {\n    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_1__[\"default\"].login,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 1\n    }\n  }, \"Sign in\")));\n};\n\n_c = SideMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"SideMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGVNZW51LmpzPzU2ODMiXSwibmFtZXMiOlsic3R5bGVzIiwiYm1CdXJnZXJCdXR0b24iLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwicmlnaHQiLCJ0b3AiLCJibUJ1cmdlckJhcnMiLCJiYWNrZ3JvdW5kIiwiYm1CdXJnZXJCYXJzSG92ZXIiLCJibUNyb3NzQnV0dG9uIiwiYm1Dcm9zcyIsImJtTWVudVdyYXAiLCJibU1lbnUiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJib3JkZXJMZWZ0IiwiYm1Nb3JwaFNoYXBlIiwiZmlsbCIsImJtSXRlbUxpc3QiLCJjb2xvciIsImJtSXRlbSIsImRpc3BsYXkiLCJmb250RmFtaWx5IiwiYm1PdmVybGF5IiwiU2lkZU1lbnUiLCJhdXRoMCIsImlzQXV0aGVudGljYXRlZCIsImxvZ291dCIsImxvZ2luQWRkQWN0aXZpdHkiLCJsb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLE1BQU0sR0FBRztBQUNYQyxnQkFBYyxFQUFFO0FBQ2RDLFlBQVEsRUFBRSxVQURJO0FBRWRDLFNBQUssRUFBRSxNQUZPO0FBR2RDLFVBQU0sRUFBRSxNQUhNO0FBSWRDLFNBQUssRUFBRSxNQUpPO0FBS2RDLE9BQUcsRUFBRTtBQUxTLEdBREw7QUFRWEMsY0FBWSxFQUFFO0FBQ1pDLGNBQVUsRUFBRTtBQURBLEdBUkg7QUFXWEMsbUJBQWlCLEVBQUU7QUFDakJELGNBQVUsRUFBRTtBQURLLEdBWFI7QUFjWEUsZUFBYSxFQUFFO0FBQ2JOLFVBQU0sRUFBRSxNQURLO0FBRWJELFNBQUssRUFBRTtBQUZNLEdBZEo7QUFrQlhRLFNBQU8sRUFBRTtBQUNQSCxjQUFVLEVBQUU7QUFETCxHQWxCRTtBQXFCWEksWUFBVSxFQUFFO0FBQ1ZWLFlBQVEsRUFBRSxPQURBO0FBRVZFLFVBQU0sRUFBRSxNQUZFO0FBR1ZFLE9BQUcsRUFBRTtBQUhLLEdBckJEO0FBMEJYTyxRQUFNLEVBQUU7QUFDTkwsY0FBVSxFQUFFLFNBRE47QUFFTk0sV0FBTyxFQUFFLEVBRkg7QUFHTkMsWUFBUSxFQUFFLE9BSEo7QUFJTkMsY0FBVSxFQUFFO0FBSk4sR0ExQkc7QUFnQ1hDLGNBQVksRUFBRTtBQUNaQyxRQUFJLEVBQUU7QUFETSxHQWhDSDtBQW1DWEMsWUFBVSxFQUFFO0FBQ1ZDLFNBQUssRUFBRSxTQURHO0FBRVZOLFdBQU8sRUFBRTtBQUZDLEdBbkNEO0FBdUNYTyxRQUFNLEVBQUU7QUFDTkMsV0FBTyxFQUFFLE9BREg7QUFFTlIsV0FBTyxFQUFFLFFBRkg7QUFHTk0sU0FBSyxFQUFFLE9BSEQ7QUFJTkcsY0FBVSxFQUFFO0FBSk4sR0F2Q0c7QUE2Q1hDLFdBQVMsRUFBRTtBQUNUaEIsY0FBVSxFQUFFO0FBREg7QUE3Q0EsQ0FBYjs7QUFtREEsSUFBTWlCLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFHckIsU0FFRSxtRUFFRkMsdURBQUssQ0FBQ0MsZUFBTixNQUNBLE1BQUMsdURBQUQ7QUFBTSxhQUFTLEVBQUMsUUFBaEI7QUFBeUIsU0FBSyxNQUE5QjtBQUErQixVQUFNLEVBQUczQixNQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFRTtBQUFHLFFBQUksRUFBQyxTQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsRUFHRTtBQUFHLFFBQUksRUFBQyxnQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGLEVBSUU7QUFBRyxXQUFPLEVBQUUwQix1REFBSyxDQUFDRSxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsQ0FIRSxFQVlGRix1REFBSyxDQUFDQyxlQUFOLE9BQTRCLEtBQTVCLElBQ0YsTUFBQyx1REFBRDtBQUFNLGFBQVMsRUFBQyxRQUFoQjtBQUF5QixTQUFLLE1BQTlCO0FBQStCLFVBQU0sRUFBRzNCLE1BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxFQUVBO0FBQUcsV0FBTyxFQUFFMEIsdURBQUssQ0FBQ0csZ0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkEsRUFHQTtBQUFHLFdBQU8sRUFBRUgsdURBQUssQ0FBQ0ksS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhBLENBYkksQ0FGRjtBQTBCRCxDQTdCRDs7S0FBTUwsUTtBQStCU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpZGVNZW51LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF1dGgwIGZyb20gJy4uL3NlcnZpY2VzL2F1dGgwJ1xuaW1wb3J0IHsgc3RhY2sgYXMgTWVudSB9IGZyb20gXCJyZWFjdC1idXJnZXItbWVudVwiO1xuXG52YXIgc3R5bGVzID0ge1xuICBibUJ1cmdlckJ1dHRvbjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdpZHRoOiAnMzJweCcsXG4gICAgaGVpZ2h0OiAnMjZweCcsXG4gICAgcmlnaHQ6ICcyNnB4JyxcbiAgICB0b3A6ICcyMHB4J1xuICB9LFxuICBibUJ1cmdlckJhcnM6IHtcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZmZmZidcbiAgfSxcbiAgYm1CdXJnZXJCYXJzSG92ZXI6IHtcbiAgICBiYWNrZ3JvdW5kOiAnI2E5MDAwMCdcbiAgfSxcbiAgYm1Dcm9zc0J1dHRvbjoge1xuICAgIGhlaWdodDogJzI0cHgnLFxuICAgIHdpZHRoOiAnMjRweCdcbiAgfSxcbiAgYm1Dcm9zczoge1xuICAgIGJhY2tncm91bmQ6ICcjYmRjM2M3J1xuICB9LFxuICBibU1lbnVXcmFwOiB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgdG9wOiAnLTBweCdcbiAgfSxcbiAgYm1NZW51OiB7XG4gICAgYmFja2dyb3VuZDogJyMwYjMzNGQnLFxuICAgIHBhZGRpbmc6ICcnLFxuICAgIGZvbnRTaXplOiAnMS42ZW0nLFxuICAgIGJvcmRlckxlZnQ6ICc1cHggc29saWQgI2NjY2NjYydcbiAgfSxcbiAgYm1Nb3JwaFNoYXBlOiB7XG4gICAgZmlsbDogJyMzNzNhNDcnXG4gIH0sXG4gIGJtSXRlbUxpc3Q6IHtcbiAgICBjb2xvcjogJyNiOGI3YWQnLFxuICAgIHBhZGRpbmc6ICcwLjhlbScsXG4gIH0sXG4gIGJtSXRlbToge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcGFkZGluZzogJzEycHggMCcsXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgZm9udEZhbWlseTogJ1BheXRvbmUgT25lJyxcbiAgfSxcbiAgYm1PdmVybGF5OiB7XG4gICAgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMCknLFxuICB9LFxuXG59XG5cbmNvbnN0IFNpZGVNZW51ID0gKCkgPT4ge1xuXG5cbiAgcmV0dXJuIChcblxuICAgIDw+XG5cbnsgYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkgJiZcbiAgPE1lbnUgY2xhc3NOYW1lPVwiYnVyZ2VyXCIgcmlnaHQgc3R5bGVzPXsgc3R5bGVzIH0+XG4gICAgPGEgaHJlZj1cIi9cIj5Ib21lPC9hPlxuICAgIDxhIGhyZWY9XCIvY3JlYXRlXCI+QWRkIGFjdGl2aXR5PC9hPlxuICAgIDxhIGhyZWY9XCIvbXktYWN0aXZpdGllc1wiPk15IGFjdGl2aXRpZXM8L2E+XG4gICAgPGEgb25DbGljaz17YXV0aDAubG9nb3V0fT5Mb2dvdXQ8L2E+XG4gIDwvTWVudT5cblxuICB9XG5cbnsgYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkgPT09IGZhbHNlICYmXG48TWVudSBjbGFzc05hbWU9XCJidXJnZXJcIiByaWdodCBzdHlsZXM9eyBzdHlsZXMgfT5cbjxhIGhyZWY9XCIvXCI+SG9tZTwvYT5cbjxhIG9uQ2xpY2s9e2F1dGgwLmxvZ2luQWRkQWN0aXZpdHl9PkFkZCBhY3Rpdml0eTwvYT5cbjxhIG9uQ2xpY2s9e2F1dGgwLmxvZ2lufT5TaWduIGluPC9hPlxuPC9NZW51PlxuXG4gIH1cblxuPC8+XG4gIClcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZU1lbnU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sideMenu.js\n");

/***/ })

})