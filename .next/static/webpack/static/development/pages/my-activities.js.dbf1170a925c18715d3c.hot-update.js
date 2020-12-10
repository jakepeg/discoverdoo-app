webpackHotUpdate("static/development/pages/my-activities.js",{

/***/ "./components/favourites.js":
/*!**********************************!*\
  !*** ./components/favourites.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth0 */ \"./services/auth0.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ \"./actions/index.js\");\n/* harmony import */ var _heart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./heart */ \"./components/heart.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Dev/discoverdoo-app/components/favourites.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar Favourites = function Favourites(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      isClick = _useState[0],\n      setClick = _useState[1];\n\n  var activityId = props.activityId;\n  var user = {\n    favourites: {},\n    user: \"\"\n  }; // let favourites = {}\n\n  var setUser = function setUser() {\n    user = {\n      user: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('sub'),\n      favourites: JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('favourites').substring(1, js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('favourites').length - 1))\n    }; // favourites = user.favourites\n  };\n\n  if (_services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated()) {\n    // do I need to refresh this to reflect the cookie after any upadates? shouldn't user use useState?\n    setUser();\n  }\n\n  var clickHeart = function clickHeart() {\n    // if the user is logged in then allow them to add / remove favourites\n    if (_services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated()) {\n      // update isClick state to what it wasn't before\n      setClick(!isClick); // \n\n      user.favourites[activityId] = !isClick;\n      console.log(user.favourites[activityId]); // update favourites in mongoDB\n\n      Object(_actions__WEBPACK_IMPORTED_MODULE_4__[\"updateFavourites\"])(user);\n      _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setFavesCookie(); // make sure what \n\n      setUser();\n    } // if the user is not logged in the show login popup\n    else {\n        _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].login();\n      }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (_services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated()) {\n      if (user.favourites[activityId] === true) {\n        setClick(true);\n      }\n    }\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"jsx-3566507812\" + \" \" + \"heart\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated() && __jsx(_heart__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    isClick: isClick,\n    onClick: function onClick() {\n      return clickHeart();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }\n  }), _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated() === false && __jsx(\"img\", {\n    src: \"https://res.cloudinary.com/jakepeg/image/upload/v1606743872/heart_ozpqja.png\",\n    onClick: function onClick() {\n      return clickHeart();\n    },\n    alt: \"heart icon\",\n    className: \"jsx-3566507812\" + \" \" + \"heart-img\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"3566507812\",\n    __self: _this\n  }, \".heart.jsx-3566507812{position:absolute;z-index:10;margin-left:-25px;margin-top:-25px;}.heart-img.jsx-3566507812{cursor:pointer;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EZXYvRGV2L2Rpc2NvdmVyZG9vLWFwcC9jb21wb25lbnRzL2Zhdm91cml0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0VrQixBQUc2QixBQU9ILGVBQ2pCLEdBUGEsV0FDTyxrQkFDRCxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL0Rldi9EZXYvZGlzY292ZXJkb28tYXBwL2NvbXBvbmVudHMvZmF2b3VyaXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vc2VydmljZXMvYXV0aDAnXG5pbXBvcnQgeyB1cGRhdGVGYXZvdXJpdGVzIH0gZnJvbSAnLi4vYWN0aW9ucydcbmltcG9ydCBIZWFydCBmcm9tICcuL2hlYXJ0J1xuIFxuY29uc3QgRmF2b3VyaXRlcyA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbaXNDbGljaywgc2V0Q2xpY2tdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgYWN0aXZpdHlJZCA9IHByb3BzLmFjdGl2aXR5SWRcbiAgbGV0IHVzZXIgPSB7ZmF2b3VyaXRlczoge30sIHVzZXI6IFwiXCJ9XG4gIC8vIGxldCBmYXZvdXJpdGVzID0ge31cblxuICBjb25zdCBzZXRVc2VyID0gKCkgPT4ge1xuICAgIHVzZXIgPSBcbiAgICB7XG4gICAgICB1c2VyOiBDb29raWVzLmdldCgnc3ViJyksIFxuICAgICAgZmF2b3VyaXRlczogSlNPTi5wYXJzZShDb29raWVzLmdldCgnZmF2b3VyaXRlcycpLnN1YnN0cmluZygxLCBDb29raWVzLmdldCgnZmF2b3VyaXRlcycpLmxlbmd0aC0xKSlcbiAgICB9XG4gICAgLy8gZmF2b3VyaXRlcyA9IHVzZXIuZmF2b3VyaXRlc1xuICB9XG5cbiAgaWYgKGF1dGgwLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgLy8gZG8gSSBuZWVkIHRvIHJlZnJlc2ggdGhpcyB0byByZWZsZWN0IHRoZSBjb29raWUgYWZ0ZXIgYW55IHVwYWRhdGVzPyBzaG91bGRuJ3QgdXNlciB1c2UgdXNlU3RhdGU/XG4gICAgc2V0VXNlcigpXG4gIH1cblxuICBjb25zdCBjbGlja0hlYXJ0ID0gKCkgPT4ge1xuICAgIC8vIGlmIHRoZSB1c2VyIGlzIGxvZ2dlZCBpbiB0aGVuIGFsbG93IHRoZW0gdG8gYWRkIC8gcmVtb3ZlIGZhdm91cml0ZXNcbiAgICBpZiAoYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgIC8vIHVwZGF0ZSBpc0NsaWNrIHN0YXRlIHRvIHdoYXQgaXQgd2Fzbid0IGJlZm9yZVxuICAgICAgc2V0Q2xpY2soIWlzQ2xpY2spXG4gICAgICAvLyBcbiAgICAgIHVzZXIuZmF2b3VyaXRlc1thY3Rpdml0eUlkXSA9ICFpc0NsaWNrXG4gICAgICBjb25zb2xlLmxvZyh1c2VyLmZhdm91cml0ZXNbYWN0aXZpdHlJZF0pXG4gICAgICAvLyB1cGRhdGUgZmF2b3VyaXRlcyBpbiBtb25nb0RCXG4gICAgICB1cGRhdGVGYXZvdXJpdGVzKHVzZXIpXG4gICAgICBhdXRoMC5zZXRGYXZlc0Nvb2tpZSgpXG4gICAgICAvLyBtYWtlIHN1cmUgd2hhdCBcbiAgICAgIHNldFVzZXIoKVxuICAgIH0gXG4gICAgLy8gaWYgdGhlIHVzZXIgaXMgbm90IGxvZ2dlZCBpbiB0aGUgc2hvdyBsb2dpbiBwb3B1cFxuICAgIGVsc2UgXG4gICAge1xuICAgICAgYXV0aDAubG9naW4oKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGF1dGgwLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgICBpZiAodXNlci5mYXZvdXJpdGVzW2FjdGl2aXR5SWRdID09PSB0cnVlKSB7XG4gICAgICAgIHNldENsaWNrKHRydWUpXG4gICAgICB9XG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYXJ0XCI+XG4gICAgICAgIHsgYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkgJiZcbiAgICAgICAgICA8SGVhcnQgaXNDbGljaz17aXNDbGlja30gb25DbGljaz17KCkgPT4gY2xpY2tIZWFydCgpfSAvPlxuICAgICAgICB9XG4gICAgICAgIHsgYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkgPT09IGZhbHNlICYmXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qYWtlcGVnL2ltYWdlL3VwbG9hZC92MTYwNjc0Mzg3Mi9oZWFydF9venBxamEucG5nXCIgY2xhc3NOYW1lPVwiaGVhcnQtaW1nXCIgb25DbGljaz17KCkgPT4gY2xpY2tIZWFydCgpfSBhbHQ9XCJoZWFydCBpY29uXCIgLz5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhlYXJ0IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0yNXB4O1xuICAgICAgICB9IFxuXG4gICAgICAgIC5oZWFydC1pbWcge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGYXZvdXJpdGVzIl19 */\\n/*@ sourceURL=/Users/Dev/Dev/discoverdoo-app/components/favourites.js */\"));\n};\n\n_s(Favourites, \"CrWGwlkeEcuARLJup9uUkUjWlb4=\");\n\n_c = Favourites;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Favourites);\n\nvar _c;\n\n$RefreshReg$(_c, \"Favourites\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zhdm91cml0ZXMuanM/ZmI0OSJdLCJuYW1lcyI6WyJGYXZvdXJpdGVzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzQ2xpY2siLCJzZXRDbGljayIsImFjdGl2aXR5SWQiLCJ1c2VyIiwiZmF2b3VyaXRlcyIsInNldFVzZXIiLCJDb29raWVzIiwiZ2V0IiwiSlNPTiIsInBhcnNlIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwiYXV0aDAiLCJpc0F1dGhlbnRpY2F0ZWQiLCJjbGlja0hlYXJ0IiwiY29uc29sZSIsImxvZyIsInVwZGF0ZUZhdm91cml0ZXMiLCJzZXRGYXZlc0Nvb2tpZSIsImxvZ2luIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDQUMsc0RBQVEsRUFEUjtBQUFBLE1BQ3JCQyxPQURxQjtBQUFBLE1BQ1pDLFFBRFk7O0FBRTVCLE1BQU1DLFVBQVUsR0FBR0osS0FBSyxDQUFDSSxVQUF6QjtBQUNBLE1BQUlDLElBQUksR0FBRztBQUFDQyxjQUFVLEVBQUUsRUFBYjtBQUFpQkQsUUFBSSxFQUFFO0FBQXZCLEdBQVgsQ0FINEIsQ0FJNUI7O0FBRUEsTUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQkYsUUFBSSxHQUNKO0FBQ0VBLFVBQUksRUFBRUcsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosQ0FEUjtBQUVFSCxnQkFBVSxFQUFFSSxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJHLFNBQTFCLENBQW9DLENBQXBDLEVBQXVDSixnREFBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkksTUFBMUIsR0FBaUMsQ0FBeEUsQ0FBWDtBQUZkLEtBREEsQ0FEb0IsQ0FNcEI7QUFDRCxHQVBEOztBQVNBLE1BQUlDLHVEQUFLLENBQUNDLGVBQU4sRUFBSixFQUE2QjtBQUMzQjtBQUNBUixXQUFPO0FBQ1I7O0FBRUQsTUFBTVMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QjtBQUNBLFFBQUlGLHVEQUFLLENBQUNDLGVBQU4sRUFBSixFQUE2QjtBQUMzQjtBQUNBWixjQUFRLENBQUMsQ0FBQ0QsT0FBRixDQUFSLENBRjJCLENBRzNCOztBQUNBRyxVQUFJLENBQUNDLFVBQUwsQ0FBZ0JGLFVBQWhCLElBQThCLENBQUNGLE9BQS9CO0FBQ0FlLGFBQU8sQ0FBQ0MsR0FBUixDQUFZYixJQUFJLENBQUNDLFVBQUwsQ0FBZ0JGLFVBQWhCLENBQVosRUFMMkIsQ0FNM0I7O0FBQ0FlLHVFQUFnQixDQUFDZCxJQUFELENBQWhCO0FBQ0FTLDZEQUFLLENBQUNNLGNBQU4sR0FSMkIsQ0FTM0I7O0FBQ0FiLGFBQU87QUFDUixLQVhELENBWUE7QUFaQSxTQWNBO0FBQ0VPLCtEQUFLLENBQUNPLEtBQU47QUFDRDtBQUNGLEdBbkJEOztBQXFCQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSVIsdURBQUssQ0FBQ0MsZUFBTixFQUFKLEVBQTZCO0FBQzNCLFVBQUlWLElBQUksQ0FBQ0MsVUFBTCxDQUFnQkYsVUFBaEIsTUFBZ0MsSUFBcEMsRUFBMEM7QUFDeENELGdCQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0Q7QUFDRjtBQUNGLEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQSxTQUNFLG1FQUNFO0FBQUEsd0NBQWUsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0lXLHVEQUFLLENBQUNDLGVBQU4sTUFDQSxNQUFDLDhDQUFEO0FBQU8sV0FBTyxFQUFFYixPQUFoQjtBQUF5QixXQUFPLEVBQUU7QUFBQSxhQUFNYyxVQUFVLEVBQWhCO0FBQUEsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBSUlGLHVEQUFLLENBQUNDLGVBQU4sT0FBNEIsS0FBNUIsSUFDQTtBQUFLLE9BQUcsRUFBQyw4RUFBVDtBQUE4RyxXQUFPLEVBQUU7QUFBQSxhQUFNQyxVQUFVLEVBQWhCO0FBQUEsS0FBdkg7QUFBMkksT0FBRyxFQUFDLFlBQS9JO0FBQUEsd0NBQWtHLFdBQWxHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixDQURGO0FBQUE7QUFBQTtBQUFBLHFoSEFERjtBQXlCRCxDQTFFRDs7R0FBTWpCLFU7O0tBQUFBLFU7QUE0RVNBLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9mYXZvdXJpdGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcbmltcG9ydCBhdXRoMCBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoMCdcbmltcG9ydCB7IHVwZGF0ZUZhdm91cml0ZXMgfSBmcm9tICcuLi9hY3Rpb25zJ1xuaW1wb3J0IEhlYXJ0IGZyb20gJy4vaGVhcnQnXG4gXG5jb25zdCBGYXZvdXJpdGVzID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtpc0NsaWNrLCBzZXRDbGlja10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBhY3Rpdml0eUlkID0gcHJvcHMuYWN0aXZpdHlJZFxuICBsZXQgdXNlciA9IHtmYXZvdXJpdGVzOiB7fSwgdXNlcjogXCJcIn1cbiAgLy8gbGV0IGZhdm91cml0ZXMgPSB7fVxuXG4gIGNvbnN0IHNldFVzZXIgPSAoKSA9PiB7XG4gICAgdXNlciA9IFxuICAgIHtcbiAgICAgIHVzZXI6IENvb2tpZXMuZ2V0KCdzdWInKSwgXG4gICAgICBmYXZvdXJpdGVzOiBKU09OLnBhcnNlKENvb2tpZXMuZ2V0KCdmYXZvdXJpdGVzJykuc3Vic3RyaW5nKDEsIENvb2tpZXMuZ2V0KCdmYXZvdXJpdGVzJykubGVuZ3RoLTEpKVxuICAgIH1cbiAgICAvLyBmYXZvdXJpdGVzID0gdXNlci5mYXZvdXJpdGVzXG4gIH1cblxuICBpZiAoYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAvLyBkbyBJIG5lZWQgdG8gcmVmcmVzaCB0aGlzIHRvIHJlZmxlY3QgdGhlIGNvb2tpZSBhZnRlciBhbnkgdXBhZGF0ZXM/IHNob3VsZG4ndCB1c2VyIHVzZSB1c2VTdGF0ZT9cbiAgICBzZXRVc2VyKClcbiAgfVxuXG4gIGNvbnN0IGNsaWNrSGVhcnQgPSAoKSA9PiB7XG4gICAgLy8gaWYgdGhlIHVzZXIgaXMgbG9nZ2VkIGluIHRoZW4gYWxsb3cgdGhlbSB0byBhZGQgLyByZW1vdmUgZmF2b3VyaXRlc1xuICAgIGlmIChhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgLy8gdXBkYXRlIGlzQ2xpY2sgc3RhdGUgdG8gd2hhdCBpdCB3YXNuJ3QgYmVmb3JlXG4gICAgICBzZXRDbGljayghaXNDbGljaylcbiAgICAgIC8vIFxuICAgICAgdXNlci5mYXZvdXJpdGVzW2FjdGl2aXR5SWRdID0gIWlzQ2xpY2tcbiAgICAgIGNvbnNvbGUubG9nKHVzZXIuZmF2b3VyaXRlc1thY3Rpdml0eUlkXSlcbiAgICAgIC8vIHVwZGF0ZSBmYXZvdXJpdGVzIGluIG1vbmdvREJcbiAgICAgIHVwZGF0ZUZhdm91cml0ZXModXNlcilcbiAgICAgIGF1dGgwLnNldEZhdmVzQ29va2llKClcbiAgICAgIC8vIG1ha2Ugc3VyZSB3aGF0IFxuICAgICAgc2V0VXNlcigpXG4gICAgfSBcbiAgICAvLyBpZiB0aGUgdXNlciBpcyBub3QgbG9nZ2VkIGluIHRoZSBzaG93IGxvZ2luIHBvcHVwXG4gICAgZWxzZSBcbiAgICB7XG4gICAgICBhdXRoMC5sb2dpbigpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgIGlmICh1c2VyLmZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPT09IHRydWUpIHtcbiAgICAgICAgc2V0Q2xpY2sodHJ1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhcnRcIj5cbiAgICAgICAgeyBhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgICAgIDxIZWFydCBpc0NsaWNrPXtpc0NsaWNrfSBvbkNsaWNrPXsoKSA9PiBjbGlja0hlYXJ0KCl9IC8+XG4gICAgICAgIH1cbiAgICAgICAgeyBhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSA9PT0gZmFsc2UgJiZcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2pha2VwZWcvaW1hZ2UvdXBsb2FkL3YxNjA2NzQzODcyL2hlYXJ0X296cHFqYS5wbmdcIiBjbGFzc05hbWU9XCJoZWFydC1pbWdcIiBvbkNsaWNrPXsoKSA9PiBjbGlja0hlYXJ0KCl9IGFsdD1cImhlYXJ0IGljb25cIiAvPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaGVhcnQge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTI1cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTI1cHg7XG4gICAgICAgIH0gXG5cbiAgICAgICAgLmhlYXJ0LWltZyB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZhdm91cml0ZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/favourites.js\n");

/***/ })

})