webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/sideMenu.js":
/*!********************************!*\
  !*** ./components/sideMenu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth0 */ \"./services/auth0.js\");\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-burger-menu */ \"./node_modules/react-burger-menu/lib/BurgerMenu.js\");\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Documents/discoverdoo-app/components/sideMenu.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar styles = {\n  bmBurgerButton: {\n    position: 'absolute',\n    width: '32px',\n    height: '26px',\n    right: '26px',\n    top: '20px'\n  },\n  bmBurgerBars: {\n    background: '#ffffff'\n  },\n  bmBurgerBarsHover: {\n    background: '#a90000'\n  },\n  bmCrossButton: {\n    height: '24px',\n    width: '24px'\n  },\n  bmCross: {\n    background: '#ffffff'\n  },\n  bmMenuWrap: {\n    position: 'fixed',\n    height: '100%',\n    top: '-0px'\n  },\n  bmMenu: {\n    background: '#494949',\n    padding: '',\n    fontSize: '1.6em',\n    border: '2px solid #cccccc'\n  },\n  bmMorphShape: {\n    fill: '#373a47'\n  },\n  bmItemList: {\n    color: '#b8b7ad',\n    padding: '1em 0 0 0.8em'\n  },\n  bmItem: {\n    display: 'block',\n    padding: '0.2em 0',\n    color: 'white',\n    fontFamily: 'Paytone One'\n  },\n  bmOverlay: {\n    background: 'rgba(0, 0, 0, 0)'\n  }\n};\n\nvar SideMenu = function SideMenu() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  var home = function home() {\n    router.push('/');\n  };\n\n  var myActivities = function myActivities() {\n    router.push('/my-activities');\n  };\n\n  var addActivity = function addActivity() {\n    router.push('/create');\n  };\n\n  var menuOpen = flase;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, _services_auth0__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isAuthenticated() === false && __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_3__[\"stack\"], {\n    className: \"burger\",\n    right: true,\n    styles: styles,\n    width: '220px',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }, \"Home\"), __jsx(\"a\", {\n    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loginAddActivity,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }, \"Add activity\"), __jsx(\"a\", {\n    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_2__[\"default\"].login,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, \"Sign in\")), _services_auth0__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isAuthenticated() && __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_3__[\"stack\"], {\n    className: \"burger\",\n    right: true,\n    styles: styles,\n    width: '220px',\n    isOpen: menuOpen,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    onClick: home,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }\n  }, \"Home\"), __jsx(\"a\", {\n    onClick: myActivities,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 11\n    }\n  }, \"My activities\"), __jsx(\"a\", {\n    onClick: addActivity,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }\n  }, \"Add activity\"), __jsx(\"a\", {\n    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_2__[\"default\"].logout,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 11\n    }\n  }, \"Logout\")));\n};\n\n_s(SideMenu, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = SideMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"SideMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGVNZW51LmpzPzU2ODMiXSwibmFtZXMiOlsic3R5bGVzIiwiYm1CdXJnZXJCdXR0b24iLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwicmlnaHQiLCJ0b3AiLCJibUJ1cmdlckJhcnMiLCJiYWNrZ3JvdW5kIiwiYm1CdXJnZXJCYXJzSG92ZXIiLCJibUNyb3NzQnV0dG9uIiwiYm1Dcm9zcyIsImJtTWVudVdyYXAiLCJibU1lbnUiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJib3JkZXIiLCJibU1vcnBoU2hhcGUiLCJmaWxsIiwiYm1JdGVtTGlzdCIsImNvbG9yIiwiYm1JdGVtIiwiZGlzcGxheSIsImZvbnRGYW1pbHkiLCJibU92ZXJsYXkiLCJTaWRlTWVudSIsInJvdXRlciIsInVzZVJvdXRlciIsImhvbWUiLCJwdXNoIiwibXlBY3Rpdml0aWVzIiwiYWRkQWN0aXZpdHkiLCJtZW51T3BlbiIsImZsYXNlIiwiYXV0aDAiLCJpc0F1dGhlbnRpY2F0ZWQiLCJsb2dpbkFkZEFjdGl2aXR5IiwibG9naW4iLCJsb2dvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLE1BQU0sR0FBRztBQUNYQyxnQkFBYyxFQUFFO0FBQ2RDLFlBQVEsRUFBRSxVQURJO0FBRWRDLFNBQUssRUFBRSxNQUZPO0FBR2RDLFVBQU0sRUFBRSxNQUhNO0FBSWRDLFNBQUssRUFBRSxNQUpPO0FBS2RDLE9BQUcsRUFBRTtBQUxTLEdBREw7QUFRWEMsY0FBWSxFQUFFO0FBQ1pDLGNBQVUsRUFBRTtBQURBLEdBUkg7QUFXWEMsbUJBQWlCLEVBQUU7QUFDakJELGNBQVUsRUFBRTtBQURLLEdBWFI7QUFjWEUsZUFBYSxFQUFFO0FBQ2JOLFVBQU0sRUFBRSxNQURLO0FBRWJELFNBQUssRUFBRTtBQUZNLEdBZEo7QUFrQlhRLFNBQU8sRUFBRTtBQUNQSCxjQUFVLEVBQUU7QUFETCxHQWxC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dGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBhdXRoMCBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoMCc7XG5pbXBvcnQgeyBzdGFjayBhcyBNZW51IH0gZnJvbSBcInJlYWN0LWJ1cmdlci1tZW51XCI7XG5cbnZhciBzdHlsZXMgPSB7XG4gIGJtQnVyZ2VyQnV0dG9uOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2lkdGg6ICczMnB4JyxcbiAgICBoZWlnaHQ6ICcyNnB4JyxcbiAgICByaWdodDogJzI2cHgnLFxuICAgIHRvcDogJzIwcHgnXG4gIH0sXG4gIGJtQnVyZ2VyQmFyczoge1xuICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmJ1xuICB9LFxuICBibUJ1cmdlckJhcnNIb3Zlcjoge1xuICAgIGJhY2tncm91bmQ6ICcjYTkwMDAwJ1xuICB9LFxuICBibUNyb3NzQnV0dG9uOiB7XG4gICAgaGVpZ2h0OiAnMjRweCcsXG4gICAgd2lkdGg6ICcyNHB4J1xuICB9LFxuICBibUNyb3NzOiB7XG4gICAgYmFja2dyb3VuZDogJyNmZmZmZmYnXG4gIH0sXG4gIGJtTWVudVdyYXA6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB0b3A6ICctMHB4JyxcbiAgfSxcbiAgYm1NZW51OiB7XG4gICAgYmFja2dyb3VuZDogJyM0OTQ5NDknLFxuICAgIHBhZGRpbmc6ICcnLFxuICAgIGZvbnRTaXplOiAnMS42ZW0nLFxuICAgIGJvcmRlcjogJzJweCBzb2xpZCAjY2NjY2NjJ1xuICB9LFxuICBibU1vcnBoU2hhcGU6IHtcbiAgICBmaWxsOiAnIzM3M2E0NydcbiAgfSxcbiAgYm1JdGVtTGlzdDoge1xuICAgIGNvbG9yOiAnI2I4YjdhZCcsXG4gICAgcGFkZGluZzogJzFlbSAwIDAgMC44ZW0nLFxuICB9LFxuICBibUl0ZW06IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBhZGRpbmc6ICcwLjJlbSAwJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBmb250RmFtaWx5OiAnUGF5dG9uZSBPbmUnLFxuICB9LFxuICBibU92ZXJsYXk6IHtcbiAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwKScsXG4gIH0sXG59XG5cbmNvbnN0IFNpZGVNZW51ID0gKCkgPT4ge1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goJy8nKVxuICB9XG4gIGNvbnN0IG15QWN0aXZpdGllcyA9ICgpID0+IHtcbiAgICByb3V0ZXIucHVzaCgnL215LWFjdGl2aXRpZXMnKVxuICB9XG4gIGNvbnN0IGFkZEFjdGl2aXR5ID0gKCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKCcvY3JlYXRlJylcbiAgfVxuXG4gIGNvbnN0IG1lbnVPcGVuID0gZmxhc2VcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IGF1dGgwLmlzQXV0aGVudGljYXRlZCgpID09PSBmYWxzZSAmJlxuICAgICAgICA8TWVudSBjbGFzc05hbWU9XCJidXJnZXJcIiByaWdodCBzdHlsZXM9eyBzdHlsZXMgfSB3aWR0aD17ICcyMjBweCcgfT5cbiAgICAgICAgPGEgaHJlZj1cIi9cIj5Ib21lPC9hPlxuICAgICAgICA8YSBvbkNsaWNrPXthdXRoMC5sb2dpbkFkZEFjdGl2aXR5fT5BZGQgYWN0aXZpdHk8L2E+XG4gICAgICAgIDxhIG9uQ2xpY2s9e2F1dGgwLmxvZ2lufT5TaWduIGluPC9hPlxuICAgICAgICA8L01lbnU+XG4gICAgICB9XG5cbiAgICAgIHsgYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkgJiZcbiAgICAgICAgPE1lbnUgY2xhc3NOYW1lPVwiYnVyZ2VyXCIgcmlnaHQgc3R5bGVzPXsgc3R5bGVzIH0gd2lkdGg9eyAnMjIwcHgnIH0gaXNPcGVuPXsgbWVudU9wZW4gfT5cbiAgICAgICAgPGEgb25DbGljaz17aG9tZX0+SG9tZTwvYT5cbiAgICAgICAgICA8YSBvbkNsaWNrPXtteUFjdGl2aXRpZXN9Pk15IGFjdGl2aXRpZXM8L2E+XG4gICAgICAgICAgPGEgb25DbGljaz17YWRkQWN0aXZpdHl9PkFkZCBhY3Rpdml0eTwvYT5cbiAgICAgICAgICA8YSBvbkNsaWNrPXthdXRoMC5sb2dvdXR9PkxvZ291dDwvYT5cbiAgICAgICAgPC9NZW51PlxuICAgICAgfVxuXG5cbiAgICA8Lz5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZU1lbnU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sideMenu.js\n");

/***/ })

})