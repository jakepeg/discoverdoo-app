webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/favourites.js":
/*!**********************************!*\
  !*** ./components/favourites.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth0 */ \"./services/auth0.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ \"./actions/index.js\");\n/* harmony import */ var _heart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./heart */ \"./components/heart.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Dev/discoverdoo-app/components/favourites.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar Favourites = function Favourites(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isClick = _useState[0],\n      setClick = _useState[1];\n\n  var activityId = props.activityId;\n  var user = {\n    favourites: {},\n    user: \"\"\n  };\n  var favourites = {};\n\n  var setUser = function setUser() {\n    user = {\n      user: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('sub'),\n      favourites: JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('favourites').substring(1, js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('favourites').length - 1))\n    };\n    favourites = user.favourites;\n  };\n\n  if (_services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated()) {\n    // do I need to refresh this to reflect the cookie after any upadates? shouldn't user use useState?\n    setUser(); // console.log(user)\n  }\n\n  var clickHeart = function clickHeart() {\n    if (_services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated()) {\n      setClick(!isClick);\n      favourites[activityId] = isClick;\n      Object(_actions__WEBPACK_IMPORTED_MODULE_4__[\"updateFavourites\"])(user);\n      _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setFavesCookie();\n      setUser(); // if (isClick === true) {\n      //   console.log(isClick)\n      //   favourites[activityId] = false\n      //   updateFavourites(user)\n      //   auth0.setFavesCookie()\n      //   setUser()\n      //   console.log(isClick)\n      // }\n      // if (isClick === false) {\n      //   console.log(isClick)\n      //   // if (favourites[activityId] === false) {\n      //   //   favourites[activityId] = true\n      //   // } else {\n      //   //   user.favourites[0].push({activityId: true});\n      //   // }\n      //   favourites[activityId] = true\n      //   updateFavourites(user)\n      //   auth0.setFavesCookie()\n      //   setUser()\n      //   console.log(isClick)\n      // }\n    } else {\n      _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].login();\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (_services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated()) {\n      if (favourites[activityId] === true) {\n        setClick(true);\n      }\n    }\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"jsx-3566507812\" + \" \" + \"heart\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }, _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated() && __jsx(_heart__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    isClick: isClick,\n    onClick: function onClick() {\n      return clickHeart();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }), _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated() === false && __jsx(\"img\", {\n    src: \"https://res.cloudinary.com/jakepeg/image/upload/v1606743872/heart_ozpqja.png\",\n    onClick: function onClick() {\n      return clickHeart();\n    },\n    alt: \"heart icon\",\n    className: \"jsx-3566507812\" + \" \" + \"heart-img\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"3566507812\",\n    __self: _this\n  }, \".heart.jsx-3566507812{position:absolute;z-index:10;margin-left:-25px;margin-top:-25px;}.heart-img.jsx-3566507812{cursor:pointer;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EZXYvRGV2L2Rpc2NvdmVyZG9vLWFwcC9jb21wb25lbnRzL2Zhdm91cml0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0ZrQixBQUc2QixBQU9ILGVBQ2pCLEdBUGEsV0FDTyxrQkFDRCxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL0Rldi9EZXYvZGlzY292ZXJkb28tYXBwL2NvbXBvbmVudHMvZmF2b3VyaXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vc2VydmljZXMvYXV0aDAnXG5pbXBvcnQgeyB1cGRhdGVGYXZvdXJpdGVzIH0gZnJvbSAnLi4vYWN0aW9ucydcbmltcG9ydCBIZWFydCBmcm9tICcuL2hlYXJ0J1xuIFxuY29uc3QgRmF2b3VyaXRlcyA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbaXNDbGljaywgc2V0Q2xpY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBhY3Rpdml0eUlkID0gcHJvcHMuYWN0aXZpdHlJZFxuICBsZXQgdXNlciA9IHtmYXZvdXJpdGVzOiB7fSwgdXNlcjogXCJcIn1cbiAgbGV0IGZhdm91cml0ZXMgPSB7fVxuXG4gIGNvbnN0IHNldFVzZXIgPSAoKSA9PiB7XG4gICAgdXNlciA9IFxuICAgIHtcbiAgICAgIHVzZXI6IENvb2tpZXMuZ2V0KCdzdWInKSwgXG4gICAgICBmYXZvdXJpdGVzOiBKU09OLnBhcnNlKENvb2tpZXMuZ2V0KCdmYXZvdXJpdGVzJykuc3Vic3RyaW5nKDEsIENvb2tpZXMuZ2V0KCdmYXZvdXJpdGVzJykubGVuZ3RoLTEpKVxuICAgIH1cbiAgICBmYXZvdXJpdGVzID0gdXNlci5mYXZvdXJpdGVzXG4gIH1cblxuICBpZiAoYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAvLyBkbyBJIG5lZWQgdG8gcmVmcmVzaCB0aGlzIHRvIHJlZmxlY3QgdGhlIGNvb2tpZSBhZnRlciBhbnkgdXBhZGF0ZXM/IHNob3VsZG4ndCB1c2VyIHVzZSB1c2VTdGF0ZT9cbiAgICBzZXRVc2VyKClcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyKVxuICB9XG5cbiAgY29uc3QgY2xpY2tIZWFydCA9ICgpID0+IHtcbiAgICBpZiAoYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgIHNldENsaWNrKCFpc0NsaWNrKVxuXG4gICAgICBmYXZvdXJpdGVzW2FjdGl2aXR5SWRdID0gaXNDbGlja1xuICAgICAgdXBkYXRlRmF2b3VyaXRlcyh1c2VyKVxuICAgICAgYXV0aDAuc2V0RmF2ZXNDb29raWUoKVxuICAgICAgc2V0VXNlcigpXG5cbiAgICAgIC8vIGlmIChpc0NsaWNrID09PSB0cnVlKSB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGlzQ2xpY2spXG4gICAgICAvLyAgIGZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPSBmYWxzZVxuICAgICAgLy8gICB1cGRhdGVGYXZvdXJpdGVzKHVzZXIpXG4gICAgICAvLyAgIGF1dGgwLnNldEZhdmVzQ29va2llKClcbiAgICAgIC8vICAgc2V0VXNlcigpXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGlzQ2xpY2spXG4gICAgICAvLyB9XG4gICAgICAvLyBpZiAoaXNDbGljayA9PT0gZmFsc2UpIHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coaXNDbGljaylcbiAgICAgIC8vICAgLy8gaWYgKGZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPT09IGZhbHNlKSB7XG4gICAgICAvLyAgIC8vICAgZmF2b3VyaXRlc1thY3Rpdml0eUlkXSA9IHRydWVcbiAgICAgIC8vICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vICAgLy8gICB1c2VyLmZhdm91cml0ZXNbMF0ucHVzaCh7YWN0aXZpdHlJZDogdHJ1ZX0pO1xuICAgICAgLy8gICAvLyB9XG4gICAgICAvLyAgIGZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPSB0cnVlXG4gICAgICAvLyAgIHVwZGF0ZUZhdm91cml0ZXModXNlcilcbiAgICAgIC8vICAgYXV0aDAuc2V0RmF2ZXNDb29raWUoKVxuICAgICAgLy8gICBzZXRVc2VyKClcbiAgICAgIC8vICAgY29uc29sZS5sb2coaXNDbGljaylcbiAgICAgIC8vIH1cbiAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICBhdXRoMC5sb2dpbigpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgIGlmIChmYXZvdXJpdGVzW2FjdGl2aXR5SWRdID09PSB0cnVlKSB7XG4gICAgICAgIHNldENsaWNrKHRydWUpXG4gICAgICB9XG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYXJ0XCI+XG4gICAgICAgIHsgYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkgJiZcbiAgICAgICAgICA8SGVhcnQgaXNDbGljaz17aXNDbGlja30gb25DbGljaz17KCkgPT4gY2xpY2tIZWFydCgpfSAvPlxuICAgICAgICB9XG4gICAgICAgIHsgYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkgPT09IGZhbHNlICYmXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qYWtlcGVnL2ltYWdlL3VwbG9hZC92MTYwNjc0Mzg3Mi9oZWFydF9venBxamEucG5nXCIgY2xhc3NOYW1lPVwiaGVhcnQtaW1nXCIgb25DbGljaz17KCkgPT4gY2xpY2tIZWFydCgpfSBhbHQ9XCJoZWFydCBpY29uXCIgLz5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhlYXJ0IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0yNXB4O1xuICAgICAgICB9IFxuXG4gICAgICAgIC5oZWFydC1pbWcge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZhdm91cml0ZXMiXX0= */\\n/*@ sourceURL=/Users/Dev/Dev/discoverdoo-app/components/favourites.js */\"));\n};\n\n_s(Favourites, \"sTcYVcMsBwvPBxCEkjnrn+avZQ4=\");\n\n_c = Favourites;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Favourites);\n\nvar _c;\n\n$RefreshReg$(_c, \"Favourites\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zhdm91cml0ZXMuanM/ZmI0OSJdLCJuYW1lcyI6WyJGYXZvdXJpdGVzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzQ2xpY2siLCJzZXRDbGljayIsImFjdGl2aXR5SWQiLCJ1c2VyIiwiZmF2b3VyaXRlcyIsInNldFVzZXIiLCJDb29raWVzIiwiZ2V0IiwiSlNPTiIsInBhcnNlIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwiYXV0aDAiLCJpc0F1dGhlbnRpY2F0ZWQiLCJjbGlja0hlYXJ0IiwidXBkYXRlRmF2b3VyaXRlcyIsInNldEZhdmVzQ29va2llIiwibG9naW4iLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNBQyxzREFBUSxDQUFDLEtBQUQsQ0FEUjtBQUFBLE1BQ3JCQyxPQURxQjtBQUFBLE1BQ1pDLFFBRFk7O0FBRTVCLE1BQU1DLFVBQVUsR0FBR0osS0FBSyxDQUFDSSxVQUF6QjtBQUNBLE1BQUlDLElBQUksR0FBRztBQUFDQyxjQUFVLEVBQUUsRUFBYjtBQUFpQkQsUUFBSSxFQUFFO0FBQXZCLEdBQVg7QUFDQSxNQUFJQyxVQUFVLEdBQUcsRUFBakI7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQkYsUUFBSSxHQUNKO0FBQ0VBLFVBQUksRUFBRUcsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosQ0FEUjtBQUVFSCxnQkFBVSxFQUFFSSxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJHLFNBQTFCLENBQW9DLENBQXBDLEVBQXVDSixnREFBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkksTUFBMUIsR0FBaUMsQ0FBeEUsQ0FBWDtBQUZkLEtBREE7QUFLQVAsY0FBVSxHQUFHRCxJQUFJLENBQUNDLFVBQWxCO0FBQ0QsR0FQRDs7QUFTQSxNQUFJUSx1REFBSyxDQUFDQyxlQUFOLEVBQUosRUFBNkI7QUFDM0I7QUFDQVIsV0FBTyxHQUZvQixDQUczQjtBQUNEOztBQUVELE1BQU1TLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsUUFBSUYsdURBQUssQ0FBQ0MsZUFBTixFQUFKLEVBQTZCO0FBQzNCWixjQUFRLENBQUMsQ0FBQ0QsT0FBRixDQUFSO0FBRUFJLGdCQUFVLENBQUNGLFVBQUQsQ0FBVixHQUF5QkYsT0FBekI7QUFDQWUsdUVBQWdCLENBQUNaLElBQUQsQ0FBaEI7QUFDQVMsNkRBQUssQ0FBQ0ksY0FBTjtBQUNBWCxhQUFPLEdBTm9CLENBUTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVELEtBOUJELE1BOEJPO0FBQ0xPLDZEQUFLLENBQUNLLEtBQU47QUFDRDtBQUNGLEdBbENEOztBQW9DQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSU4sdURBQUssQ0FBQ0MsZUFBTixFQUFKLEVBQTZCO0FBQzNCLFVBQUlULFVBQVUsQ0FBQ0YsVUFBRCxDQUFWLEtBQTJCLElBQS9CLEVBQXFDO0FBQ25DRCxnQkFBUSxDQUFDLElBQUQsQ0FBUjtBQUNEO0FBQ0Y7QUFDRixHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUEsU0FDRSxtRUFDRTtBQUFBLHdDQUFlLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJVyx1REFBSyxDQUFDQyxlQUFOLE1BQ0EsTUFBQyw4Q0FBRDtBQUFPLFdBQU8sRUFBRWIsT0FBaEI7QUFBeUIsV0FBTyxFQUFFO0FBQUEsYUFBTWMsVUFBVSxFQUFoQjtBQUFBLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUlJRix1REFBSyxDQUFDQyxlQUFOLE9BQTRCLEtBQTVCLElBQ0E7QUFBSyxPQUFHLEVBQUMsOEVBQVQ7QUFBOEcsV0FBTyxFQUFFO0FBQUEsYUFBTUMsVUFBVSxFQUFoQjtBQUFBLEtBQXZIO0FBQTJJLE9BQUcsRUFBQyxZQUEvSTtBQUFBLHdDQUFrRyxXQUFsRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosQ0FERjtBQUFBO0FBQUE7QUFBQSw2aUlBREY7QUEwQkQsQ0EzRkQ7O0dBQU1qQixVOztLQUFBQSxVO0FBNkZTQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvZmF2b3VyaXRlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vc2VydmljZXMvYXV0aDAnXG5pbXBvcnQgeyB1cGRhdGVGYXZvdXJpdGVzIH0gZnJvbSAnLi4vYWN0aW9ucydcbmltcG9ydCBIZWFydCBmcm9tICcuL2hlYXJ0J1xuIFxuY29uc3QgRmF2b3VyaXRlcyA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbaXNDbGljaywgc2V0Q2xpY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBhY3Rpdml0eUlkID0gcHJvcHMuYWN0aXZpdHlJZFxuICBsZXQgdXNlciA9IHtmYXZvdXJpdGVzOiB7fSwgdXNlcjogXCJcIn1cbiAgbGV0IGZhdm91cml0ZXMgPSB7fVxuXG4gIGNvbnN0IHNldFVzZXIgPSAoKSA9PiB7XG4gICAgdXNlciA9IFxuICAgIHtcbiAgICAgIHVzZXI6IENvb2tpZXMuZ2V0KCdzdWInKSwgXG4gICAgICBmYXZvdXJpdGVzOiBKU09OLnBhcnNlKENvb2tpZXMuZ2V0KCdmYXZvdXJpdGVzJykuc3Vic3RyaW5nKDEsIENvb2tpZXMuZ2V0KCdmYXZvdXJpdGVzJykubGVuZ3RoLTEpKVxuICAgIH1cbiAgICBmYXZvdXJpdGVzID0gdXNlci5mYXZvdXJpdGVzXG4gIH1cblxuICBpZiAoYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAvLyBkbyBJIG5lZWQgdG8gcmVmcmVzaCB0aGlzIHRvIHJlZmxlY3QgdGhlIGNvb2tpZSBhZnRlciBhbnkgdXBhZGF0ZXM/IHNob3VsZG4ndCB1c2VyIHVzZSB1c2VTdGF0ZT9cbiAgICBzZXRVc2VyKClcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyKVxuICB9XG5cbiAgY29uc3QgY2xpY2tIZWFydCA9ICgpID0+IHtcbiAgICBpZiAoYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgIHNldENsaWNrKCFpc0NsaWNrKVxuXG4gICAgICBmYXZvdXJpdGVzW2FjdGl2aXR5SWRdID0gaXNDbGlja1xuICAgICAgdXBkYXRlRmF2b3VyaXRlcyh1c2VyKVxuICAgICAgYXV0aDAuc2V0RmF2ZXNDb29raWUoKVxuICAgICAgc2V0VXNlcigpXG5cbiAgICAgIC8vIGlmIChpc0NsaWNrID09PSB0cnVlKSB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGlzQ2xpY2spXG4gICAgICAvLyAgIGZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPSBmYWxzZVxuICAgICAgLy8gICB1cGRhdGVGYXZvdXJpdGVzKHVzZXIpXG4gICAgICAvLyAgIGF1dGgwLnNldEZhdmVzQ29va2llKClcbiAgICAgIC8vICAgc2V0VXNlcigpXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGlzQ2xpY2spXG4gICAgICAvLyB9XG4gICAgICAvLyBpZiAoaXNDbGljayA9PT0gZmFsc2UpIHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coaXNDbGljaylcbiAgICAgIC8vICAgLy8gaWYgKGZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPT09IGZhbHNlKSB7XG4gICAgICAvLyAgIC8vICAgZmF2b3VyaXRlc1thY3Rpdml0eUlkXSA9IHRydWVcbiAgICAgIC8vICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vICAgLy8gICB1c2VyLmZhdm91cml0ZXNbMF0ucHVzaCh7YWN0aXZpdHlJZDogdHJ1ZX0pO1xuICAgICAgLy8gICAvLyB9XG4gICAgICAvLyAgIGZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPSB0cnVlXG4gICAgICAvLyAgIHVwZGF0ZUZhdm91cml0ZXModXNlcilcbiAgICAgIC8vICAgYXV0aDAuc2V0RmF2ZXNDb29raWUoKVxuICAgICAgLy8gICBzZXRVc2VyKClcbiAgICAgIC8vICAgY29uc29sZS5sb2coaXNDbGljaylcbiAgICAgIC8vIH1cbiAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICBhdXRoMC5sb2dpbigpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgIGlmIChmYXZvdXJpdGVzW2FjdGl2aXR5SWRdID09PSB0cnVlKSB7XG4gICAgICAgIHNldENsaWNrKHRydWUpXG4gICAgICB9XG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYXJ0XCI+XG4gICAgICAgIHsgYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkgJiZcbiAgICAgICAgICA8SGVhcnQgaXNDbGljaz17aXNDbGlja30gb25DbGljaz17KCkgPT4gY2xpY2tIZWFydCgpfSAvPlxuICAgICAgICB9XG4gICAgICAgIHsgYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkgPT09IGZhbHNlICYmXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qYWtlcGVnL2ltYWdlL3VwbG9hZC92MTYwNjc0Mzg3Mi9oZWFydF9venBxamEucG5nXCIgY2xhc3NOYW1lPVwiaGVhcnQtaW1nXCIgb25DbGljaz17KCkgPT4gY2xpY2tIZWFydCgpfSBhbHQ9XCJoZWFydCBpY29uXCIgLz5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhlYXJ0IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0yNXB4O1xuICAgICAgICB9IFxuXG4gICAgICAgIC5oZWFydC1pbWcge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZhdm91cml0ZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/favourites.js\n");

/***/ })

})