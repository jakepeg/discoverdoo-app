webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/nav2.js":
/*!****************************!*\
  !*** ./components/nav2.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth0 */ \"./services/auth0.js\");\n/* harmony import */ var _sideMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sideMenu */ \"./components/sideMenu.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Documents/discoverdoo-app/components/nav2.js\";\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar Login = function Login() {\n  return __jsx(\"span\", {\n    className: \"nav-link\",\n    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].login,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, \"SIGN IN\");\n};\n\n_c = Login;\n\nvar LoginAddActivity = function LoginAddActivity() {\n  return __jsx(\"span\", {\n    className: \"nav-link\",\n    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].loginAddActivity,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, \"ADD ACTIVITY\");\n};\n\n_c2 = LoginAddActivity;\n\nvar Logout = function Logout() {\n  return __jsx(\"span\", {\n    className: \"nav-link\",\n    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].logout,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, \"LOGOUT\");\n};\n\n_c3 = Logout;\n\nvar AddActivity = function AddActivity() {\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/create\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    className: \"nav-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, \"ADD ACTIVITY\"));\n};\n\n_c4 = AddActivity;\n\nvar MyActivities = function MyActivities() {\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/my-activities\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    className: \"nav-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, \"MY ACTIVITIES\"));\n};\n\n_c5 = MyActivities;\n\nvar Nav = function Nav() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"header\", {\n    className: \"jsx-4138910851\" + \" \" + \"main-header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-4138910851\" + \" \" + \"logo-group\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"/logo.svg\",\n    alt: \"doo logo\",\n    className: \"jsx-4138910851\" + \" \" + \"logo-img\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }), __jsx(\"h1\", {\n    className: \"jsx-4138910851\" + \" \" + \"logo-type\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, \"discoverdoo\"))), __jsx(\"div\", {\n    className: \"jsx-4138910851\" + \" \" + \"menu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated() && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"jsx-4138910851\" + \" \" + \"loggedin\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }, __jsx(AddActivity, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }), __jsx(MyActivities, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }), __jsx(Logout, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  })), __jsx(_sideMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  })), _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated() === false && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(LoginAddActivity, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }), __jsx(Login, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"4138910851\",\n    __self: _this\n  }, \".main-header.jsx-4138910851{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:15px 10px 15px 10px;margin-bottom:20px;background-color:#0b334d;}#logo.jsx-4138910851{width:70px;margin-top:20px;}.country.jsx-4138910851{color:#ffffff;margin-top:12px;}.tagline.jsx-4138910851{margin-top:-16px;display:inline;font-family:sans-serif;color:#fff;font-size:1.8rem;font-weight:200;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}#menu.jsx-4138910851{margin-left:auto;margin-top:5px;margin-right:13px;}.menu.jsx-4138910851{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:280px;margin-top:20px;}.logo-group.jsx-4138910851{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-text-decoration:none;text-decoration:none;margin-top:20px;}.logo-img.jsx-4138910851{margin-top:4px;width:60px;height:35px;}.logo-type.jsx-4138910851{color:white;font-size:1.4rem;font-weight:500;margin-top:8px;font-family:'Paytone One',sans-serif;font-weight:200;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EZXYvRG9jdW1lbnRzL2Rpc2NvdmVyZG9vLWFwcC9jb21wb25lbnRzL25hdjIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEVrQixBQUlnQixBQVFNLEFBS0csQUFLRyxBQVVBLEFBTVosQUFPQSxBQU1FLEFBTUgsV0EzQ1AsQ0E0Q1ksRUF4Q08sQ0FrQ2IsRUE3QlksQUFVQSxTQW9CWCxDQXZDTixFQTZDVSxDQXhDVixFQUt5QixBQVVMLE1Bb0I1QixPQU1pQixLQXpCVCxLQVZhLEtBc0NrQixNQXJDWixRQXJCSyxBQWtDTCxBQU9KLFNBbkJHLGNBc0NBLEVBckNHLGNBc0NBLFdBbkJYLGdCQUNsQiwrQkFSYyxZQUNJLE1BbkNZLEdBdUJ0QixPQWFSLE9BMkJBLFdBOUQ2QixtQkFDTSx5QkFDakMiLCJmaWxlIjoiL1VzZXJzL0Rldi9Eb2N1bWVudHMvZGlzY292ZXJkb28tYXBwL2NvbXBvbmVudHMvbmF2Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBhdXRoMCBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoMCdcbmltcG9ydCBTaWRlTWVudSBmcm9tICcuL3NpZGVNZW51J1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiIG9uQ2xpY2s9e2F1dGgwLmxvZ2lufT5TSUdOIElOPC9zcGFuPlxuICApXG59XG5cbmNvbnN0IExvZ2luQWRkQWN0aXZpdHkgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBvbkNsaWNrPXthdXRoMC5sb2dpbkFkZEFjdGl2aXR5fT5BREQgQUNUSVZJVFk8L3NwYW4+XG4gIClcbn1cblxuY29uc3QgTG9nb3V0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgb25DbGljaz17YXV0aDAubG9nb3V0fT5MT0dPVVQ8L3NwYW4+XG4gIClcbn1cblxuY29uc3QgQWRkQWN0aXZpdHkgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj1cIi9jcmVhdGVcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+QUREIEFDVElWSVRZPC9zcGFuPlxuICAgIDwvTGluaz5cbiAgKVxufVxuXG5jb25zdCBNeUFjdGl2aXRpZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj1cIi9teS1hY3Rpdml0aWVzXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPk1ZIEFDVElWSVRJRVM8L3NwYW4+XG4gICAgPC9MaW5rPlxuICApXG59XG5cbmNvbnN0IE5hdiA9ICgpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1haW4taGVhZGVyXCI+XG5cblxuXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImxvZ28tZ3JvdXBcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvbG9nby5zdmdcIiBjbGFzc05hbWU9XCJsb2dvLWltZ1wiIGFsdD1cImRvbyBsb2dvXCIgLz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxvZ28tdHlwZVwiPmRpc2NvdmVyZG9vPC9oMT5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuXG5cblxuXG5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICB7IGF1dGgwLmlzQXV0aGVudGljYXRlZCgpICYmXG4gICAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2dlZGluXCI+XG4gICAgICAgICAgICA8QWRkQWN0aXZpdHkgLz5cbiAgICAgICAgICAgIDxNeUFjdGl2aXRpZXMgLz5cbiAgICAgICAgICAgIDxMb2dvdXQgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8U2lkZU1lbnUgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgICB9XG4gICAgICAgICAgeyBhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSA9PT0gZmFsc2UgJiZcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPExvZ2luQWRkQWN0aXZpdHkgLz5cbiAgICAgICAgICAgIDxMb2dpbiAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuLm1haW4taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxNXB4IDEwcHggMTVweCAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBiMzM0ZDtcbiAgfVxuXG4gICAgICAgICNsb2dvIHtcbiAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOjIwcHhcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb3VudHJ5IHtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRhZ2xpbmUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0xNnB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIH1cblxuICAgICAgICAjbWVudSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcbiAgICAgICAgfVxuXG4ubWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHdpZHRoOiAyODBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmxvZ28tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5sb2dvLWltZyB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLmxvZ28tdHlwZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgXG5cbiAgZm9udC1mYW1pbHk6ICdQYXl0b25lIE9uZScsc2Fucy1zZXJpZjtcblxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcblxuXG59XG5cblxuXG5cblxuXG5cblxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdiJdfQ== */\\n/*@ sourceURL=/Users/Dev/Documents/discoverdoo-app/components/nav2.js */\"));\n};\n\n_c6 = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"Login\");\n$RefreshReg$(_c2, \"LoginAddActivity\");\n$RefreshReg$(_c3, \"Logout\");\n$RefreshReg$(_c4, \"AddActivity\");\n$RefreshReg$(_c5, \"MyActivities\");\n$RefreshReg$(_c6, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdjIuanM/MzdmNyJdLCJuYW1lcyI6WyJMb2dpbiIsImF1dGgwIiwibG9naW4iLCJMb2dpbkFkZEFjdGl2aXR5IiwibG9naW5BZGRBY3Rpdml0eSIsIkxvZ291dCIsImxvZ291dCIsIkFkZEFjdGl2aXR5IiwiTXlBY3Rpdml0aWVzIiwiTmF2IiwiaXNBdXRoZW50aWNhdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQixTQUNFO0FBQU0sYUFBUyxFQUFDLFVBQWhCO0FBQTJCLFdBQU8sRUFBRUMsdURBQUssQ0FBQ0MsS0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBR0QsQ0FKRDs7S0FBTUYsSzs7QUFNTixJQUFNRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0IsU0FDRTtBQUFNLGFBQVMsRUFBQyxVQUFoQjtBQUEyQixXQUFPLEVBQUVGLHVEQUFLLENBQUNHLGdCQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGO0FBR0QsQ0FKRDs7TUFBTUQsZ0I7O0FBTU4sSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixTQUNFO0FBQU0sYUFBUyxFQUFDLFVBQWhCO0FBQTJCLFdBQU8sRUFBRUosdURBQUssQ0FBQ0ssTUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBR0QsQ0FKRDs7TUFBTUQsTTs7QUFNTixJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBREY7QUFLRCxDQU5EOztNQUFNQSxXOztBQVFOLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsU0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGdCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLENBREY7QUFLRCxDQU5EOztNQUFNQSxZOztBQVFOLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFFaEIsU0FDRSxtRUFDRTtBQUFBLHdDQUFrQixhQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBLHdDQUFhLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssT0FBRyxFQUFDLFdBQVQ7QUFBMEMsT0FBRyxFQUFDLFVBQTlDO0FBQUEsd0NBQStCLFVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxFQUVBO0FBQUEsd0NBQWMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZBLENBREEsQ0FKRixFQWlCQTtBQUFBLHdDQUFlLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNNUix1REFBSyxDQUFDUyxlQUFOLE1BQ0YsbUVBQ0E7QUFBQSx3Q0FBZSxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FEQSxFQU1BLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5BLENBRkosRUFXTVQsdURBQUssQ0FBQ1MsZUFBTixPQUE0QixLQUE1QixJQUNGLG1FQUNFLE1BQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQVpKLENBakJBLENBREY7QUFBQTtBQUFBO0FBQUEscXpMQURGO0FBc0hELENBeEhEOztNQUFNRCxHO0FBMEhTQSxrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbmF2Mi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBhdXRoMCBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoMCdcbmltcG9ydCBTaWRlTWVudSBmcm9tICcuL3NpZGVNZW51J1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiIG9uQ2xpY2s9e2F1dGgwLmxvZ2lufT5TSUdOIElOPC9zcGFuPlxuICApXG59XG5cbmNvbnN0IExvZ2luQWRkQWN0aXZpdHkgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBvbkNsaWNrPXthdXRoMC5sb2dpbkFkZEFjdGl2aXR5fT5BREQgQUNUSVZJVFk8L3NwYW4+XG4gIClcbn1cblxuY29uc3QgTG9nb3V0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgb25DbGljaz17YXV0aDAubG9nb3V0fT5MT0dPVVQ8L3NwYW4+XG4gIClcbn1cblxuY29uc3QgQWRkQWN0aXZpdHkgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj1cIi9jcmVhdGVcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+QUREIEFDVElWSVRZPC9zcGFuPlxuICAgIDwvTGluaz5cbiAgKVxufVxuXG5jb25zdCBNeUFjdGl2aXRpZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj1cIi9teS1hY3Rpdml0aWVzXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPk1ZIEFDVElWSVRJRVM8L3NwYW4+XG4gICAgPC9MaW5rPlxuICApXG59XG5cbmNvbnN0IE5hdiA9ICgpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1haW4taGVhZGVyXCI+XG5cblxuXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImxvZ28tZ3JvdXBcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvbG9nby5zdmdcIiBjbGFzc05hbWU9XCJsb2dvLWltZ1wiIGFsdD1cImRvbyBsb2dvXCIgLz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxvZ28tdHlwZVwiPmRpc2NvdmVyZG9vPC9oMT5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuXG5cblxuXG5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICB7IGF1dGgwLmlzQXV0aGVudGljYXRlZCgpICYmXG4gICAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2dlZGluXCI+XG4gICAgICAgICAgICA8QWRkQWN0aXZpdHkgLz5cbiAgICAgICAgICAgIDxNeUFjdGl2aXRpZXMgLz5cbiAgICAgICAgICAgIDxMb2dvdXQgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8U2lkZU1lbnUgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgICB9XG4gICAgICAgICAgeyBhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSA9PT0gZmFsc2UgJiZcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPExvZ2luQWRkQWN0aXZpdHkgLz5cbiAgICAgICAgICAgIDxMb2dpbiAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuLm1haW4taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxNXB4IDEwcHggMTVweCAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBiMzM0ZDtcbiAgfVxuXG4gICAgICAgICNsb2dvIHtcbiAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOjIwcHhcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb3VudHJ5IHtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRhZ2xpbmUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0xNnB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIH1cblxuICAgICAgICAjbWVudSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcbiAgICAgICAgfVxuXG4ubWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHdpZHRoOiAyODBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmxvZ28tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5sb2dvLWltZyB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLmxvZ28tdHlwZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgXG5cbiAgZm9udC1mYW1pbHk6ICdQYXl0b25lIE9uZScsc2Fucy1zZXJpZjtcblxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcblxuXG59XG5cblxuXG5cblxuXG5cblxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/nav2.js\n");

/***/ })

})