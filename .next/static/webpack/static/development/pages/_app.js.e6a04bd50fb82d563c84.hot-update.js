webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/sideMenu.js":
/*!********************************!*\
  !*** ./components/sideMenu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth0 */ \"./services/auth0.js\");\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-burger-menu */ \"./node_modules/react-burger-menu/lib/BurgerMenu.js\");\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Documents/discoverdoo-app/components/sideMenu.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar styles = {\n  bmBurgerButton: {\n    position: 'absolute',\n    width: '32px',\n    height: '26px',\n    right: '26px',\n    top: '20px'\n  },\n  bmBurgerBars: {\n    background: '#ffffff'\n  },\n  bmBurgerBarsHover: {\n    background: '#a90000'\n  },\n  bmCrossButton: {\n    height: '24px',\n    width: '24px'\n  },\n  bmCross: {\n    background: '#bdc3c7'\n  },\n  bmMenuWrap: {\n    position: 'fixed',\n    height: '100%',\n    top: '-0px'\n  },\n  bmMenu: {\n    background: '#0b334d',\n    padding: '2.5em 1.5em 0',\n    fontSize: '1.15em',\n    border: '3px solid #cccccc'\n  },\n  bmMorphShape: {\n    fill: '#373a47'\n  },\n  bmItemList: {\n    color: '#b8b7ad',\n    padding: '0.8em'\n  },\n  bmItem: {\n    display: 'block'\n  },\n  bmOverlay: {\n    background: 'rgba(0, 0, 0, 0)'\n  }\n};\n\nvar SideMenu = function SideMenu() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated() && __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_4__[\"stack\"], {\n    className: \"burger\",\n    right: true,\n    styles: styles,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 3\n    }\n  }, __jsx(\"a\", {\n    href: \"/\",\n    className: \"jsx-3291550217\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }\n  }, \"Home\"), __jsx(\"a\", {\n    href: \"/create\",\n    className: \"jsx-3291550217\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 5\n    }\n  }, \"Add activity\"), __jsx(\"a\", {\n    href: \"/my-activities\",\n    className: \"jsx-3291550217\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 5\n    }\n  }, \"My activities\"), __jsx(\"a\", {\n    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].logout,\n    className: \"jsx-3291550217\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 5\n    }\n  }, \"Logout\")), _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated() === false && __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_4__[\"stack\"], {\n    className: \"burger\",\n    right: true,\n    styles: styles,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 1\n    }\n  }, __jsx(\"a\", {\n    href: \"/\",\n    className: \"jsx-3291550217\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 1\n    }\n  }, \"Home\"), __jsx(\"a\", {\n    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].loginAddActivity,\n    className: \"jsx-3291550217\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 1\n    }\n  }, \"Add activity\"), __jsx(\"a\", {\n    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].login,\n    className: \"jsx-3291550217\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 1\n    }\n  }, \"Sign in\")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"3291550217\",\n    __self: _this\n  }, \".menu-item.jsx-3291550217{display:block;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EZXYvRG9jdW1lbnRzL2Rpc2NvdmVyZG9vLWFwcC9jb21wb25lbnRzL3NpZGVNZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStFYyxBQUdtQixjQUNoQiIsImZpbGUiOiIvVXNlcnMvRGV2L0RvY3VtZW50cy9kaXNjb3ZlcmRvby1hcHAvY29tcG9uZW50cy9zaWRlTWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBhdXRoMCBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoMCdcbmltcG9ydCB7IHN0YWNrIGFzIE1lbnUgfSBmcm9tIFwicmVhY3QtYnVyZ2VyLW1lbnVcIjtcblxudmFyIHN0eWxlcyA9IHtcbiAgYm1CdXJnZXJCdXR0b246IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB3aWR0aDogJzMycHgnLFxuICAgIGhlaWdodDogJzI2cHgnLFxuICAgIHJpZ2h0OiAnMjZweCcsXG4gICAgdG9wOiAnMjBweCdcbiAgfSxcbiAgYm1CdXJnZXJCYXJzOiB7XG4gICAgYmFja2dyb3VuZDogJyNmZmZmZmYnXG4gIH0sXG4gIGJtQnVyZ2VyQmFyc0hvdmVyOiB7XG4gICAgYmFja2dyb3VuZDogJyNhOTAwMDAnXG4gIH0sXG4gIGJtQ3Jvc3NCdXR0b246IHtcbiAgICBoZWlnaHQ6ICcyNHB4JyxcbiAgICB3aWR0aDogJzI0cHgnXG4gIH0sXG4gIGJtQ3Jvc3M6IHtcbiAgICBiYWNrZ3JvdW5kOiAnI2JkYzNjNydcbiAgfSxcbiAgYm1NZW51V3JhcDoge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHRvcDogJy0wcHgnXG4gIH0sXG4gIGJtTWVudToge1xuICAgIGJhY2tncm91bmQ6ICcjMGIzMzRkJyxcbiAgICBwYWRkaW5nOiAnMi41ZW0gMS41ZW0gMCcsXG4gICAgZm9udFNpemU6ICcxLjE1ZW0nLFxuICAgIGJvcmRlcjogJzNweCBzb2xpZCAjY2NjY2NjJ1xuICB9LFxuICBibU1vcnBoU2hhcGU6IHtcbiAgICBmaWxsOiAnIzM3M2E0NydcbiAgfSxcbiAgYm1JdGVtTGlzdDoge1xuICAgIGNvbG9yOiAnI2I4YjdhZCcsXG4gICAgcGFkZGluZzogJzAuOGVtJ1xuICB9LFxuICBibUl0ZW06IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snXG4gIH0sXG4gIGJtT3ZlcmxheToge1xuICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDApJ1xuICB9LFxuXG59XG5cbmNvbnN0IFNpZGVNZW51ID0gKCkgPT4ge1xuXG5cbiAgcmV0dXJuIChcblxuICAgIDw+XG5cbnsgYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkgJiZcbiAgPE1lbnUgY2xhc3NOYW1lPVwiYnVyZ2VyXCIgcmlnaHQgc3R5bGVzPXsgc3R5bGVzIH0+XG4gICAgPGEgaHJlZj1cIi9cIj5Ib21lPC9hPlxuICAgIDxhIGhyZWY9XCIvY3JlYXRlXCI+QWRkIGFjdGl2aXR5PC9hPlxuICAgIDxhIGhyZWY9XCIvbXktYWN0aXZpdGllc1wiPk15IGFjdGl2aXRpZXM8L2E+XG4gICAgPGEgb25DbGljaz17YXV0aDAubG9nb3V0fT5Mb2dvdXQ8L2E+XG4gIDwvTWVudT5cblxuICB9XG5cbnsgYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkgPT09IGZhbHNlICYmXG48TWVudSBjbGFzc05hbWU9XCJidXJnZXJcIiByaWdodCBzdHlsZXM9eyBzdHlsZXMgfT5cbjxhIGhyZWY9XCIvXCI+SG9tZTwvYT5cbjxhIG9uQ2xpY2s9e2F1dGgwLmxvZ2luQWRkQWN0aXZpdHl9PkFkZCBhY3Rpdml0eTwvYT5cbjxhIG9uQ2xpY2s9e2F1dGgwLmxvZ2lufT5TaWduIGluPC9hPlxuPC9NZW51PlxuXG4gIH1cblxuICA8c3R5bGUganN4PntgXG4gIC5tZW51LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gfTwvc3R5bGU+XG5cblxuXG5cblxuXG48Lz5cbiAgKVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlTWVudTsiXX0= */\\n/*@ sourceURL=/Users/Dev/Documents/discoverdoo-app/components/sideMenu.js */\"));\n};\n\n_c = SideMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"SideMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGVNZW51LmpzPzU2ODMiXSwibmFtZXMiOlsic3R5bGVzIiwiYm1CdXJnZXJCdXR0b24iLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwicmlnaHQiLCJ0b3AiLCJibUJ1cmdlckJhcnMiLCJiYWNrZ3JvdW5kIiwiYm1CdXJnZXJCYXJzSG92ZXIiLCJibUNyb3NzQnV0dG9uIiwiYm1Dcm9zcyIsImJtTWVudVdyYXAiLCJibU1lbnUiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJib3JkZXIiLCJibU1vcnBoU2hhcGUiLCJmaWxsIiwiYm1JdGVtTGlzdCIsImNvbG9yIiwiYm1JdGVtIiwiZGlzcGxheSIsImJtT3ZlcmxheSIsIlNpZGVNZW51IiwiYXV0aDAiLCJpc0F1dGhlbnRpY2F0ZWQiLCJsb2dvdXQiLCJsb2dpbkFkZEFjdGl2aXR5IiwibG9naW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsTUFBTSxHQUFHO0FBQ1hDLGdCQUFjLEVBQUU7QUFDZEMsWUFBUSxFQUFFLFVBREk7QUFFZEMsU0FBSyxFQUFFLE1BRk87QUFHZEMsVUFBTSxFQUFFLE1BSE07QUFJZEMsU0FBSyxFQUFFLE1BSk87QUFLZEMsT0FBRyxFQUFFO0FBTFMsR0FETDtBQVFYQyxjQUFZLEVBQUU7QUFDWkMsY0FBVSxFQUFFO0FBREEsR0FSSDtBQVdYQyxtQkFBaUIsRUFBRTtBQUNqQkQsY0FBVSxFQUFFO0FBREssR0FYUjtBQWNYRSxlQUFhLEVBQUU7QUFDYk4sVUFBTSxFQUFFLE1BREs7QUFFYkQsU0FBSyxFQUFFO0FBRk0sR0FkSjtBQWtCWFEsU0FBTyxFQUFFO0FBQ1BILGNBQVUsRUFBRTtBQURMLEdBbEJFO0FBcUJYSSxZQUFVLEVBQUU7QUFDVlYsWUFBUSxFQUFFLE9BREE7QUFFVkUsVUFBTSxFQUFFLE1BRkU7QUFHVkUsT0FBRyxFQUFFO0FBSEssR0FyQkQ7QUEwQlhPLFFBQU0sRUFBRTtBQUNOTCxjQUFVLEVBQUUsU0FETjtBQUVOTSxXQUFPLEVBQUUsZUFGSDtBQUdOQyxZQUFRLEVBQUUsUUFISjtBQUlOQyxVQUFNLEVBQUU7QUFKRixHQTFCRztBQWdDWEMsY0FBWSxFQUFFO0FBQ1pDLFFBQUksRUFBRTtBQURNLEdBaENIO0FBbUNYQyxZQUFVLEVBQUU7QUFDVkMsU0FBSyxFQUFFLFNBREc7QUFFVk4sV0FBTyxFQUFFO0FBRkMsR0FuQ0Q7QUF1Q1hPLFFBQU0sRUFBRTtBQUNOQyxXQUFPLEVBQUU7QUFESCxHQXZDRztBQTBDWEMsV0FBUyxFQUFFO0FBQ1RmLGNBQVUsRUFBRTtBQURIO0FBMUNBLENBQWI7O0FBZ0RBLElBQU1nQixRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBR3JCLFNBRUUsbUVBRUZDLHVEQUFLLENBQUNDLGVBQU4sTUFDQSxNQUFDLHVEQUFEO0FBQU0sYUFBUyxFQUFDLFFBQWhCO0FBQXlCLFNBQUssTUFBOUI7QUFBK0IsVUFBTSxFQUFHMUIsTUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFRTtBQUFHLFFBQUksRUFBQyxTQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixFQUdFO0FBQUcsUUFBSSxFQUFDLGdCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixFQUlFO0FBQUcsV0FBTyxFQUFFeUIsdURBQUssQ0FBQ0UsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsQ0FIRSxFQVlGRix1REFBSyxDQUFDQyxlQUFOLE9BQTRCLEtBQTVCLElBQ0YsTUFBQyx1REFBRDtBQUFNLGFBQVMsRUFBQyxRQUFoQjtBQUF5QixTQUFLLE1BQTlCO0FBQStCLFVBQU0sRUFBRzFCLE1BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLEVBRUE7QUFBRyxXQUFPLEVBQUV5Qix1REFBSyxDQUFDRyxnQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZBLEVBR0E7QUFBRyxXQUFPLEVBQUVILHVEQUFLLENBQUNJLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhBLENBYkk7QUFBQTtBQUFBO0FBQUEscW5GQUZGO0FBcUNELENBeENEOztLQUFNTCxRO0FBMENTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc2lkZU1lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vc2VydmljZXMvYXV0aDAnXG5pbXBvcnQgeyBzdGFjayBhcyBNZW51IH0gZnJvbSBcInJlYWN0LWJ1cmdlci1tZW51XCI7XG5cbnZhciBzdHlsZXMgPSB7XG4gIGJtQnVyZ2VyQnV0dG9uOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2lkdGg6ICczMnB4JyxcbiAgICBoZWlnaHQ6ICcyNnB4JyxcbiAgICByaWdodDogJzI2cHgnLFxuICAgIHRvcDogJzIwcHgnXG4gIH0sXG4gIGJtQnVyZ2VyQmFyczoge1xuICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmJ1xuICB9LFxuICBibUJ1cmdlckJhcnNIb3Zlcjoge1xuICAgIGJhY2tncm91bmQ6ICcjYTkwMDAwJ1xuICB9LFxuICBibUNyb3NzQnV0dG9uOiB7XG4gICAgaGVpZ2h0OiAnMjRweCcsXG4gICAgd2lkdGg6ICcyNHB4J1xuICB9LFxuICBibUNyb3NzOiB7XG4gICAgYmFja2dyb3VuZDogJyNiZGMzYzcnXG4gIH0sXG4gIGJtTWVudVdyYXA6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB0b3A6ICctMHB4J1xuICB9LFxuICBibU1lbnU6IHtcbiAgICBiYWNrZ3JvdW5kOiAnIzBiMzM0ZCcsXG4gICAgcGFkZGluZzogJzIuNWVtIDEuNWVtIDAnLFxuICAgIGZvbnRTaXplOiAnMS4xNWVtJyxcbiAgICBib3JkZXI6ICczcHggc29saWQgI2NjY2NjYydcbiAgfSxcbiAgYm1Nb3JwaFNoYXBlOiB7XG4gICAgZmlsbDogJyMzNzNhNDcnXG4gIH0sXG4gIGJtSXRlbUxpc3Q6IHtcbiAgICBjb2xvcjogJyNiOGI3YWQnLFxuICAgIHBhZGRpbmc6ICcwLjhlbSdcbiAgfSxcbiAgYm1JdGVtOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJ1xuICB9LFxuICBibU92ZXJsYXk6IHtcbiAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwKSdcbiAgfSxcblxufVxuXG5jb25zdCBTaWRlTWVudSA9ICgpID0+IHtcblxuXG4gIHJldHVybiAoXG5cbiAgICA8PlxuXG57IGF1dGgwLmlzQXV0aGVudGljYXRlZCgpICYmXG4gIDxNZW51IGNsYXNzTmFtZT1cImJ1cmdlclwiIHJpZ2h0IHN0eWxlcz17IHN0eWxlcyB9PlxuICAgIDxhIGhyZWY9XCIvXCI+SG9tZTwvYT5cbiAgICA8YSBocmVmPVwiL2NyZWF0ZVwiPkFkZCBhY3Rpdml0eTwvYT5cbiAgICA8YSBocmVmPVwiL215LWFjdGl2aXRpZXNcIj5NeSBhY3Rpdml0aWVzPC9hPlxuICAgIDxhIG9uQ2xpY2s9e2F1dGgwLmxvZ291dH0+TG9nb3V0PC9hPlxuICA8L01lbnU+XG5cbiAgfVxuXG57IGF1dGgwLmlzQXV0aGVudGljYXRlZCgpID09PSBmYWxzZSAmJlxuPE1lbnUgY2xhc3NOYW1lPVwiYnVyZ2VyXCIgcmlnaHQgc3R5bGVzPXsgc3R5bGVzIH0+XG48YSBocmVmPVwiL1wiPkhvbWU8L2E+XG48YSBvbkNsaWNrPXthdXRoMC5sb2dpbkFkZEFjdGl2aXR5fT5BZGQgYWN0aXZpdHk8L2E+XG48YSBvbkNsaWNrPXthdXRoMC5sb2dpbn0+U2lnbiBpbjwvYT5cbjwvTWVudT5cblxuICB9XG5cbiAgPHN0eWxlIGpzeD57YFxuICAubWVudS1pdGVtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYH08L3N0eWxlPlxuXG5cblxuXG5cblxuPC8+XG4gIClcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZU1lbnU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sideMenu.js\n");

/***/ })

})