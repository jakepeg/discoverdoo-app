webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/nav2.js":
/*!****************************!*\
  !*** ./components/nav2.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth0 */ \"./services/auth0.js\");\n/* harmony import */ var _sideMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sideMenu */ \"./components/sideMenu.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Documents/discoverdoo-app/components/nav2.js\";\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar Login = function Login() {\n  return __jsx(\"span\", {\n    className: \"nav-link\",\n    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].login,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, \"SIGN IN\");\n};\n\n_c = Login;\n\nvar LoginAddActivity = function LoginAddActivity() {\n  return __jsx(\"span\", {\n    className: \"nav-link\",\n    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].loginAddActivity,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, \"ADD ACTIVITY\");\n};\n\n_c2 = LoginAddActivity;\n\nvar Logout = function Logout() {\n  return __jsx(\"span\", {\n    className: \"nav-link\",\n    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].logout,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, \"LOGOUT\");\n};\n\n_c3 = Logout;\n\nvar AddActivity = function AddActivity() {\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/create\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    className: \"nav-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, \"ADD ACTIVITY\"));\n};\n\n_c4 = AddActivity;\n\nvar MyActivities = function MyActivities() {\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/my-activities\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    className: \"nav-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, \"MY ACTIVITIES\"));\n};\n\n_c5 = MyActivities;\n\nvar Nav = function Nav() {\n  return __jsx(\"header\", {\n    className: \"jsx-109246281\" + \" \" + \"header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-109246281\" + \" \" + \"main-header contain\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-109246281\" + \" \" + \"logo-group\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"/logo.svg\",\n    alt: \"doo logo\",\n    className: \"jsx-109246281\" + \" \" + \"logo-img\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }), __jsx(\"h1\", {\n    className: \"jsx-109246281\" + \" \" + \"logo-type\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, \"discoverdoo\"))), __jsx(\"div\", {\n    className: \"jsx-109246281\" + \" \" + \"menu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated() && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"jsx-109246281\" + \" \" + \"loggedin top-menu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, __jsx(AddActivity, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }), __jsx(MyActivities, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }), __jsx(Logout, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  })), __jsx(_sideMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  })), _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated() === false && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"span\", {\n    className: \"jsx-109246281\" + \" \" + \"top-menu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, __jsx(LoginAddActivity, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 15\n    }\n  }), __jsx(Login, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 15\n    }\n  })), __jsx(_sideMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"109246281\",\n    __self: _this\n  }, \"header.jsx-109246281{background-color:#0b334d;}.main-header.jsx-109246281{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-top:15px;padding-bottom:20px;}.menu.jsx-109246281{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:450px;margin-top:4px;}.logo-group.jsx-109246281{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-text-decoration:none;text-decoration:none;margin-top:0px;margin-left:-5px;}.logo-img.jsx-109246281{margin-top:4px;width:60px;height:35px;}.logo-type.jsx-109246281{color:white;font-size:1.1rem;font-weight:400;margin-top:10px;font-family:sans-serif;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}@media (max-width:768px){.top-menu.jsx-109246281{display:none;}.loggedin.jsx-109246281{display:none;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EZXYvRG9jdW1lbnRzL2Rpc2NvdmVyZG9vLWFwcC9jb21wb25lbnRzL25hdjIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0VrQixBQUlvQyxBQUlaLEFBT0EsQUFPQSxBQU9FLEFBTUgsQUFXRyxBQUlBLFlBZEUsQ0FXakIsQUFJQSxFQXJCVyxVQXpCYixDQTBCYyxHQU1JLFNBTGxCLE9BTWtCLGdCQUNPLGFBOUJPLEFBT0wsQUFPSixVQWlCRix3Q0FoQkosZUFDRSxpQkFDbkIsZUFUYyxNQXdCZCxNQXZCaUIsTUFSRSxTQVNuQixRQVJzQixvQkFDdEIiLCJmaWxlIjoiL1VzZXJzL0Rldi9Eb2N1bWVudHMvZGlzY292ZXJkb28tYXBwL2NvbXBvbmVudHMvbmF2Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBhdXRoMCBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoMCdcbmltcG9ydCBTaWRlTWVudSBmcm9tICcuL3NpZGVNZW51J1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiIG9uQ2xpY2s9e2F1dGgwLmxvZ2lufT5TSUdOIElOPC9zcGFuPlxuICApXG59XG5cbmNvbnN0IExvZ2luQWRkQWN0aXZpdHkgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBvbkNsaWNrPXthdXRoMC5sb2dpbkFkZEFjdGl2aXR5fT5BREQgQUNUSVZJVFk8L3NwYW4+XG4gIClcbn1cblxuY29uc3QgTG9nb3V0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgb25DbGljaz17YXV0aDAubG9nb3V0fT5MT0dPVVQ8L3NwYW4+XG4gIClcbn1cblxuY29uc3QgQWRkQWN0aXZpdHkgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj1cIi9jcmVhdGVcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+QUREIEFDVElWSVRZPC9zcGFuPlxuICAgIDwvTGluaz5cbiAgKVxufVxuXG5jb25zdCBNeUFjdGl2aXRpZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj1cIi9teS1hY3Rpdml0aWVzXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPk1ZIEFDVElWSVRJRVM8L3NwYW4+XG4gICAgPC9MaW5rPlxuICApXG59XG5cbmNvbnN0IE5hdiA9ICgpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taGVhZGVyIGNvbnRhaW5cIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibG9nby1ncm91cFwiPlxuICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLnN2Z1wiIGNsYXNzTmFtZT1cImxvZ28taW1nXCIgYWx0PVwiZG9vIGxvZ29cIiAvPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibG9nby10eXBlXCI+ZGlzY292ZXJkb288L2gxPlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICAgIHsgYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkgJiZcbiAgICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nZ2VkaW4gdG9wLW1lbnVcIj5cbiAgICAgICAgICAgIDxBZGRBY3Rpdml0eSAvPlxuICAgICAgICAgICAgPE15QWN0aXZpdGllcyAvPlxuICAgICAgICAgICAgPExvZ291dCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTaWRlTWVudSAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICAgIH1cbiAgICAgICAgICB7IGF1dGgwLmlzQXV0aGVudGljYXRlZCgpID09PSBmYWxzZSAmJlxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b3AtbWVudVwiPlxuICAgICAgICAgICAgICA8TG9naW5BZGRBY3Rpdml0eSAvPlxuICAgICAgICAgICAgICA8TG9naW4gLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxTaWRlTWVudSAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjMzNGQ7XG4gICAgICAgIH1cblxuICAgICAgICAubWFpbi1oZWFkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lbnUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICB3aWR0aDogNDUwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28tZ3JvdXAge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvLWltZyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvLXR5cGUge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXG4gICAgICAgICAgLnRvcC1tZW51IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxvZ2dlZGluIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdiJdfQ== */\\n/*@ sourceURL=/Users/Dev/Documents/discoverdoo-app/components/nav2.js */\"));\n};\n\n_c6 = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"Login\");\n$RefreshReg$(_c2, \"LoginAddActivity\");\n$RefreshReg$(_c3, \"Logout\");\n$RefreshReg$(_c4, \"AddActivity\");\n$RefreshReg$(_c5, \"MyActivities\");\n$RefreshReg$(_c6, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdjIuanM/MzdmNyJdLCJuYW1lcyI6WyJMb2dpbiIsImF1dGgwIiwibG9naW4iLCJMb2dpbkFkZEFjdGl2aXR5IiwibG9naW5BZGRBY3Rpdml0eSIsIkxvZ291dCIsImxvZ291dCIsIkFkZEFjdGl2aXR5IiwiTXlBY3Rpdml0aWVzIiwiTmF2IiwiaXNBdXRoZW50aWNhdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQixTQUNFO0FBQU0sYUFBUyxFQUFDLFVBQWhCO0FBQTJCLFdBQU8sRUFBRUMsdURBQUssQ0FBQ0MsS0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBR0QsQ0FKRDs7S0FBTUYsSzs7QUFNTixJQUFNRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0IsU0FDRTtBQUFNLGFBQVMsRUFBQyxVQUFoQjtBQUEyQixXQUFPLEVBQUVGLHVEQUFLLENBQUNHLGdCQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGO0FBR0QsQ0FKRDs7TUFBTUQsZ0I7O0FBTU4sSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixTQUNFO0FBQU0sYUFBUyxFQUFDLFVBQWhCO0FBQTJCLFdBQU8sRUFBRUosdURBQUssQ0FBQ0ssTUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBR0QsQ0FKRDs7TUFBTUQsTTs7QUFNTixJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBREY7QUFLRCxDQU5EOztNQUFNQSxXOztBQVFOLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsU0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGdCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLENBREY7QUFLRCxDQU5EOztNQUFNQSxZOztBQVFOLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFFaEIsU0FDRTtBQUFBLHVDQUFrQixRQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx1Q0FBZSxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBLHVDQUFhLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssT0FBRyxFQUFDLFdBQVQ7QUFBMEMsT0FBRyxFQUFDLFVBQTlDO0FBQUEsdUNBQStCLFVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxFQUVBO0FBQUEsdUNBQWMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZBLENBREEsQ0FERixFQVFBO0FBQUEsdUNBQWUsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ01SLHVEQUFLLENBQUNTLGVBQU4sTUFDRixtRUFDQTtBQUFBLHVDQUFlLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FEQSxFQU1BLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5BLENBRkosRUFXTVQsdURBQUssQ0FBQ1MsZUFBTixPQUE0QixLQUE1QixJQUNGLG1FQUNFO0FBQUEsdUNBQWdCLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBWkosQ0FSQSxDQURGO0FBQUE7QUFBQTtBQUFBLCszS0FERjtBQXlGRCxDQTNGRDs7TUFBTUQsRztBQTZGU0Esa0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdjIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vc2VydmljZXMvYXV0aDAnXG5pbXBvcnQgU2lkZU1lbnUgZnJvbSAnLi9zaWRlTWVudSdcblxuY29uc3QgTG9naW4gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBvbkNsaWNrPXthdXRoMC5sb2dpbn0+U0lHTiBJTjwvc3Bhbj5cbiAgKVxufVxuXG5jb25zdCBMb2dpbkFkZEFjdGl2aXR5ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgb25DbGljaz17YXV0aDAubG9naW5BZGRBY3Rpdml0eX0+QUREIEFDVElWSVRZPC9zcGFuPlxuICApXG59XG5cbmNvbnN0IExvZ291dCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiIG9uQ2xpY2s9e2F1dGgwLmxvZ291dH0+TE9HT1VUPC9zcGFuPlxuICApXG59XG5cbmNvbnN0IEFkZEFjdGl2aXR5ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkFERCBBQ1RJVklUWTwvc3Bhbj5cbiAgICA8L0xpbms+XG4gIClcbn1cblxuY29uc3QgTXlBY3Rpdml0aWVzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9XCIvbXktYWN0aXZpdGllc1wiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5NWSBBQ1RJVklUSUVTPC9zcGFuPlxuICAgIDwvTGluaz5cbiAgKVxufVxuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWhlYWRlciBjb250YWluXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImxvZ28tZ3JvdXBcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvbG9nby5zdmdcIiBjbGFzc05hbWU9XCJsb2dvLWltZ1wiIGFsdD1cImRvbyBsb2dvXCIgLz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxvZ28tdHlwZVwiPmRpc2NvdmVyZG9vPC9oMT5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICB7IGF1dGgwLmlzQXV0aGVudGljYXRlZCgpICYmXG4gICAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2dlZGluIHRvcC1tZW51XCI+XG4gICAgICAgICAgICA8QWRkQWN0aXZpdHkgLz5cbiAgICAgICAgICAgIDxNeUFjdGl2aXRpZXMgLz5cbiAgICAgICAgICAgIDxMb2dvdXQgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8U2lkZU1lbnUgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgICB9XG4gICAgICAgICAgeyBhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSA9PT0gZmFsc2UgJiZcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9wLW1lbnVcIj5cbiAgICAgICAgICAgICAgPExvZ2luQWRkQWN0aXZpdHkgLz5cbiAgICAgICAgICAgICAgPExvZ2luIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8U2lkZU1lbnUgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIzMzRkO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1haW4taGVhZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZW51IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgd2lkdGg6IDQ1MHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvLWdyb3VwIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubG9nby1pbWcge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubG9nby10eXBlIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblxuICAgICAgICAgIC50b3AtbWVudSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2dnZWRpbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/nav2.js\n");

/***/ })

})