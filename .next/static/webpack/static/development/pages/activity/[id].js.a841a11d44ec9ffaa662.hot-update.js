webpackHotUpdate("static/development/pages/activity/[id].js",{

/***/ "./components/favourites.js":
/*!**********************************!*\
  !*** ./components/favourites.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth0 */ \"./services/auth0.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ \"./actions/index.js\");\n/* harmony import */ var _heart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./heart */ \"./components/heart.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Dev/discoverdoo-app/components/favourites.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar Favourites = function Favourites(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isClick = _useState[0],\n      setClick = _useState[1];\n\n  var activityId = props.activityId;\n  var user = {};\n\n  if (_services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated()) {\n    user = {\n      user: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('sub'),\n      favourites: JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('favourites').substring(1, js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('favourites').length - 1))\n    };\n  }\n\n  var favourites = user.favourites;\n\n  var clickHeart = function clickHeart() {\n    if (_services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated()) {\n      setClick(!isClick);\n\n      if (isClick === true) {\n        favourites[activityId] = false;\n        Object(_actions__WEBPACK_IMPORTED_MODULE_4__[\"updateFavourites\"])(user);\n        _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setFavesCookie();\n      }\n\n      if (isClick === false) {\n        // if (favourites[activityId] === false) {\n        //   favourites[activityId] = true\n        // } else {\n        //   user.favourites[0].push({activityId: true});\n        // }\n        favourites[activityId] = true;\n        Object(_actions__WEBPACK_IMPORTED_MODULE_4__[\"updateFavourites\"])(user);\n        _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setFavesCookie();\n      }\n    } else {\n      _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].login();\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (_services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated()) {\n      if (favourites[activityId] === true) {\n        setClick(true);\n      }\n    }\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"jsx-290340866\" + \" \" + \"heart\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated() && __jsx(_heart__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    isClick: isClick,\n    onClick: function onClick() {\n      return clickHeart();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }), _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated() === false && __jsx(\"img\", {\n    src: \"https://res.cloudinary.com/jakepeg/image/upload/v1606743872/heart_ozpqja.png\",\n    onClick: function onClick() {\n      return clickHeart();\n    },\n    alt: \"heart icon\",\n    className: \"jsx-290340866\" + \" \" + \"heart-img\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }\n  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"290340866\",\n    __self: _this\n  }, \".heart.jsx-290340866{position:absolute;z-index:10;margin-right:0px;margin-top:-20px;}.heart-img.jsx-290340866{cursor:pointer;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EZXYvRGV2L2Rpc2NvdmVyZG9vLWFwcC9jb21wb25lbnRzL2Zhdm91cml0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RrQixBQUc2QixBQU9ILGVBQ2pCLEdBUGEsV0FDTSxpQkFDQSxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL0Rldi9EZXYvZGlzY292ZXJkb28tYXBwL2NvbXBvbmVudHMvZmF2b3VyaXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vc2VydmljZXMvYXV0aDAnXG5pbXBvcnQgeyB1cGRhdGVGYXZvdXJpdGVzIH0gZnJvbSAnLi4vYWN0aW9ucydcbmltcG9ydCBIZWFydCBmcm9tICcuL2hlYXJ0J1xuIFxuY29uc3QgRmF2b3VyaXRlcyA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbaXNDbGljaywgc2V0Q2xpY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBhY3Rpdml0eUlkID0gcHJvcHMuYWN0aXZpdHlJZFxuICBsZXQgdXNlciA9IHt9XG5cbiAgaWYgKGF1dGgwLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgdXNlciA9IFxuICAgICAge1xuICAgICAgICB1c2VyOiBDb29raWVzLmdldCgnc3ViJyksIFxuICAgICAgICBmYXZvdXJpdGVzOiBKU09OLnBhcnNlKENvb2tpZXMuZ2V0KCdmYXZvdXJpdGVzJykuc3Vic3RyaW5nKDEsIENvb2tpZXMuZ2V0KCdmYXZvdXJpdGVzJykubGVuZ3RoLTEpKVxuICAgICAgfVxuICB9XG5cbiAgY29uc3QgZmF2b3VyaXRlcyA9IHVzZXIuZmF2b3VyaXRlc1xuXG4gIGNvbnN0IGNsaWNrSGVhcnQgPSAoKSA9PiB7XG4gICAgaWYgKGF1dGgwLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgICBzZXRDbGljayghaXNDbGljaylcbiAgICAgIGlmIChpc0NsaWNrID09PSB0cnVlKSB7XG4gICAgICAgIGZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPSBmYWxzZVxuICAgICAgICB1cGRhdGVGYXZvdXJpdGVzKHVzZXIpXG4gICAgICAgIGF1dGgwLnNldEZhdmVzQ29va2llKClcbiAgICAgIH1cbiAgICAgIGlmIChpc0NsaWNrID09PSBmYWxzZSkge1xuICAgICAgICAvLyBpZiAoZmF2b3VyaXRlc1thY3Rpdml0eUlkXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gICBmYXZvdXJpdGVzW2FjdGl2aXR5SWRdID0gdHJ1ZVxuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgIHVzZXIuZmF2b3VyaXRlc1swXS5wdXNoKHthY3Rpdml0eUlkOiB0cnVlfSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgZmF2b3VyaXRlc1thY3Rpdml0eUlkXSA9IHRydWVcbiAgICAgICAgdXBkYXRlRmF2b3VyaXRlcyh1c2VyKVxuICAgICAgICBhdXRoMC5zZXRGYXZlc0Nvb2tpZSgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGF1dGgwLmxvZ2luKClcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgaWYgKGZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPT09IHRydWUpIHtcbiAgICAgICAgc2V0Q2xpY2sodHJ1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhcnRcIj5cbiAgICAgICAgeyBhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgICAgIDxIZWFydCBpc0NsaWNrPXtpc0NsaWNrfSBvbkNsaWNrPXsoKSA9PiBjbGlja0hlYXJ0KCl9IC8+XG4gICAgICAgIH1cbiAgICAgICAgeyBhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSA9PT0gZmFsc2UgJiZcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2pha2VwZWcvaW1hZ2UvdXBsb2FkL3YxNjA2NzQzODcyL2hlYXJ0X296cHFqYS5wbmdcIiBjbGFzc05hbWU9XCJoZWFydC1pbWdcIiBvbkNsaWNrPXsoKSA9PiBjbGlja0hlYXJ0KCl9IGFsdD1cImhlYXJ0IGljb25cIiAvPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaGVhcnQge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICAgICAgfSBcblxuICAgICAgICAuaGVhcnQtaW1nIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGYXZvdXJpdGVzIl19 */\\n/*@ sourceURL=/Users/Dev/Dev/discoverdoo-app/components/favourites.js */\"));\n};\n\n_s(Favourites, \"sTcYVcMsBwvPBxCEkjnrn+avZQ4=\");\n\n_c = Favourites;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Favourites);\n\nvar _c;\n\n$RefreshReg$(_c, \"Favourites\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zhdm91cml0ZXMuanM/ZmI0OSJdLCJuYW1lcyI6WyJGYXZvdXJpdGVzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzQ2xpY2siLCJzZXRDbGljayIsImFjdGl2aXR5SWQiLCJ1c2VyIiwiYXV0aDAiLCJpc0F1dGhlbnRpY2F0ZWQiLCJDb29raWVzIiwiZ2V0IiwiZmF2b3VyaXRlcyIsIkpTT04iLCJwYXJzZSIsInN1YnN0cmluZyIsImxlbmd0aCIsImNsaWNrSGVhcnQiLCJ1cGRhdGVGYXZvdXJpdGVzIiwic2V0RmF2ZXNDb29raWUiLCJsb2dpbiIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0FDLHNEQUFRLENBQUMsS0FBRCxDQURSO0FBQUEsTUFDckJDLE9BRHFCO0FBQUEsTUFDWkMsUUFEWTs7QUFFNUIsTUFBTUMsVUFBVSxHQUFHSixLQUFLLENBQUNJLFVBQXpCO0FBQ0EsTUFBSUMsSUFBSSxHQUFHLEVBQVg7O0FBRUEsTUFBSUMsdURBQUssQ0FBQ0MsZUFBTixFQUFKLEVBQTZCO0FBQzNCRixRQUFJLEdBQ0Y7QUFDRUEsVUFBSSxFQUFFRyxnREFBTyxDQUFDQyxHQUFSLENBQVksS0FBWixDQURSO0FBRUVDLGdCQUFVLEVBQUVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixnREFBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkksU0FBMUIsQ0FBb0MsQ0FBcEMsRUFBdUNMLGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCSyxNQUExQixHQUFpQyxDQUF4RSxDQUFYO0FBRmQsS0FERjtBQUtEOztBQUVELE1BQU1KLFVBQVUsR0FBR0wsSUFBSSxDQUFDSyxVQUF4Qjs7QUFFQSxNQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLFFBQUlULHVEQUFLLENBQUNDLGVBQU4sRUFBSixFQUE2QjtBQUMzQkosY0FBUSxDQUFDLENBQUNELE9BQUYsQ0FBUjs7QUFDQSxVQUFJQSxPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDcEJRLGtCQUFVLENBQUNOLFVBQUQsQ0FBVixHQUF5QixLQUF6QjtBQUNBWSx5RUFBZ0IsQ0FBQ1gsSUFBRCxDQUFoQjtBQUNBQywrREFBSyxDQUFDVyxjQUFOO0FBQ0Q7O0FBQ0QsVUFBSWYsT0FBTyxLQUFLLEtBQWhCLEVBQXVCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQVEsa0JBQVUsQ0FBQ04sVUFBRCxDQUFWLEdBQXlCLElBQXpCO0FBQ0FZLHlFQUFnQixDQUFDWCxJQUFELENBQWhCO0FBQ0FDLCtEQUFLLENBQUNXLGNBQU47QUFDRDtBQUNGLEtBakJELE1BaUJPO0FBQ0xYLDZEQUFLLENBQUNZLEtBQU47QUFDRDtBQUNGLEdBckJEOztBQXVCQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSWIsdURBQUssQ0FBQ0MsZUFBTixFQUFKLEVBQTZCO0FBQzNCLFVBQUlHLFVBQVUsQ0FBQ04sVUFBRCxDQUFWLEtBQTJCLElBQS9CLEVBQXFDO0FBQ25DRCxnQkFBUSxDQUFDLElBQUQsQ0FBUjtBQUNEO0FBQ0Y7QUFDRixHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUEsU0FDRSxtRUFDRTtBQUFBLHVDQUFlLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJRyx1REFBSyxDQUFDQyxlQUFOLE1BQ0EsTUFBQyw4Q0FBRDtBQUFPLFdBQU8sRUFBRUwsT0FBaEI7QUFBeUIsV0FBTyxFQUFFO0FBQUEsYUFBTWEsVUFBVSxFQUFoQjtBQUFBLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUlJVCx1REFBSyxDQUFDQyxlQUFOLE9BQTRCLEtBQTVCLElBQ0E7QUFBSyxPQUFHLEVBQUMsOEVBQVQ7QUFBOEcsV0FBTyxFQUFFO0FBQUEsYUFBTVEsVUFBVSxFQUFoQjtBQUFBLEtBQXZIO0FBQTJJLE9BQUcsRUFBQyxZQUEvSTtBQUFBLHVDQUFrRyxXQUFsRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosQ0FERjtBQUFBO0FBQUE7QUFBQSxzekdBREY7QUEwQkQsQ0F4RUQ7O0dBQU1oQixVOztLQUFBQSxVO0FBMEVTQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvZmF2b3VyaXRlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vc2VydmljZXMvYXV0aDAnXG5pbXBvcnQgeyB1cGRhdGVGYXZvdXJpdGVzIH0gZnJvbSAnLi4vYWN0aW9ucydcbmltcG9ydCBIZWFydCBmcm9tICcuL2hlYXJ0J1xuIFxuY29uc3QgRmF2b3VyaXRlcyA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbaXNDbGljaywgc2V0Q2xpY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBhY3Rpdml0eUlkID0gcHJvcHMuYWN0aXZpdHlJZFxuICBsZXQgdXNlciA9IHt9XG5cbiAgaWYgKGF1dGgwLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgdXNlciA9IFxuICAgICAge1xuICAgICAgICB1c2VyOiBDb29raWVzLmdldCgnc3ViJyksIFxuICAgICAgICBmYXZvdXJpdGVzOiBKU09OLnBhcnNlKENvb2tpZXMuZ2V0KCdmYXZvdXJpdGVzJykuc3Vic3RyaW5nKDEsIENvb2tpZXMuZ2V0KCdmYXZvdXJpdGVzJykubGVuZ3RoLTEpKVxuICAgICAgfVxuICB9XG5cbiAgY29uc3QgZmF2b3VyaXRlcyA9IHVzZXIuZmF2b3VyaXRlc1xuXG4gIGNvbnN0IGNsaWNrSGVhcnQgPSAoKSA9PiB7XG4gICAgaWYgKGF1dGgwLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgICBzZXRDbGljayghaXNDbGljaylcbiAgICAgIGlmIChpc0NsaWNrID09PSB0cnVlKSB7XG4gICAgICAgIGZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPSBmYWxzZVxuICAgICAgICB1cGRhdGVGYXZvdXJpdGVzKHVzZXIpXG4gICAgICAgIGF1dGgwLnNldEZhdmVzQ29va2llKClcbiAgICAgIH1cbiAgICAgIGlmIChpc0NsaWNrID09PSBmYWxzZSkge1xuICAgICAgICAvLyBpZiAoZmF2b3VyaXRlc1thY3Rpdml0eUlkXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gICBmYXZvdXJpdGVzW2FjdGl2aXR5SWRdID0gdHJ1ZVxuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgIHVzZXIuZmF2b3VyaXRlc1swXS5wdXNoKHthY3Rpdml0eUlkOiB0cnVlfSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgZmF2b3VyaXRlc1thY3Rpdml0eUlkXSA9IHRydWVcbiAgICAgICAgdXBkYXRlRmF2b3VyaXRlcyh1c2VyKVxuICAgICAgICBhdXRoMC5zZXRGYXZlc0Nvb2tpZSgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGF1dGgwLmxvZ2luKClcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgaWYgKGZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPT09IHRydWUpIHtcbiAgICAgICAgc2V0Q2xpY2sodHJ1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhcnRcIj5cbiAgICAgICAgeyBhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgICAgIDxIZWFydCBpc0NsaWNrPXtpc0NsaWNrfSBvbkNsaWNrPXsoKSA9PiBjbGlja0hlYXJ0KCl9IC8+XG4gICAgICAgIH1cbiAgICAgICAgeyBhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSA9PT0gZmFsc2UgJiZcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2pha2VwZWcvaW1hZ2UvdXBsb2FkL3YxNjA2NzQzODcyL2hlYXJ0X296cHFqYS5wbmdcIiBjbGFzc05hbWU9XCJoZWFydC1pbWdcIiBvbkNsaWNrPXsoKSA9PiBjbGlja0hlYXJ0KCl9IGFsdD1cImhlYXJ0IGljb25cIiAvPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaGVhcnQge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICAgICAgfSBcblxuICAgICAgICAuaGVhcnQtaW1nIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGYXZvdXJpdGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/favourites.js\n");

/***/ })

})