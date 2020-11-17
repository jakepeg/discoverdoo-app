webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/sideMenu.js":
/*!********************************!*\
  !*** ./components/sideMenu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth0 */ \"./services/auth0.js\");\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-burger-menu */ \"./node_modules/react-burger-menu/lib/BurgerMenu.js\");\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Documents/discoverdoo-app/components/sideMenu.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar styles = {\n  bmBurgerButton: {\n    position: 'absolute',\n    width: '32px',\n    height: '26px',\n    right: '26px',\n    top: '20px'\n  },\n  bmBurgerBars: {\n    background: '#ffffff'\n  },\n  bmBurgerBarsHover: {\n    background: '#a90000'\n  },\n  bmCrossButton: {\n    height: '24px',\n    width: '24px'\n  },\n  bmCross: {\n    background: '#ffffff'\n  },\n  bmMenuWrap: {\n    position: 'fixed',\n    height: '100%',\n    top: '-0px'\n  },\n  bmMenu: {\n    background: '#494949',\n    padding: '',\n    fontSize: '1.6em',\n    border: '2px solid #cccccc'\n  },\n  bmMorphShape: {\n    fill: '#373a47'\n  },\n  bmItemList: {\n    color: '#b8b7ad',\n    padding: '1.5em 0 0 0.8em'\n  },\n  bmItem: {\n    display: 'block',\n    padding: '0.2em 0',\n    color: 'white',\n    fontFamily: 'Paytone One'\n  },\n  bmOverlay: {\n    background: 'rgba(0, 0, 0, 0)'\n  }\n};\n\nvar SideMenu = function SideMenu() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, _services_auth0__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isAuthenticated() && __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__[\"stack\"], {\n    className: \"burger\",\n    right: true,\n    styles: styles,\n    width: '220px',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }, \"Home\"), __jsx(\"a\", {\n    href: \"/create\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }, \"Add activity\"), __jsx(\"a\", {\n    href: \"/my-activities\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }, \"My activities\"), __jsx(\"a\", {\n    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_1__[\"default\"].logout,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, \"Logout\")), _services_auth0__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isAuthenticated() === false && __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__[\"stack\"], {\n    className: \"burger\",\n    right: true,\n    styles: styles,\n    width: '220px',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, \"Home\"), __jsx(\"a\", {\n    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loginAddActivity,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, \"Add activity\"), __jsx(\"a\", {\n    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_1__[\"default\"].login,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }, \"Sign in\")));\n};\n\n_c = SideMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"SideMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGVNZW51LmpzPzU2ODMiXSwibmFtZXMiOlsic3R5bGVzIiwiYm1CdXJnZXJCdXR0b24iLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwicmlnaHQiLCJ0b3AiLCJibUJ1cmdlckJhcnMiLCJiYWNrZ3JvdW5kIiwiYm1CdXJnZXJCYXJzSG92ZXIiLCJibUNyb3NzQnV0dG9uIiwiYm1Dcm9zcyIsImJtTWVudVdyYXAiLCJibU1lbnUiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJib3JkZXIiLCJibU1vcnBoU2hhcGUiLCJmaWxsIiwiYm1JdGVtTGlzdCIsImNvbG9yIiwiYm1JdGVtIiwiZGlzcGxheSIsImZvbnRGYW1pbHkiLCJibU92ZXJsYXkiLCJTaWRlTWVudSIsImF1dGgwIiwiaXNBdXRoZW50aWNhdGVkIiwibG9nb3V0IiwibG9naW5BZGRBY3Rpdml0eSIsImxvZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBSUEsTUFBTSxHQUFHO0FBQ1hDLGdCQUFjLEVBQUU7QUFDZEMsWUFBUSxFQUFFLFVBREk7QUFFZEMsU0FBSyxFQUFFLE1BRk87QUFHZEMsVUFBTSxFQUFFLE1BSE07QUFJZEMsU0FBSyxFQUFFLE1BSk87QUFLZEMsT0FBRyxFQUFFO0FBTFMsR0FETDtBQVFYQyxjQUFZLEVBQUU7QUFDWkMsY0FBVSxFQUFFO0FBREEsR0FSSDtBQVdYQyxtQkFBaUIsRUFBRTtBQUNqQkQsY0FBVSxFQUFFO0FBREssR0FYUjtBQWNYRSxlQUFhLEVBQUU7QUFDYk4sVUFBTSxFQUFFLE1BREs7QUFFYkQsU0FBSyxFQUFFO0FBRk0sR0FkSjtBQWtCWFEsU0FBTyxFQUFFO0FBQ1BILGNBQVUsRUFBRTtBQURMLEdBbEJFO0FBcUJYSSxZQUFVLEVBQUU7QUFDVlYsWUFBUSxFQUFFLE9BREE7QUFFVkUsVUFBTSxFQUFFLE1BRkU7QUFHVkUsT0FBRyxFQUFFO0FBSEssR0FyQkQ7QUEwQlhPLFFBQU0sRUFBRTtBQUNOTCxjQUFVLEVBQUUsU0FETjtBQUVOTSxXQUFPLEVBQUUsRUFGSDtBQUdOQyxZQUFRLEVBQUUsT0FISjtBQUlOQyxVQUFNLEVBQUU7QUFKRixHQTFCRztBQWdDWEMsY0FBWSxFQUFFO0FBQ1pDLFFBQUksRUFBRTtBQURNLEdBaENIO0FBbUNYQyxZQUFVLEVBQUU7QUFDVkMsU0FBSyxFQUFFLFNBREc7QUFFVk4sV0FBTyxFQUFFO0FBRkMsR0FuQ0Q7QUF1Q1hPLFFBQU0sRUFBRTtBQUNOQyxXQUFPLEVBQUUsT0FESDtBQUVOUixXQUFPLEVBQUUsU0FGSDtBQUdOTSxTQUFLLEVBQUUsT0FIRDtBQUlORyxjQUFVLEVBQUU7QUFKTixHQXZDRztBQTZDWEMsV0FBUyxFQUFFO0FBQ1RoQixjQUFVLEVBQUU7QUFESDtBQTdDQSxDQUFiOztBQWtEQSxJQUFNaUIsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUVyQixTQUNFLG1FQUNJQyx1REFBSyxDQUFDQyxlQUFOLE1BQ0EsTUFBQyx1REFBRDtBQUFNLGFBQVMsRUFBQyxRQUFoQjtBQUF5QixTQUFLLE1BQTlCO0FBQStCLFVBQU0sRUFBRzNCLE1BQXhDO0FBQWlELFNBQUssRUFBRyxPQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFRTtBQUFHLFFBQUksRUFBQyxTQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsRUFHRTtBQUFHLFFBQUksRUFBQyxnQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGLEVBSUU7QUFBRyxXQUFPLEVBQUUwQix1REFBSyxDQUFDRSxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsQ0FGSixFQVVJRix1REFBSyxDQUFDQyxlQUFOLE9BQTRCLEtBQTVCLElBQ0EsTUFBQyx1REFBRDtBQUFNLGFBQVMsRUFBQyxRQUFoQjtBQUF5QixTQUFLLE1BQTlCO0FBQStCLFVBQU0sRUFBRzNCLE1BQXhDO0FBQWlELFNBQUssRUFBRyxPQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsRUFFQTtBQUFHLFdBQU8sRUFBRTBCLHVEQUFLLENBQUNHLGdCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZBLEVBR0E7QUFBRyxXQUFPLEVBQUVILHVEQUFLLENBQUNJLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIQSxDQVhKLENBREY7QUFvQkQsQ0F0QkQ7O0tBQU1MLFE7QUF3QlNBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zaWRlTWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBhdXRoMCBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoMCdcbmltcG9ydCB7IHN0YWNrIGFzIE1lbnUgfSBmcm9tIFwicmVhY3QtYnVyZ2VyLW1lbnVcIjtcblxudmFyIHN0eWxlcyA9IHtcbiAgYm1CdXJnZXJCdXR0b246IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB3aWR0aDogJzMycHgnLFxuICAgIGhlaWdodDogJzI2cHgnLFxuICAgIHJpZ2h0OiAnMjZweCcsXG4gICAgdG9wOiAnMjBweCdcbiAgfSxcbiAgYm1CdXJnZXJCYXJzOiB7XG4gICAgYmFja2dyb3VuZDogJyNmZmZmZmYnXG4gIH0sXG4gIGJtQnVyZ2VyQmFyc0hvdmVyOiB7XG4gICAgYmFja2dyb3VuZDogJyNhOTAwMDAnXG4gIH0sXG4gIGJtQ3Jvc3NCdXR0b246IHtcbiAgICBoZWlnaHQ6ICcyNHB4JyxcbiAgICB3aWR0aDogJzI0cHgnXG4gIH0sXG4gIGJtQ3Jvc3M6IHtcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZmZmZidcbiAgfSxcbiAgYm1NZW51V3JhcDoge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHRvcDogJy0wcHgnLFxuICB9LFxuICBibU1lbnU6IHtcbiAgICBiYWNrZ3JvdW5kOiAnIzQ5NDk0OScsXG4gICAgcGFkZGluZzogJycsXG4gICAgZm9udFNpemU6ICcxLjZlbScsXG4gICAgYm9yZGVyOiAnMnB4IHNvbGlkICNjY2NjY2MnXG4gIH0sXG4gIGJtTW9ycGhTaGFwZToge1xuICAgIGZpbGw6ICcjMzczYTQ3J1xuICB9LFxuICBibUl0ZW1MaXN0OiB7XG4gICAgY29sb3I6ICcjYjhiN2FkJyxcbiAgICBwYWRkaW5nOiAnMS41ZW0gMCAwIDAuOGVtJyxcbiAgfSxcbiAgYm1JdGVtOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwYWRkaW5nOiAnMC4yZW0gMCcsXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgZm9udEZhbWlseTogJ1BheXRvbmUgT25lJyxcbiAgfSxcbiAgYm1PdmVybGF5OiB7XG4gICAgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMCknLFxuICB9LFxufVxuXG5jb25zdCBTaWRlTWVudSA9ICgpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IGF1dGgwLmlzQXV0aGVudGljYXRlZCgpICYmXG4gICAgICAgIDxNZW51IGNsYXNzTmFtZT1cImJ1cmdlclwiIHJpZ2h0IHN0eWxlcz17IHN0eWxlcyB9IHdpZHRoPXsgJzIyMHB4JyB9PlxuICAgICAgICAgIDxhIGhyZWY9XCIvXCI+SG9tZTwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiL2NyZWF0ZVwiPkFkZCBhY3Rpdml0eTwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiL215LWFjdGl2aXRpZXNcIj5NeSBhY3Rpdml0aWVzPC9hPlxuICAgICAgICAgIDxhIG9uQ2xpY2s9e2F1dGgwLmxvZ291dH0+TG9nb3V0PC9hPlxuICAgICAgICA8L01lbnU+XG4gICAgICB9XG5cbiAgICAgIHsgYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkgPT09IGZhbHNlICYmXG4gICAgICAgIDxNZW51IGNsYXNzTmFtZT1cImJ1cmdlclwiIHJpZ2h0IHN0eWxlcz17IHN0eWxlcyB9IHdpZHRoPXsgJzIyMHB4JyB9PlxuICAgICAgICA8YSBocmVmPVwiL1wiPkhvbWU8L2E+XG4gICAgICAgIDxhIG9uQ2xpY2s9e2F1dGgwLmxvZ2luQWRkQWN0aXZpdHl9PkFkZCBhY3Rpdml0eTwvYT5cbiAgICAgICAgPGEgb25DbGljaz17YXV0aDAubG9naW59PlNpZ24gaW48L2E+XG4gICAgICAgIDwvTWVudT5cbiAgICAgIH1cbiAgICA8Lz5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZU1lbnU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sideMenu.js\n");

/***/ })

})