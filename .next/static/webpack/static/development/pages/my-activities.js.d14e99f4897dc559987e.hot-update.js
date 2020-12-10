webpackHotUpdate("static/development/pages/my-activities.js",{

/***/ "./components/favourites.js":
/*!**********************************!*\
  !*** ./components/favourites.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ \"./node_modules/@babel/runtime/helpers/esm/readOnlyError.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth0 */ \"./services/auth0.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ \"./actions/index.js\");\n/* harmony import */ var _heart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./heart */ \"./components/heart.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Dev/discoverdoo-app/components/favourites.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar Favourites = function Favourites(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isClick = _useState[0],\n      setClick = _useState[1];\n\n  var activityId = props.activityId;\n  var user = {\n    favourites: {},\n    user: \"\"\n  };\n\n  var setUser = function setUser() {\n    user = {\n      user: js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('sub'),\n      favourites: JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('favourites').substring(1, js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('favourites').length - 1))\n    };\n    favourites = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"favourites\"), user.favourites);\n  };\n\n  if (_services_auth0__WEBPACK_IMPORTED_MODULE_4__[\"default\"].isAuthenticated()) {\n    // do I need to refresh this to reflect the cookie after any upadates? shouldn't user use useState?\n    setUser();\n    console.log(user);\n  } // does this need refreshing too?\n\n\n  var favourites = user.favourites;\n\n  var clickHeart = function clickHeart() {\n    if (_services_auth0__WEBPACK_IMPORTED_MODULE_4__[\"default\"].isAuthenticated()) {\n      setClick(!isClick);\n\n      if (isClick === true) {\n        favourites[activityId] = false;\n        Object(_actions__WEBPACK_IMPORTED_MODULE_5__[\"updateFavourites\"])(user);\n        _services_auth0__WEBPACK_IMPORTED_MODULE_4__[\"default\"].setFavesCookie();\n        setUser();\n      }\n\n      if (isClick === false) {\n        // if (favourites[activityId] === false) {\n        //   favourites[activityId] = true\n        // } else {\n        //   user.favourites[0].push({activityId: true});\n        // }\n        favourites[activityId] = true;\n        Object(_actions__WEBPACK_IMPORTED_MODULE_5__[\"updateFavourites\"])(user);\n        _services_auth0__WEBPACK_IMPORTED_MODULE_4__[\"default\"].setFavesCookie();\n        setUser();\n      }\n    } else {\n      _services_auth0__WEBPACK_IMPORTED_MODULE_4__[\"default\"].login();\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (_services_auth0__WEBPACK_IMPORTED_MODULE_4__[\"default\"].isAuthenticated()) {\n      if (favourites[activityId] === true) {\n        setClick(true);\n      }\n    }\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"jsx-3566507812\" + \" \" + \"heart\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, _services_auth0__WEBPACK_IMPORTED_MODULE_4__[\"default\"].isAuthenticated() && __jsx(_heart__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    isClick: isClick,\n    onClick: function onClick() {\n      return clickHeart();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 11\n    }\n  }), _services_auth0__WEBPACK_IMPORTED_MODULE_4__[\"default\"].isAuthenticated() === false && __jsx(\"img\", {\n    src: \"https://res.cloudinary.com/jakepeg/image/upload/v1606743872/heart_ozpqja.png\",\n    onClick: function onClick() {\n      return clickHeart();\n    },\n    alt: \"heart icon\",\n    className: \"jsx-3566507812\" + \" \" + \"heart-img\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    id: \"3566507812\",\n    __self: _this\n  }, \".heart.jsx-3566507812{position:absolute;z-index:10;margin-left:-25px;margin-top:-25px;}.heart-img.jsx-3566507812{cursor:pointer;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EZXYvRGV2L2Rpc2NvdmVyZG9vLWFwcC9jb21wb25lbnRzL2Zhdm91cml0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUVrQixBQUc2QixBQU9ILGVBQ2pCLEdBUGEsV0FDTyxrQkFDRCxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL0Rldi9EZXYvZGlzY292ZXJkb28tYXBwL2NvbXBvbmVudHMvZmF2b3VyaXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vc2VydmljZXMvYXV0aDAnXG5pbXBvcnQgeyB1cGRhdGVGYXZvdXJpdGVzIH0gZnJvbSAnLi4vYWN0aW9ucydcbmltcG9ydCBIZWFydCBmcm9tICcuL2hlYXJ0J1xuIFxuY29uc3QgRmF2b3VyaXRlcyA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbaXNDbGljaywgc2V0Q2xpY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBhY3Rpdml0eUlkID0gcHJvcHMuYWN0aXZpdHlJZFxuICBsZXQgdXNlciA9IHtmYXZvdXJpdGVzOiB7fSwgdXNlcjogXCJcIn1cblxuICBjb25zdCBzZXRVc2VyID0gKCkgPT4ge1xuICAgIHVzZXIgPSBcbiAgICB7XG4gICAgICB1c2VyOiBDb29raWVzLmdldCgnc3ViJyksIFxuICAgICAgZmF2b3VyaXRlczogSlNPTi5wYXJzZShDb29raWVzLmdldCgnZmF2b3VyaXRlcycpLnN1YnN0cmluZygxLCBDb29raWVzLmdldCgnZmF2b3VyaXRlcycpLmxlbmd0aC0xKSlcbiAgICB9XG4gICAgZmF2b3VyaXRlcyA9IHVzZXIuZmF2b3VyaXRlc1xuICB9XG5cbiAgaWYgKGF1dGgwLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgLy8gZG8gSSBuZWVkIHRvIHJlZnJlc2ggdGhpcyB0byByZWZsZWN0IHRoZSBjb29raWUgYWZ0ZXIgYW55IHVwYWRhdGVzPyBzaG91bGRuJ3QgdXNlciB1c2UgdXNlU3RhdGU/XG4gICAgc2V0VXNlcigpXG4gICAgY29uc29sZS5sb2codXNlcilcbiAgfVxuXG4gIC8vIGRvZXMgdGhpcyBuZWVkIHJlZnJlc2hpbmcgdG9vP1xuICBjb25zdCBmYXZvdXJpdGVzID0gdXNlci5mYXZvdXJpdGVzXG5cbiAgY29uc3QgY2xpY2tIZWFydCA9ICgpID0+IHtcbiAgICBpZiAoYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgIHNldENsaWNrKCFpc0NsaWNrKVxuICAgICAgaWYgKGlzQ2xpY2sgPT09IHRydWUpIHtcbiAgICAgICAgZmF2b3VyaXRlc1thY3Rpdml0eUlkXSA9IGZhbHNlXG4gICAgICAgIHVwZGF0ZUZhdm91cml0ZXModXNlcilcbiAgICAgICAgYXV0aDAuc2V0RmF2ZXNDb29raWUoKVxuICAgICAgICBzZXRVc2VyKClcbiAgICAgIH1cbiAgICAgIGlmIChpc0NsaWNrID09PSBmYWxzZSkge1xuICAgICAgICAvLyBpZiAoZmF2b3VyaXRlc1thY3Rpdml0eUlkXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gICBmYXZvdXJpdGVzW2FjdGl2aXR5SWRdID0gdHJ1ZVxuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgIHVzZXIuZmF2b3VyaXRlc1swXS5wdXNoKHthY3Rpdml0eUlkOiB0cnVlfSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgZmF2b3VyaXRlc1thY3Rpdml0eUlkXSA9IHRydWVcbiAgICAgICAgdXBkYXRlRmF2b3VyaXRlcyh1c2VyKVxuICAgICAgICBhdXRoMC5zZXRGYXZlc0Nvb2tpZSgpXG4gICAgICAgIHNldFVzZXIoKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhdXRoMC5sb2dpbigpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgIGlmIChmYXZvdXJpdGVzW2FjdGl2aXR5SWRdID09PSB0cnVlKSB7XG4gICAgICAgIHNldENsaWNrKHRydWUpXG4gICAgICB9XG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYXJ0XCI+XG4gICAgICAgIHsgYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkgJiZcbiAgICAgICAgICA8SGVhcnQgaXNDbGljaz17aXNDbGlja30gb25DbGljaz17KCkgPT4gY2xpY2tIZWFydCgpfSAvPlxuICAgICAgICB9XG4gICAgICAgIHsgYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkgPT09IGZhbHNlICYmXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qYWtlcGVnL2ltYWdlL3VwbG9hZC92MTYwNjc0Mzg3Mi9oZWFydF9venBxamEucG5nXCIgY2xhc3NOYW1lPVwiaGVhcnQtaW1nXCIgb25DbGljaz17KCkgPT4gY2xpY2tIZWFydCgpfSBhbHQ9XCJoZWFydCBpY29uXCIgLz5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhlYXJ0IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0yNXB4O1xuICAgICAgICB9IFxuXG4gICAgICAgIC5oZWFydC1pbWcge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZhdm91cml0ZXMiXX0= */\\n/*@ sourceURL=/Users/Dev/Dev/discoverdoo-app/components/favourites.js */\"));\n};\n\n_s(Favourites, \"sTcYVcMsBwvPBxCEkjnrn+avZQ4=\");\n\n_c = Favourites;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Favourites);\n\nvar _c;\n\n$RefreshReg$(_c, \"Favourites\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zhdm91cml0ZXMuanM/ZmI0OSJdLCJuYW1lcyI6WyJGYXZvdXJpdGVzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzQ2xpY2siLCJzZXRDbGljayIsImFjdGl2aXR5SWQiLCJ1c2VyIiwiZmF2b3VyaXRlcyIsInNldFVzZXIiLCJDb29raWVzIiwiZ2V0IiwiSlNPTiIsInBhcnNlIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwiYXV0aDAiLCJpc0F1dGhlbnRpY2F0ZWQiLCJjb25zb2xlIiwibG9nIiwiY2xpY2tIZWFydCIsInVwZGF0ZUZhdm91cml0ZXMiLCJzZXRGYXZlc0Nvb2tpZSIsImxvZ2luIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDQUMsc0RBQVEsQ0FBQyxLQUFELENBRFI7QUFBQSxNQUNyQkMsT0FEcUI7QUFBQSxNQUNaQyxRQURZOztBQUU1QixNQUFNQyxVQUFVLEdBQUdKLEtBQUssQ0FBQ0ksVUFBekI7QUFDQSxNQUFJQyxJQUFJLEdBQUc7QUFBQ0MsY0FBVSxFQUFFLEVBQWI7QUFBaUJELFFBQUksRUFBRTtBQUF2QixHQUFYOztBQUVBLE1BQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEJGLFFBQUksR0FDSjtBQUNFQSxVQUFJLEVBQUVHLGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLENBRFI7QUFFRUgsZ0JBQVUsRUFBRUksSUFBSSxDQUFDQyxLQUFMLENBQVdILGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRyxTQUExQixDQUFvQyxDQUFwQyxFQUF1Q0osZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJJLE1BQTFCLEdBQWlDLENBQXhFLENBQVg7QUFGZCxLQURBO0FBS0FQLGNBQVUsNEdBQUdELElBQUksQ0FBQ0MsVUFBUixDQUFWO0FBQ0QsR0FQRDs7QUFTQSxNQUFJUSx1REFBSyxDQUFDQyxlQUFOLEVBQUosRUFBNkI7QUFDM0I7QUFDQVIsV0FBTztBQUNQUyxXQUFPLENBQUNDLEdBQVIsQ0FBWVosSUFBWjtBQUNELEdBbEIyQixDQW9CNUI7OztBQUNBLE1BQU1DLFVBQVUsR0FBR0QsSUFBSSxDQUFDQyxVQUF4Qjs7QUFFQSxNQUFNWSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLFFBQUlKLHVEQUFLLENBQUNDLGVBQU4sRUFBSixFQUE2QjtBQUMzQlosY0FBUSxDQUFDLENBQUNELE9BQUYsQ0FBUjs7QUFDQSxVQUFJQSxPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDcEJJLGtCQUFVLENBQUNGLFVBQUQsQ0FBVixHQUF5QixLQUF6QjtBQUNBZSx5RUFBZ0IsQ0FBQ2QsSUFBRCxDQUFoQjtBQUNBUywrREFBSyxDQUFDTSxjQUFOO0FBQ0FiLGVBQU87QUFDUjs7QUFDRCxVQUFJTCxPQUFPLEtBQUssS0FBaEIsRUFBdUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBSSxrQkFBVSxDQUFDRixVQUFELENBQVYsR0FBeUIsSUFBekI7QUFDQWUseUVBQWdCLENBQUNkLElBQUQsQ0FBaEI7QUFDQVMsK0RBQUssQ0FBQ00sY0FBTjtBQUNBYixlQUFPO0FBQ1I7QUFDRixLQW5CRCxNQW1CTztBQUNMTyw2REFBSyxDQUFDTyxLQUFOO0FBQ0Q7QUFDRixHQXZCRDs7QUF5QkFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlSLHVEQUFLLENBQUNDLGVBQU4sRUFBSixFQUE2QjtBQUMzQixVQUFJVCxVQUFVLENBQUNGLFVBQUQsQ0FBVixLQUEyQixJQUEvQixFQUFxQztBQUNuQ0QsZ0JBQVEsQ0FBQyxJQUFELENBQVI7QUFDRDtBQUNGO0FBQ0YsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLFNBQ0UsbUVBQ0U7QUFBQSx3Q0FBZSxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSVcsdURBQUssQ0FBQ0MsZUFBTixNQUNBLE1BQUMsOENBQUQ7QUFBTyxXQUFPLEVBQUViLE9BQWhCO0FBQXlCLFdBQU8sRUFBRTtBQUFBLGFBQU1nQixVQUFVLEVBQWhCO0FBQUEsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBSUlKLHVEQUFLLENBQUNDLGVBQU4sT0FBNEIsS0FBNUIsSUFDQTtBQUFLLE9BQUcsRUFBQyw4RUFBVDtBQUE4RyxXQUFPLEVBQUU7QUFBQSxhQUFNRyxVQUFVLEVBQWhCO0FBQUEsS0FBdkg7QUFBMkksT0FBRyxFQUFDLFlBQS9JO0FBQUEsd0NBQWtHLFdBQWxHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixDQURGO0FBQUE7QUFBQTtBQUFBLGl0SEFERjtBQTBCRCxDQWxGRDs7R0FBTW5CLFU7O0tBQUFBLFU7QUFvRlNBLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9mYXZvdXJpdGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcbmltcG9ydCBhdXRoMCBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoMCdcbmltcG9ydCB7IHVwZGF0ZUZhdm91cml0ZXMgfSBmcm9tICcuLi9hY3Rpb25zJ1xuaW1wb3J0IEhlYXJ0IGZyb20gJy4vaGVhcnQnXG4gXG5jb25zdCBGYXZvdXJpdGVzID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtpc0NsaWNrLCBzZXRDbGlja10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGFjdGl2aXR5SWQgPSBwcm9wcy5hY3Rpdml0eUlkXG4gIGxldCB1c2VyID0ge2Zhdm91cml0ZXM6IHt9LCB1c2VyOiBcIlwifVxuXG4gIGNvbnN0IHNldFVzZXIgPSAoKSA9PiB7XG4gICAgdXNlciA9IFxuICAgIHtcbiAgICAgIHVzZXI6IENvb2tpZXMuZ2V0KCdzdWInKSwgXG4gICAgICBmYXZvdXJpdGVzOiBKU09OLnBhcnNlKENvb2tpZXMuZ2V0KCdmYXZvdXJpdGVzJykuc3Vic3RyaW5nKDEsIENvb2tpZXMuZ2V0KCdmYXZvdXJpdGVzJykubGVuZ3RoLTEpKVxuICAgIH1cbiAgICBmYXZvdXJpdGVzID0gdXNlci5mYXZvdXJpdGVzXG4gIH1cblxuICBpZiAoYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAvLyBkbyBJIG5lZWQgdG8gcmVmcmVzaCB0aGlzIHRvIHJlZmxlY3QgdGhlIGNvb2tpZSBhZnRlciBhbnkgdXBhZGF0ZXM/IHNob3VsZG4ndCB1c2VyIHVzZSB1c2VTdGF0ZT9cbiAgICBzZXRVc2VyKClcbiAgICBjb25zb2xlLmxvZyh1c2VyKVxuICB9XG5cbiAgLy8gZG9lcyB0aGlzIG5lZWQgcmVmcmVzaGluZyB0b28/XG4gIGNvbnN0IGZhdm91cml0ZXMgPSB1c2VyLmZhdm91cml0ZXNcblxuICBjb25zdCBjbGlja0hlYXJ0ID0gKCkgPT4ge1xuICAgIGlmIChhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgc2V0Q2xpY2soIWlzQ2xpY2spXG4gICAgICBpZiAoaXNDbGljayA9PT0gdHJ1ZSkge1xuICAgICAgICBmYXZvdXJpdGVzW2FjdGl2aXR5SWRdID0gZmFsc2VcbiAgICAgICAgdXBkYXRlRmF2b3VyaXRlcyh1c2VyKVxuICAgICAgICBhdXRoMC5zZXRGYXZlc0Nvb2tpZSgpXG4gICAgICAgIHNldFVzZXIoKVxuICAgICAgfVxuICAgICAgaWYgKGlzQ2xpY2sgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIGlmIChmYXZvdXJpdGVzW2FjdGl2aXR5SWRdID09PSBmYWxzZSkge1xuICAgICAgICAvLyAgIGZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPSB0cnVlXG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgdXNlci5mYXZvdXJpdGVzWzBdLnB1c2goe2FjdGl2aXR5SWQ6IHRydWV9KTtcbiAgICAgICAgLy8gfVxuICAgICAgICBmYXZvdXJpdGVzW2FjdGl2aXR5SWRdID0gdHJ1ZVxuICAgICAgICB1cGRhdGVGYXZvdXJpdGVzKHVzZXIpXG4gICAgICAgIGF1dGgwLnNldEZhdmVzQ29va2llKClcbiAgICAgICAgc2V0VXNlcigpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGF1dGgwLmxvZ2luKClcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgaWYgKGZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPT09IHRydWUpIHtcbiAgICAgICAgc2V0Q2xpY2sodHJ1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhcnRcIj5cbiAgICAgICAgeyBhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgICAgIDxIZWFydCBpc0NsaWNrPXtpc0NsaWNrfSBvbkNsaWNrPXsoKSA9PiBjbGlja0hlYXJ0KCl9IC8+XG4gICAgICAgIH1cbiAgICAgICAgeyBhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSA9PT0gZmFsc2UgJiZcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2pha2VwZWcvaW1hZ2UvdXBsb2FkL3YxNjA2NzQzODcyL2hlYXJ0X296cHFqYS5wbmdcIiBjbGFzc05hbWU9XCJoZWFydC1pbWdcIiBvbkNsaWNrPXsoKSA9PiBjbGlja0hlYXJ0KCl9IGFsdD1cImhlYXJ0IGljb25cIiAvPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaGVhcnQge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTI1cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTI1cHg7XG4gICAgICAgIH0gXG5cbiAgICAgICAgLmhlYXJ0LWltZyB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmF2b3VyaXRlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/favourites.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _readOnlyError; });\nfunction _readOnlyError(name) {\n  throw new Error(\"\\\"\" + name + \"\\\" is read-only\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcmVhZE9ubHlFcnJvci5qcz9iMWY4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcmVhZE9ubHlFcnJvci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9yZWFkT25seUVycm9yKG5hbWUpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiXFxcIlwiICsgbmFtZSArIFwiXFxcIiBpcyByZWFkLW9ubHlcIik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/readOnlyError.js\n");

/***/ })

})