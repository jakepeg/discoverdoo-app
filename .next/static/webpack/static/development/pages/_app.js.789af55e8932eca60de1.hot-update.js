webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/sideMenu.js":
/*!********************************!*\
  !*** ./components/sideMenu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth0 */ \"./services/auth0.js\");\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-burger-menu */ \"./node_modules/react-burger-menu/lib/BurgerMenu.js\");\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Documents/discoverdoo-app/components/sideMenu.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar styles = {\n  bmBurgerButton: {\n    position: 'absolute',\n    width: '32px',\n    height: '26px',\n    right: '26px',\n    top: '20px'\n  },\n  bmBurgerBars: {\n    background: '#ffffff'\n  },\n  bmBurgerBarsHover: {\n    background: '#a90000'\n  },\n  bmCrossButton: {\n    height: '24px',\n    width: '24px'\n  },\n  bmCross: {\n    background: '#ffffff'\n  },\n  bmMenuWrap: {\n    position: 'fixed',\n    height: '100%',\n    top: '-0px'\n  },\n  bmMenu: {\n    background: '#494949',\n    padding: '',\n    fontSize: '1.6em'\n  },\n  bmMorphShape: {\n    fill: '#373a47'\n  },\n  bmItemList: {\n    color: '#b8b7ad',\n    padding: '1em 0 0 0.8em'\n  },\n  bmItem: {\n    display: 'block',\n    padding: '0.2em 0',\n    color: 'white',\n    fontFamily: 'Paytone One',\n    border: '0'\n  },\n  bmOverlay: {\n    background: 'rgba(0, 0, 0, 0)'\n  }\n};\n\nvar SideMenu = function SideMenu() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      menuOpen = _useState[0],\n      setMenuOpen = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  var home = function home() {\n    router.push('/');\n    setMenuOpen(false);\n  };\n\n  var myActivities = function myActivities() {\n    router.push('/my-activities');\n    setMenuOpen(false);\n  };\n\n  var addActivity = function addActivity() {\n    router.push('/create');\n    setMenuOpen(false);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, _services_auth0__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isAuthenticated() === false && __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_3__[\"stack\"], {\n    className: \"burger\",\n    right: true,\n    styles: styles,\n    width: '220px',\n    isOpen: menuOpen,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, \"Home\"), __jsx(\"a\", {\n    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loginAddActivity,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }, \"Add activity\"), __jsx(\"a\", {\n    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_2__[\"default\"].login,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }, \"Sign in\")), _services_auth0__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isAuthenticated() && __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_3__[\"stack\"], {\n    className: \"burger\",\n    right: true,\n    styles: styles,\n    width: '220px',\n    isOpen: menuOpen,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    onClick: home,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 9\n    }\n  }, \"Home\"), __jsx(\"a\", {\n    onClick: myActivities,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 11\n    }\n  }, \"My activities\"), __jsx(\"a\", {\n    onClick: addActivity,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 11\n    }\n  }, \"Add activity\"), __jsx(\"a\", {\n    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_2__[\"default\"].logout,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 11\n    }\n  }, \"Logout\")));\n};\n\n_s(SideMenu, \"NXmQiSpJTbl1eiCkGkRf8oG5HPc=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = SideMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"SideMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGVNZW51LmpzPzU2ODMiXSwibmFtZXMiOlsic3R5bGVzIiwiYm1CdXJnZXJCdXR0b24iLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwicmlnaHQiLCJ0b3AiLCJibUJ1cmdlckJhcnMiLCJiYWNrZ3JvdW5kIiwiYm1CdXJnZXJCYXJzSG92ZXIiLCJibUNyb3NzQnV0dG9uIiwiYm1Dcm9zcyIsImJtTWVudVdyYXAiLCJibU1lbnUiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJibU1vcnBoU2hhcGUiLCJmaWxsIiwiYm1JdGVtTGlzdCIsImNvbG9yIiwiYm1JdGVtIiwiZGlzcGxheSIsImZvbnRGYW1pbHkiLCJib3JkZXIiLCJibU92ZXJsYXkiLCJTaWRlTWVudSIsInVzZVN0YXRlIiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsInJvdXRlciIsInVzZVJvdXRlciIsImhvbWUiLCJwdXNoIiwibXlBY3Rpdml0aWVzIiwiYWRkQWN0aXZpdHkiLCJhdXRoMCIsImlzQXV0aGVudGljYXRlZCIsImxvZ2luQWRkQWN0aXZpdHkiLCJsb2dpbiIsImxvZ291dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsTUFBTSxHQUFHO0FBQ1hDLGdCQUFjLEVBQUU7QUFDZEMsWUFBUSxFQUFFLFVBREk7QUFFZEMsU0FBSyxFQUFFLE1BRk87QUFHZEMsVUFBTSxFQUFFLE1BSE07QUFJZEMsU0FBSyxFQUFFLE1BSk87QUFLZEMsT0FBRyxFQUFFO0FBTFMsR0FETDtBQVFYQyxjQUFZLEVBQUU7QUFDWkMsY0FBVSxFQUFFO0FBREEsR0FSSDtBQVdYQyxtQkFBaUIsRUFBRTtBQUNqQkQsY0FBVSxFQUFFO0FBREssR0FYUjtBQWNYRSxlQUFhLEVBQUU7QUFDYk4sVUFBTSxFQUFFLE1BREs7QUFFYkQsU0FBSyxFQUFFO0FBRk0sR0FkSjtBQWtCWFEsU0FBTyxFQUFFO0FBQ1BILGNB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QUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsQ0FWSixDQURGO0FBc0JELENBdkNEOztHQUFNZCxRO1VBR1dLLHFEOzs7S0FIWEwsUTtBQXlDU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpZGVNZW51LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBhdXRoMCBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoMCc7XG5pbXBvcnQgeyBzdGFjayBhcyBNZW51IH0gZnJvbSBcInJlYWN0LWJ1cmdlci1tZW51XCI7XG5cbnZhciBzdHlsZXMgPSB7XG4gIGJtQnVyZ2VyQnV0dG9uOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2lkdGg6ICczMnB4JyxcbiAgICBoZWlnaHQ6ICcyNnB4JyxcbiAgICByaWdodDogJzI2cHgnLFxuICAgIHRvcDogJzIwcHgnXG4gIH0sXG4gIGJtQnVyZ2VyQmFyczoge1xuICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmJ1xuICB9LFxuICBibUJ1cmdlckJhcnNIb3Zlcjoge1xuICAgIGJhY2tncm91bmQ6ICcjYTkwMDAwJ1xuICB9LFxuICBibUNyb3NzQnV0dG9uOiB7XG4gICAgaGVpZ2h0OiAnMjRweCcsXG4gICAgd2lkdGg6ICcyNHB4J1xuICB9LFxuICBibUNyb3NzOiB7XG4gICAgYmFja2dyb3VuZDogJyNmZmZmZmYnXG4gIH0sXG4gIGJtTWVudVdyYXA6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB0b3A6ICctMHB4JyxcbiAgfSxcbiAgYm1NZW51OiB7XG4gICAgYmFja2dyb3VuZDogJyM0OTQ5NDknLFxuICAgIHBhZGRpbmc6ICcnLFxuICAgIGZvbnRTaXplOiAnMS42ZW0nLFxuICB9LFxuICBibU1vcnBoU2hhcGU6IHtcbiAgICBmaWxsOiAnIzM3M2E0NydcbiAgfSxcbiAgYm1JdGVtTGlzdDoge1xuICAgIGNvbG9yOiAnI2I4YjdhZCcsXG4gICAgcGFkZGluZzogJzFlbSAwIDAgMC44ZW0nLFxuICB9LFxuICBibUl0ZW06IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBhZGRpbmc6ICcwLjJlbSAwJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBmb250RmFtaWx5OiAnUGF5dG9uZSBPbmUnLFxuICAgIGJvcmRlcjogJzAnLFxuICB9LFxuICBibU92ZXJsYXk6IHtcbiAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwKScsXG4gIH0sXG59XG5cbmNvbnN0IFNpZGVNZW51ID0gKCkgPT4ge1xuXG4gIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBob21lID0gKCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICBzZXRNZW51T3BlbihmYWxzZSlcbiAgfVxuICBjb25zdCBteUFjdGl2aXRpZXMgPSAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goJy9teS1hY3Rpdml0aWVzJylcbiAgICBzZXRNZW51T3BlbihmYWxzZSlcbiAgfVxuICBjb25zdCBhZGRBY3Rpdml0eSA9ICgpID0+IHtcbiAgICByb3V0ZXIucHVzaCgnL2NyZWF0ZScpXG4gICAgc2V0TWVudU9wZW4oZmFsc2UpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IGF1dGgwLmlzQXV0aGVudGljYXRlZCgpID09PSBmYWxzZSAmJlxuICAgICAgICA8TWVudSBjbGFzc05hbWU9XCJidXJnZXJcIiByaWdodCBzdHlsZXM9eyBzdHlsZXMgfSB3aWR0aD17ICcyMjBweCcgfSBpc09wZW49eyBtZW51T3BlbiB9PlxuICAgICAgICA8YSBocmVmPVwiL1wiPkhvbWU8L2E+XG4gICAgICAgIDxhIG9uQ2xpY2s9e2F1dGgwLmxvZ2luQWRkQWN0aXZpdHl9PkFkZCBhY3Rpdml0eTwvYT5cbiAgICAgICAgPGEgb25DbGljaz17YXV0aDAubG9naW59PlNpZ24gaW48L2E+XG4gICAgICAgIDwvTWVudT5cbiAgICAgIH1cblxuICAgICAgeyBhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgICA8TWVudSBjbGFzc05hbWU9XCJidXJnZXJcIiByaWdodCBzdHlsZXM9eyBzdHlsZXMgfSB3aWR0aD17ICcyMjBweCcgfSBpc09wZW49eyBtZW51T3BlbiB9PlxuICAgICAgICA8YSBvbkNsaWNrPXtob21lfT5Ib21lPC9hPlxuICAgICAgICAgIDxhIG9uQ2xpY2s9e215QWN0aXZpdGllc30+TXkgYWN0aXZpdGllczwvYT5cbiAgICAgICAgICA8YSBvbkNsaWNrPXthZGRBY3Rpdml0eX0+QWRkIGFjdGl2aXR5PC9hPlxuICAgICAgICAgIDxhIG9uQ2xpY2s9e2F1dGgwLmxvZ291dH0+TG9nb3V0PC9hPlxuICAgICAgICA8L01lbnU+XG4gICAgICB9XG5cblxuICAgIDwvPlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlTWVudTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/sideMenu.js\n");

/***/ })

})