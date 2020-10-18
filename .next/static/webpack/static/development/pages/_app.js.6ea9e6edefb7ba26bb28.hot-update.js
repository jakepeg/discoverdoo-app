webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/nav2.js":
/*!****************************!*\
  !*** ./components/nav2.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth0 */ \"./services/auth0.js\");\n/* harmony import */ var _sideMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sideMenu */ \"./components/sideMenu.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Documents/discoverdoo-app/components/nav2.js\";\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar Login = function Login() {\n  return __jsx(\"span\", {\n    className: \"nav-link\",\n    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].login,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, \"SIGN IN\");\n};\n\n_c = Login;\n\nvar LoginAddActivity = function LoginAddActivity() {\n  return __jsx(\"span\", {\n    className: \"nav-link\",\n    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].loginAddActivity,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, \"ADD ACTIVITY\");\n};\n\n_c2 = LoginAddActivity;\n\nvar Logout = function Logout() {\n  return __jsx(\"span\", {\n    className: \"nav-link\",\n    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].logout,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, \"LOGOUT\");\n};\n\n_c3 = Logout;\n\nvar AddActivity = function AddActivity() {\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/create\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    className: \"nav-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, \"ADD ACTIVITY\"));\n};\n\n_c4 = AddActivity;\n\nvar MyActivities = function MyActivities() {\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/my-activities\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    className: \"nav-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, \"MY ACTIVITIES\"));\n};\n\n_c5 = MyActivities;\n\nvar Nav = function Nav() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"header\", {\n    className: \"jsx-1551145897\" + \" \" + \"main-header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-1551145897\" + \" \" + \"logo-group\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"/logo.svg\",\n    alt: \"doo logo\",\n    className: \"jsx-1551145897\" + \" \" + \"logo-img\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }), __jsx(\"h1\", {\n    className: \"jsx-1551145897\" + \" \" + \"logo-type\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, \"discoverdoo\"))), __jsx(\"div\", {\n    className: \"jsx-1551145897\" + \" \" + \"menu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated() && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"jsx-1551145897\" + \" \" + \"loggedin\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, __jsx(AddActivity, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }), __jsx(MyActivities, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }), __jsx(Logout, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  })), __jsx(_sideMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  })), _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated() === false && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(LoginAddActivity, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }), __jsx(Login, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"1551145897\",\n    __self: _this\n  }, \".main-header.jsx-1551145897{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:15px 10px 15px 10px;margin-bottom:20px;background-color:#0b334d;}.menu.jsx-1551145897{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:280px;margin-top:0px;margin-right:13px;}.logo-group.jsx-1551145897{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-text-decoration:none;text-decoration:none;margin-top:0px;}.logo-img.jsx-1551145897{margin-top:4px;width:60px;height:35px;}.logo-type.jsx-1551145897{color:white;font-size:1.2rem;font-weight:500;margin-top:11px;font-family:sans-serif;font-weight:200;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EZXYvRG9jdW1lbnRzL2Rpc2NvdmVyZG9vLWFwcC9jb21wb25lbnRzL25hdjIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUVrQixBQUd3QixBQVFBLEFBUUEsQUFNRSxBQU1ILFlBQ0ssR0FOTixXQUNDLEdBTUksU0FMbEIsT0FNa0IsZ0JBQ08sYUEvQk8sQUFRTCxBQVFKLFVBZ0JMLGdCQUNHLHdCQWhCSixlQUNqQixnQ0FUYyxZQUNHLE1BVGEsSUFpQzlCLEtBdkJvQixrQkFDcEIsQ0FWcUIsbUJBQ00seUJBQzNCIiwiZmlsZSI6Ii9Vc2Vycy9EZXYvRG9jdW1lbnRzL2Rpc2NvdmVyZG9vLWFwcC9jb21wb25lbnRzL25hdjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vc2VydmljZXMvYXV0aDAnXG5pbXBvcnQgU2lkZU1lbnUgZnJvbSAnLi9zaWRlTWVudSdcblxuY29uc3QgTG9naW4gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBvbkNsaWNrPXthdXRoMC5sb2dpbn0+U0lHTiBJTjwvc3Bhbj5cbiAgKVxufVxuXG5jb25zdCBMb2dpbkFkZEFjdGl2aXR5ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgb25DbGljaz17YXV0aDAubG9naW5BZGRBY3Rpdml0eX0+QUREIEFDVElWSVRZPC9zcGFuPlxuICApXG59XG5cbmNvbnN0IExvZ291dCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiIG9uQ2xpY2s9e2F1dGgwLmxvZ291dH0+TE9HT1VUPC9zcGFuPlxuICApXG59XG5cbmNvbnN0IEFkZEFjdGl2aXR5ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkFERCBBQ1RJVklUWTwvc3Bhbj5cbiAgICA8L0xpbms+XG4gIClcbn1cblxuY29uc3QgTXlBY3Rpdml0aWVzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9XCIvbXktYWN0aXZpdGllc1wiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5NWSBBQ1RJVklUSUVTPC9zcGFuPlxuICAgIDwvTGluaz5cbiAgKVxufVxuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJtYWluLWhlYWRlclwiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJsb2dvLWdyb3VwXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL2xvZ28uc3ZnXCIgY2xhc3NOYW1lPVwibG9nby1pbWdcIiBhbHQ9XCJkb28gbG9nb1wiIC8+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJsb2dvLXR5cGVcIj5kaXNjb3ZlcmRvbzwvaDE+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgICAgeyBhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dnZWRpblwiPlxuICAgICAgICAgICAgPEFkZEFjdGl2aXR5IC8+XG4gICAgICAgICAgICA8TXlBY3Rpdml0aWVzIC8+XG4gICAgICAgICAgICA8TG9nb3V0IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFNpZGVNZW51IC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIHsgYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkgPT09IGZhbHNlICYmXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxMb2dpbkFkZEFjdGl2aXR5IC8+XG4gICAgICAgICAgICA8TG9naW4gLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWluLWhlYWRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgcGFkZGluZzogMTVweCAxMHB4IDE1cHggMTBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjMzNGQ7XG4gICAgICAgIH1cblxuICAgICAgICAubWVudSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIHdpZHRoOiAyODBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28tZ3JvdXAge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvLWltZyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvLXR5cGUge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDExcHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2Il19 */\\n/*@ sourceURL=/Users/Dev/Documents/discoverdoo-app/components/nav2.js */\"));\n};\n\n_c6 = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"Login\");\n$RefreshReg$(_c2, \"LoginAddActivity\");\n$RefreshReg$(_c3, \"Logout\");\n$RefreshReg$(_c4, \"AddActivity\");\n$RefreshReg$(_c5, \"MyActivities\");\n$RefreshReg$(_c6, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdjIuanM/MzdmNyJdLCJuYW1lcyI6WyJMb2dpbiIsImF1dGgwIiwibG9naW4iLCJMb2dpbkFkZEFjdGl2aXR5IiwibG9naW5BZGRBY3Rpdml0eSIsIkxvZ291dCIsImxvZ291dCIsIkFkZEFjdGl2aXR5IiwiTXlBY3Rpdml0aWVzIiwiTmF2IiwiaXNBdXRoZW50aWNhdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQixTQUNFO0FBQU0sYUFBUyxFQUFDLFVBQWhCO0FBQTJCLFdBQU8sRUFBRUMsdURBQUssQ0FBQ0MsS0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBR0QsQ0FKRDs7S0FBTUYsSzs7QUFNTixJQUFNRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0IsU0FDRTtBQUFNLGFBQVMsRUFBQyxVQUFoQjtBQUEyQixXQUFPLEVBQUVGLHVEQUFLLENBQUNHLGdCQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGO0FBR0QsQ0FKRDs7TUFBTUQsZ0I7O0FBTU4sSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixTQUNFO0FBQU0sYUFBUyxFQUFDLFVBQWhCO0FBQTJCLFdBQU8sRUFBRUosdURBQUssQ0FBQ0ssTUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBR0QsQ0FKRDs7TUFBTUQsTTs7QUFNTixJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBREY7QUFLRCxDQU5EOztNQUFNQSxXOztBQVFOLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsU0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGdCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLENBREY7QUFLRCxDQU5EOztNQUFNQSxZOztBQVFOLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFFaEIsU0FDRSxtRUFDRTtBQUFBLHdDQUFrQixhQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBLHdDQUFhLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssT0FBRyxFQUFDLFdBQVQ7QUFBMEMsT0FBRyxFQUFDLFVBQTlDO0FBQUEsd0NBQStCLFVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxFQUVBO0FBQUEsd0NBQWMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZBLENBREEsQ0FERixFQVFBO0FBQUEsd0NBQWUsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ01SLHVEQUFLLENBQUNTLGVBQU4sTUFDRixtRUFDQTtBQUFBLHdDQUFlLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURBLEVBTUEsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkEsQ0FGSixFQVdNVCx1REFBSyxDQUFDUyxlQUFOLE9BQTRCLEtBQTVCLElBQ0YsbUVBQ0UsTUFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBWkosQ0FSQSxDQURGO0FBQUE7QUFBQTtBQUFBLCsxSkFERjtBQXNFRCxDQXhFRDs7TUFBTUQsRztBQTBFU0Esa0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdjIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vc2VydmljZXMvYXV0aDAnXG5pbXBvcnQgU2lkZU1lbnUgZnJvbSAnLi9zaWRlTWVudSdcblxuY29uc3QgTG9naW4gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBvbkNsaWNrPXthdXRoMC5sb2dpbn0+U0lHTiBJTjwvc3Bhbj5cbiAgKVxufVxuXG5jb25zdCBMb2dpbkFkZEFjdGl2aXR5ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgb25DbGljaz17YXV0aDAubG9naW5BZGRBY3Rpdml0eX0+QUREIEFDVElWSVRZPC9zcGFuPlxuICApXG59XG5cbmNvbnN0IExvZ291dCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiIG9uQ2xpY2s9e2F1dGgwLmxvZ291dH0+TE9HT1VUPC9zcGFuPlxuICApXG59XG5cbmNvbnN0IEFkZEFjdGl2aXR5ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkFERCBBQ1RJVklUWTwvc3Bhbj5cbiAgICA8L0xpbms+XG4gIClcbn1cblxuY29uc3QgTXlBY3Rpdml0aWVzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9XCIvbXktYWN0aXZpdGllc1wiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5NWSBBQ1RJVklUSUVTPC9zcGFuPlxuICAgIDwvTGluaz5cbiAgKVxufVxuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJtYWluLWhlYWRlclwiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJsb2dvLWdyb3VwXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL2xvZ28uc3ZnXCIgY2xhc3NOYW1lPVwibG9nby1pbWdcIiBhbHQ9XCJkb28gbG9nb1wiIC8+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJsb2dvLXR5cGVcIj5kaXNjb3ZlcmRvbzwvaDE+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgICAgeyBhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dnZWRpblwiPlxuICAgICAgICAgICAgPEFkZEFjdGl2aXR5IC8+XG4gICAgICAgICAgICA8TXlBY3Rpdml0aWVzIC8+XG4gICAgICAgICAgICA8TG9nb3V0IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFNpZGVNZW51IC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIHsgYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkgPT09IGZhbHNlICYmXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxMb2dpbkFkZEFjdGl2aXR5IC8+XG4gICAgICAgICAgICA8TG9naW4gLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWluLWhlYWRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgcGFkZGluZzogMTVweCAxMHB4IDE1cHggMTBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjMzNGQ7XG4gICAgICAgIH1cblxuICAgICAgICAubWVudSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIHdpZHRoOiAyODBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28tZ3JvdXAge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvLWltZyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvLXR5cGUge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDExcHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/nav2.js\n");

/***/ })

})