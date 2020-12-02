webpackHotUpdate("static/development/pages/activities/[id].js",{

/***/ "./components/favourites.js":
/*!**********************************!*\
  !*** ./components/favourites.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth0 */ \"./services/auth0.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ \"./actions/index.js\");\n/* harmony import */ var _heart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./heart */ \"./components/heart.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Dev/discoverdoo-app/components/favourites.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar Favourites = function Favourites(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isClick = _useState[0],\n      setClick = _useState[1];\n\n  var activityId = props.activityId;\n  var user = {};\n\n  if (_services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated()) {\n    // do I need to refresh this to reflect the cookie after any upadates?\n    user = {\n      user: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('sub'),\n      favourites: JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('favourites').substring(1, js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('favourites').length - 1))\n    };\n  }\n\n  var favourites = user.favourites;\n\n  var clickHeart = function clickHeart() {\n    if (_services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated()) {\n      setClick(!isClick);\n\n      if (isClick === true) {\n        favourites[activityId] = false;\n        Object(_actions__WEBPACK_IMPORTED_MODULE_4__[\"updateFavourites\"])(user);\n        _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setFavesCookie();\n        user = {\n          user: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('sub'),\n          favourites: JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('favourites').substring(1, js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('favourites').length - 1))\n        };\n      }\n\n      if (isClick === false) {\n        // if (favourites[activityId] === false) {\n        //   favourites[activityId] = true\n        // } else {\n        //   user.favourites[0].push({activityId: true});\n        // }\n        favourites[activityId] = true;\n        Object(_actions__WEBPACK_IMPORTED_MODULE_4__[\"updateFavourites\"])(user);\n        _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setFavesCookie();\n        user = {\n          user: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('sub'),\n          favourites: JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('favourites').substring(1, js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('favourites').length - 1))\n        };\n      }\n    } else {\n      _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].login();\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (_services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated()) {\n      if (favourites[activityId] === true) {\n        setClick(true);\n      }\n    }\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"jsx-2483159946\" + \" \" + \"heart\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated() && __jsx(_heart__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    isClick: isClick,\n    onClick: function onClick() {\n      return clickHeart();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }), _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated() === false && __jsx(\"img\", {\n    src: \"https://res.cloudinary.com/jakepeg/image/upload/v1606743872/heart_ozpqja.png\",\n    onClick: function onClick() {\n      return clickHeart();\n    },\n    alt: \"heart icon\",\n    className: \"jsx-2483159946\" + \" \" + \"heart-img\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"2483159946\",\n    __self: _this\n  }, \".heart.jsx-2483159946{position:absolute;z-index:10;margin-left:-20px;margin-top:-30px;}.heart-img.jsx-2483159946{cursor:pointer;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EZXYvRGV2L2Rpc2NvdmVyZG9vLWFwcC9jb21wb25lbnRzL2Zhdm91cml0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEVrQixBQUc2QixBQU9ILGVBQ2pCLEdBUGEsV0FDTyxrQkFDRCxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL0Rldi9EZXYvZGlzY292ZXJkb28tYXBwL2NvbXBvbmVudHMvZmF2b3VyaXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vc2VydmljZXMvYXV0aDAnXG5pbXBvcnQgeyB1cGRhdGVGYXZvdXJpdGVzIH0gZnJvbSAnLi4vYWN0aW9ucydcbmltcG9ydCBIZWFydCBmcm9tICcuL2hlYXJ0J1xuIFxuY29uc3QgRmF2b3VyaXRlcyA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbaXNDbGljaywgc2V0Q2xpY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBhY3Rpdml0eUlkID0gcHJvcHMuYWN0aXZpdHlJZFxuICBsZXQgdXNlciA9IHt9XG5cbiAgaWYgKGF1dGgwLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgLy8gZG8gSSBuZWVkIHRvIHJlZnJlc2ggdGhpcyB0byByZWZsZWN0IHRoZSBjb29raWUgYWZ0ZXIgYW55IHVwYWRhdGVzP1xuICAgIHVzZXIgPSBcbiAgICAgIHtcbiAgICAgICAgdXNlcjogQ29va2llcy5nZXQoJ3N1YicpLCBcbiAgICAgICAgZmF2b3VyaXRlczogSlNPTi5wYXJzZShDb29raWVzLmdldCgnZmF2b3VyaXRlcycpLnN1YnN0cmluZygxLCBDb29raWVzLmdldCgnZmF2b3VyaXRlcycpLmxlbmd0aC0xKSlcbiAgICAgIH1cbiAgfVxuXG4gIGNvbnN0IGZhdm91cml0ZXMgPSB1c2VyLmZhdm91cml0ZXNcblxuICBjb25zdCBjbGlja0hlYXJ0ID0gKCkgPT4ge1xuICAgIGlmIChhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgc2V0Q2xpY2soIWlzQ2xpY2spXG4gICAgICBpZiAoaXNDbGljayA9PT0gdHJ1ZSkge1xuICAgICAgICBmYXZvdXJpdGVzW2FjdGl2aXR5SWRdID0gZmFsc2VcbiAgICAgICAgdXBkYXRlRmF2b3VyaXRlcyh1c2VyKVxuICAgICAgICBhdXRoMC5zZXRGYXZlc0Nvb2tpZSgpXG4gICAgICAgIHVzZXIgPSBcbiAgICAgICAge1xuICAgICAgICAgIHVzZXI6IENvb2tpZXMuZ2V0KCdzdWInKSwgXG4gICAgICAgICAgZmF2b3VyaXRlczogSlNPTi5wYXJzZShDb29raWVzLmdldCgnZmF2b3VyaXRlcycpLnN1YnN0cmluZygxLCBDb29raWVzLmdldCgnZmF2b3VyaXRlcycpLmxlbmd0aC0xKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlzQ2xpY2sgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIGlmIChmYXZvdXJpdGVzW2FjdGl2aXR5SWRdID09PSBmYWxzZSkge1xuICAgICAgICAvLyAgIGZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPSB0cnVlXG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgdXNlci5mYXZvdXJpdGVzWzBdLnB1c2goe2FjdGl2aXR5SWQ6IHRydWV9KTtcbiAgICAgICAgLy8gfVxuICAgICAgICBmYXZvdXJpdGVzW2FjdGl2aXR5SWRdID0gdHJ1ZVxuICAgICAgICB1cGRhdGVGYXZvdXJpdGVzKHVzZXIpXG4gICAgICAgIGF1dGgwLnNldEZhdmVzQ29va2llKClcbiAgICAgICAgdXNlciA9IFxuICAgICAgICB7XG4gICAgICAgICAgdXNlcjogQ29va2llcy5nZXQoJ3N1YicpLCBcbiAgICAgICAgICBmYXZvdXJpdGVzOiBKU09OLnBhcnNlKENvb2tpZXMuZ2V0KCdmYXZvdXJpdGVzJykuc3Vic3RyaW5nKDEsIENvb2tpZXMuZ2V0KCdmYXZvdXJpdGVzJykubGVuZ3RoLTEpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGF1dGgwLmxvZ2luKClcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgaWYgKGZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPT09IHRydWUpIHtcbiAgICAgICAgc2V0Q2xpY2sodHJ1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhcnRcIj5cbiAgICAgICAgeyBhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgICAgIDxIZWFydCBpc0NsaWNrPXtpc0NsaWNrfSBvbkNsaWNrPXsoKSA9PiBjbGlja0hlYXJ0KCl9IC8+XG4gICAgICAgIH1cbiAgICAgICAgeyBhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSA9PT0gZmFsc2UgJiZcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2pha2VwZWcvaW1hZ2UvdXBsb2FkL3YxNjA2NzQzODcyL2hlYXJ0X296cHFqYS5wbmdcIiBjbGFzc05hbWU9XCJoZWFydC1pbWdcIiBvbkNsaWNrPXsoKSA9PiBjbGlja0hlYXJ0KCl9IGFsdD1cImhlYXJ0IGljb25cIiAvPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaGVhcnQge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgICAgIH0gXG5cbiAgICAgICAgLmhlYXJ0LWltZyB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmF2b3VyaXRlcyJdfQ== */\\n/*@ sourceURL=/Users/Dev/Dev/discoverdoo-app/components/favourites.js */\"));\n};\n\n_s(Favourites, \"sTcYVcMsBwvPBxCEkjnrn+avZQ4=\");\n\n_c = Favourites;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Favourites);\n\nvar _c;\n\n$RefreshReg$(_c, \"Favourites\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zhdm91cml0ZXMuanM/ZmI0OSJdLCJuYW1lcyI6WyJGYXZvdXJpdGVzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzQ2xpY2siLCJzZXRDbGljayIsImFjdGl2aXR5SWQiLCJ1c2VyIiwiYXV0aDAiLCJpc0F1dGhlbnRpY2F0ZWQiLCJDb29raWVzIiwiZ2V0IiwiZmF2b3VyaXRlcyIsIkpTT04iLCJwYXJzZSIsInN1YnN0cmluZyIsImxlbmd0aCIsImNsaWNrSGVhcnQiLCJ1cGRhdGVGYXZvdXJpdGVzIiwic2V0RmF2ZXNDb29raWUiLCJsb2dpbiIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0FDLHNEQUFRLENBQUMsS0FBRCxDQURSO0FBQUEsTUFDckJDLE9BRHFCO0FBQUEsTUFDWkMsUUFEWTs7QUFFNUIsTUFBTUMsVUFBVSxHQUFHSixLQUFLLENBQUNJLFVBQXpCO0FBQ0EsTUFBSUMsSUFBSSxHQUFHLEVBQVg7O0FBRUEsTUFBSUMsdURBQUssQ0FBQ0MsZUFBTixFQUFKLEVBQTZCO0FBQzNCO0FBQ0FGLFFBQUksR0FDRjtBQUNFQSxVQUFJLEVBQUVHLGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLENBRFI7QUFFRUMsZ0JBQVUsRUFBRUMsSUFBSSxDQUFDQyxLQUFMLENBQVdKLGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCSSxTQUExQixDQUFvQyxDQUFwQyxFQUF1Q0wsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJLLE1BQTFCLEdBQWlDLENBQXhFLENBQVg7QUFGZCxLQURGO0FBS0Q7O0FBRUQsTUFBTUosVUFBVSxHQUFHTCxJQUFJLENBQUNLLFVBQXhCOztBQUVBLE1BQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsUUFBSVQsdURBQUssQ0FBQ0MsZUFBTixFQUFKLEVBQTZCO0FBQzNCSixjQUFRLENBQUMsQ0FBQ0QsT0FBRixDQUFSOztBQUNBLFVBQUlBLE9BQU8sS0FBSyxJQUFoQixFQUFzQjtBQUNwQlEsa0JBQVUsQ0FBQ04sVUFBRCxDQUFWLEdBQXlCLEtBQXpCO0FBQ0FZLHlFQUFnQixDQUFDWCxJQUFELENBQWhCO0FBQ0FDLCtEQUFLLENBQUNXLGNBQU47QUFDQVosWUFBSSxHQUNKO0FBQ0VBLGNBQUksRUFBRUcsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosQ0FEUjtBQUVFQyxvQkFBVSxFQUFFQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJJLFNBQTFCLENBQW9DLENBQXBDLEVBQXVDTCxnREFBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkssTUFBMUIsR0FBaUMsQ0FBeEUsQ0FBWDtBQUZkLFNBREE7QUFLRDs7QUFDRCxVQUFJWixPQUFPLEtBQUssS0FBaEIsRUFBdUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBUSxrQkFBVSxDQUFDTixVQUFELENBQVYsR0FBeUIsSUFBekI7QUFDQVkseUVBQWdCLENBQUNYLElBQUQsQ0FBaEI7QUFDQUMsK0RBQUssQ0FBQ1csY0FBTjtBQUNBWixZQUFJLEdBQ0o7QUFDRUEsY0FBSSxFQUFFRyxnREFBTyxDQUFDQyxHQUFSLENBQVksS0FBWixDQURSO0FBRUVDLG9CQUFVLEVBQUVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixnREFBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkksU0FBMUIsQ0FBb0MsQ0FBcEMsRUFBdUNMLGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCSyxNQUExQixHQUFpQyxDQUF4RSxDQUFYO0FBRmQsU0FEQTtBQUtEO0FBQ0YsS0EzQkQsTUEyQk87QUFDTFIsNkRBQUssQ0FBQ1ksS0FBTjtBQUNEO0FBQ0YsR0EvQkQ7O0FBaUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJYix1REFBSyxDQUFDQyxlQUFOLEVBQUosRUFBNkI7QUFDM0IsVUFBSUcsVUFBVSxDQUFDTixVQUFELENBQVYsS0FBMkIsSUFBL0IsRUFBcUM7QUFDbkNELGdCQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0Q7QUFDRjtBQUNGLEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQSxTQUNFLG1FQUNFO0FBQUEsd0NBQWUsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0lHLHVEQUFLLENBQUNDLGVBQU4sTUFDQSxNQUFDLDhDQUFEO0FBQU8sV0FBTyxFQUFFTCxPQUFoQjtBQUF5QixXQUFPLEVBQUU7QUFBQSxhQUFNYSxVQUFVLEVBQWhCO0FBQUEsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBSUlULHVEQUFLLENBQUNDLGVBQU4sT0FBNEIsS0FBNUIsSUFDQTtBQUFLLE9BQUcsRUFBQyw4RUFBVDtBQUE4RyxXQUFPLEVBQUU7QUFBQSxhQUFNUSxVQUFVLEVBQWhCO0FBQUEsS0FBdkg7QUFBMkksT0FBRyxFQUFDLFlBQS9JO0FBQUEsd0NBQWtHLFdBQWxHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixDQURGO0FBQUE7QUFBQTtBQUFBLHE1SEFERjtBQTBCRCxDQW5GRDs7R0FBTWhCLFU7O0tBQUFBLFU7QUFxRlNBLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9mYXZvdXJpdGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcbmltcG9ydCBhdXRoMCBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoMCdcbmltcG9ydCB7IHVwZGF0ZUZhdm91cml0ZXMgfSBmcm9tICcuLi9hY3Rpb25zJ1xuaW1wb3J0IEhlYXJ0IGZyb20gJy4vaGVhcnQnXG4gXG5jb25zdCBGYXZvdXJpdGVzID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtpc0NsaWNrLCBzZXRDbGlja10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGFjdGl2aXR5SWQgPSBwcm9wcy5hY3Rpdml0eUlkXG4gIGxldCB1c2VyID0ge31cblxuICBpZiAoYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAvLyBkbyBJIG5lZWQgdG8gcmVmcmVzaCB0aGlzIHRvIHJlZmxlY3QgdGhlIGNvb2tpZSBhZnRlciBhbnkgdXBhZGF0ZXM/XG4gICAgdXNlciA9IFxuICAgICAge1xuICAgICAgICB1c2VyOiBDb29raWVzLmdldCgnc3ViJyksIFxuICAgICAgICBmYXZvdXJpdGVzOiBKU09OLnBhcnNlKENvb2tpZXMuZ2V0KCdmYXZvdXJpdGVzJykuc3Vic3RyaW5nKDEsIENvb2tpZXMuZ2V0KCdmYXZvdXJpdGVzJykubGVuZ3RoLTEpKVxuICAgICAgfVxuICB9XG5cbiAgY29uc3QgZmF2b3VyaXRlcyA9IHVzZXIuZmF2b3VyaXRlc1xuXG4gIGNvbnN0IGNsaWNrSGVhcnQgPSAoKSA9PiB7XG4gICAgaWYgKGF1dGgwLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgICBzZXRDbGljayghaXNDbGljaylcbiAgICAgIGlmIChpc0NsaWNrID09PSB0cnVlKSB7XG4gICAgICAgIGZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPSBmYWxzZVxuICAgICAgICB1cGRhdGVGYXZvdXJpdGVzKHVzZXIpXG4gICAgICAgIGF1dGgwLnNldEZhdmVzQ29va2llKClcbiAgICAgICAgdXNlciA9IFxuICAgICAgICB7XG4gICAgICAgICAgdXNlcjogQ29va2llcy5nZXQoJ3N1YicpLCBcbiAgICAgICAgICBmYXZvdXJpdGVzOiBKU09OLnBhcnNlKENvb2tpZXMuZ2V0KCdmYXZvdXJpdGVzJykuc3Vic3RyaW5nKDEsIENvb2tpZXMuZ2V0KCdmYXZvdXJpdGVzJykubGVuZ3RoLTEpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXNDbGljayA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gaWYgKGZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPT09IGZhbHNlKSB7XG4gICAgICAgIC8vICAgZmF2b3VyaXRlc1thY3Rpdml0eUlkXSA9IHRydWVcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICB1c2VyLmZhdm91cml0ZXNbMF0ucHVzaCh7YWN0aXZpdHlJZDogdHJ1ZX0pO1xuICAgICAgICAvLyB9XG4gICAgICAgIGZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPSB0cnVlXG4gICAgICAgIHVwZGF0ZUZhdm91cml0ZXModXNlcilcbiAgICAgICAgYXV0aDAuc2V0RmF2ZXNDb29raWUoKVxuICAgICAgICB1c2VyID0gXG4gICAgICAgIHtcbiAgICAgICAgICB1c2VyOiBDb29raWVzLmdldCgnc3ViJyksIFxuICAgICAgICAgIGZhdm91cml0ZXM6IEpTT04ucGFyc2UoQ29va2llcy5nZXQoJ2Zhdm91cml0ZXMnKS5zdWJzdHJpbmcoMSwgQ29va2llcy5nZXQoJ2Zhdm91cml0ZXMnKS5sZW5ndGgtMSkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXV0aDAubG9naW4oKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGF1dGgwLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgICBpZiAoZmF2b3VyaXRlc1thY3Rpdml0eUlkXSA9PT0gdHJ1ZSkge1xuICAgICAgICBzZXRDbGljayh0cnVlKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFydFwiPlxuICAgICAgICB7IGF1dGgwLmlzQXV0aGVudGljYXRlZCgpICYmXG4gICAgICAgICAgPEhlYXJ0IGlzQ2xpY2s9e2lzQ2xpY2t9IG9uQ2xpY2s9eygpID0+IGNsaWNrSGVhcnQoKX0gLz5cbiAgICAgICAgfVxuICAgICAgICB7IGF1dGgwLmlzQXV0aGVudGljYXRlZCgpID09PSBmYWxzZSAmJlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vamFrZXBlZy9pbWFnZS91cGxvYWQvdjE2MDY3NDM4NzIvaGVhcnRfb3pwcWphLnBuZ1wiIGNsYXNzTmFtZT1cImhlYXJ0LWltZ1wiIG9uQ2xpY2s9eygpID0+IGNsaWNrSGVhcnQoKX0gYWx0PVwiaGVhcnQgaWNvblwiIC8+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oZWFydCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICAgICAgfSBcblxuICAgICAgICAuaGVhcnQtaW1nIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGYXZvdXJpdGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/favourites.js\n");

/***/ })

})