webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/favourites.js":
/*!**********************************!*\
  !*** ./components/favourites.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth0 */ \"./services/auth0.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ \"./actions/index.js\");\n/* harmony import */ var _heart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./heart */ \"./components/heart.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Dev/discoverdoo-app/components/favourites.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar Favourites = function Favourites(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isClick = _useState[0],\n      setClick = _useState[1];\n\n  var activityId = props.activityId;\n  var user = {};\n\n  if (_services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated()) {\n    user = {\n      user: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('sub'),\n      favourites: JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('favourites').substring(1, js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('favourites').length - 1))\n    };\n  }\n\n  var favourites = user.favourites;\n\n  var clickHeart = function clickHeart() {\n    if (_services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated()) {\n      setClick(!isClick);\n\n      if (isClick === true) {\n        favourites[activityId] = false;\n        Object(_actions__WEBPACK_IMPORTED_MODULE_4__[\"updateFavourites\"])(user);\n        _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setFavesCookie();\n      }\n\n      if (isClick === false) {\n        console.log(\"you liked the activity\"); // if favourites[activityId] === false then\n        // favourites[activityId] = true\n        // else add it to the array\n        // updateFavourites(user)\n        // auth0.setFavesCookie()\n      }\n    } else {\n      _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].login();\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (_services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated()) {\n      if (favourites[activityId] === true) {\n        setClick(true);\n      }\n    }\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"jsx-2777103503\" + \" \" + \"heart\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated() && __jsx(_heart__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    isClick: isClick,\n    onClick: function onClick() {\n      return clickHeart();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }), _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated() === false && __jsx(\"img\", {\n    src: \"https://res.cloudinary.com/jakepeg/image/upload/v1606743872/heart_ozpqja.png\",\n    onClick: function onClick() {\n      return clickHeart();\n    },\n    alt: \"heart icon\",\n    className: \"jsx-2777103503\" + \" \" + \"heart-img\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 11\n    }\n  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"2777103503\",\n    __self: _this\n  }, \".heart.jsx-2777103503{position:absolute;z-index:10;margin-left:270px;margin-top:-20px;}.heart-img.jsx-2777103503{cursor:pointer;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EZXYvRGV2L2Rpc2NvdmVyZG9vLWFwcC9jb21wb25lbnRzL2Zhdm91cml0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkRrQixBQUc2QixBQU9ILGVBQ2pCLEdBUGEsV0FDTyxrQkFDRCxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL0Rldi9EZXYvZGlzY292ZXJkb28tYXBwL2NvbXBvbmVudHMvZmF2b3VyaXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vc2VydmljZXMvYXV0aDAnXG5pbXBvcnQgeyB1cGRhdGVGYXZvdXJpdGVzIH0gZnJvbSAnLi4vYWN0aW9ucydcbmltcG9ydCBIZWFydCBmcm9tICcuL2hlYXJ0J1xuIFxuY29uc3QgRmF2b3VyaXRlcyA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbaXNDbGljaywgc2V0Q2xpY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBhY3Rpdml0eUlkID0gcHJvcHMuYWN0aXZpdHlJZFxuICBsZXQgdXNlciA9IHt9XG5cbiAgaWYgKGF1dGgwLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgdXNlciA9IFxuICAgICAge1xuICAgICAgICB1c2VyOiBDb29raWVzLmdldCgnc3ViJyksIFxuICAgICAgICBmYXZvdXJpdGVzOiBKU09OLnBhcnNlKENvb2tpZXMuZ2V0KCdmYXZvdXJpdGVzJykuc3Vic3RyaW5nKDEsIENvb2tpZXMuZ2V0KCdmYXZvdXJpdGVzJykubGVuZ3RoLTEpKVxuICAgICAgfVxuICB9XG5cbiAgY29uc3QgZmF2b3VyaXRlcyA9IHVzZXIuZmF2b3VyaXRlc1xuXG4gIGNvbnN0IGNsaWNrSGVhcnQgPSAoKSA9PiB7XG4gICAgaWYgKGF1dGgwLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgICBzZXRDbGljayghaXNDbGljaylcbiAgICAgIGlmIChpc0NsaWNrID09PSB0cnVlKSB7XG4gICAgICAgIGZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPSBmYWxzZVxuICAgICAgICB1cGRhdGVGYXZvdXJpdGVzKHVzZXIpXG4gICAgICAgIGF1dGgwLnNldEZhdmVzQ29va2llKClcbiAgICAgIH1cbiAgICAgIGlmIChpc0NsaWNrID09PSBmYWxzZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInlvdSBsaWtlZCB0aGUgYWN0aXZpdHlcIilcbiAgICAgICAgLy8gaWYgZmF2b3VyaXRlc1thY3Rpdml0eUlkXSA9PT0gZmFsc2UgdGhlblxuICAgICAgICAvLyBmYXZvdXJpdGVzW2FjdGl2aXR5SWRdID0gdHJ1ZVxuICAgICAgICAvLyBlbHNlIGFkZCBpdCB0byB0aGUgYXJyYXlcbiAgICAgICAgLy8gdXBkYXRlRmF2b3VyaXRlcyh1c2VyKVxuICAgICAgICAvLyBhdXRoMC5zZXRGYXZlc0Nvb2tpZSgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGF1dGgwLmxvZ2luKClcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgaWYgKGZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPT09IHRydWUpIHtcbiAgICAgICAgc2V0Q2xpY2sodHJ1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhcnRcIj5cbiAgICAgICAgeyBhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgICAgIDxIZWFydCBpc0NsaWNrPXtpc0NsaWNrfSBvbkNsaWNrPXsoKSA9PiBjbGlja0hlYXJ0KCl9IC8+XG4gICAgICAgIH1cbiAgICAgICAgeyBhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSA9PT0gZmFsc2UgJiZcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2pha2VwZWcvaW1hZ2UvdXBsb2FkL3YxNjA2NzQzODcyL2hlYXJ0X296cHFqYS5wbmdcIiBjbGFzc05hbWU9XCJoZWFydC1pbWdcIiBvbkNsaWNrPXsoKSA9PiBjbGlja0hlYXJ0KCl9IGFsdD1cImhlYXJ0IGljb25cIiAvPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaGVhcnQge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjcwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgICAgIH0gXG5cbiAgICAgICAgLmhlYXJ0LWltZyB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmF2b3VyaXRlcyJdfQ== */\\n/*@ sourceURL=/Users/Dev/Dev/discoverdoo-app/components/favourites.js */\"));\n};\n\n_s(Favourites, \"sTcYVcMsBwvPBxCEkjnrn+avZQ4=\");\n\n_c = Favourites;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Favourites);\n\nvar _c;\n\n$RefreshReg$(_c, \"Favourites\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zhdm91cml0ZXMuanM/ZmI0OSJdLCJuYW1lcyI6WyJGYXZvdXJpdGVzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzQ2xpY2siLCJzZXRDbGljayIsImFjdGl2aXR5SWQiLCJ1c2VyIiwiYXV0aDAiLCJpc0F1dGhlbnRpY2F0ZWQiLCJDb29raWVzIiwiZ2V0IiwiZmF2b3VyaXRlcyIsIkpTT04iLCJwYXJzZSIsInN1YnN0cmluZyIsImxlbmd0aCIsImNsaWNrSGVhcnQiLCJ1cGRhdGVGYXZvdXJpdGVzIiwic2V0RmF2ZXNDb29raWUiLCJjb25zb2xlIiwibG9nIiwibG9naW4iLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNBQyxzREFBUSxDQUFDLEtBQUQsQ0FEUjtBQUFBLE1BQ3JCQyxPQURxQjtBQUFBLE1BQ1pDLFFBRFk7O0FBRTVCLE1BQU1DLFVBQVUsR0FBR0osS0FBSyxDQUFDSSxVQUF6QjtBQUNBLE1BQUlDLElBQUksR0FBRyxFQUFYOztBQUVBLE1BQUlDLHVEQUFLLENBQUNDLGVBQU4sRUFBSixFQUE2QjtBQUMzQkYsUUFBSSxHQUNGO0FBQ0VBLFVBQUksRUFBRUcsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosQ0FEUjtBQUVFQyxnQkFBVSxFQUFFQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJJLFNBQTFCLENBQW9DLENBQXBDLEVBQXVDTCxnREFBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkssTUFBMUIsR0FBaUMsQ0FBeEUsQ0FBWDtBQUZkLEtBREY7QUFLRDs7QUFFRCxNQUFNSixVQUFVLEdBQUdMLElBQUksQ0FBQ0ssVUFBeEI7O0FBRUEsTUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixRQUFJVCx1REFBSyxDQUFDQyxlQUFOLEVBQUosRUFBNkI7QUFDM0JKLGNBQVEsQ0FBQyxDQUFDRCxPQUFGLENBQVI7O0FBQ0EsVUFBSUEsT0FBTyxLQUFLLElBQWhCLEVBQXNCO0FBQ3BCUSxrQkFBVSxDQUFDTixVQUFELENBQVYsR0FBeUIsS0FBekI7QUFDQVkseUVBQWdCLENBQUNYLElBQUQsQ0FBaEI7QUFDQUMsK0RBQUssQ0FBQ1csY0FBTjtBQUNEOztBQUNELFVBQUlmLE9BQU8sS0FBSyxLQUFoQixFQUF1QjtBQUNyQmdCLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaLEVBRHFCLENBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUNGLEtBZkQsTUFlTztBQUNMYiw2REFBSyxDQUFDYyxLQUFOO0FBQ0Q7QUFDRixHQW5CRDs7QUFxQkFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlmLHVEQUFLLENBQUNDLGVBQU4sRUFBSixFQUE2QjtBQUMzQixVQUFJRyxVQUFVLENBQUNOLFVBQUQsQ0FBVixLQUEyQixJQUEvQixFQUFxQztBQUNuQ0QsZ0JBQVEsQ0FBQyxJQUFELENBQVI7QUFDRDtBQUNGO0FBQ0YsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLFNBQ0UsbUVBQ0U7QUFBQSx3Q0FBZSxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSUcsdURBQUssQ0FBQ0MsZUFBTixNQUNBLE1BQUMsOENBQUQ7QUFBTyxXQUFPLEVBQUVMLE9BQWhCO0FBQXlCLFdBQU8sRUFBRTtBQUFBLGFBQU1hLFVBQVUsRUFBaEI7QUFBQSxLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFJSVQsdURBQUssQ0FBQ0MsZUFBTixPQUE0QixLQUE1QixJQUNBO0FBQUssT0FBRyxFQUFDLDhFQUFUO0FBQThHLFdBQU8sRUFBRTtBQUFBLGFBQU1RLFVBQVUsRUFBaEI7QUFBQSxLQUF2SDtBQUEySSxPQUFHLEVBQUMsWUFBL0k7QUFBQSx3Q0FBa0csV0FBbEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLENBREY7QUFBQTtBQUFBO0FBQUEscXdHQURGO0FBMEJELENBdEVEOztHQUFNaEIsVTs7S0FBQUEsVTtBQXdFU0EseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zhdm91cml0ZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuaW1wb3J0IGF1dGgwIGZyb20gJy4uL3NlcnZpY2VzL2F1dGgwJ1xuaW1wb3J0IHsgdXBkYXRlRmF2b3VyaXRlcyB9IGZyb20gJy4uL2FjdGlvbnMnXG5pbXBvcnQgSGVhcnQgZnJvbSAnLi9oZWFydCdcbiBcbmNvbnN0IEZhdm91cml0ZXMgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2lzQ2xpY2ssIHNldENsaWNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgYWN0aXZpdHlJZCA9IHByb3BzLmFjdGl2aXR5SWRcbiAgbGV0IHVzZXIgPSB7fVxuXG4gIGlmIChhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgIHVzZXIgPSBcbiAgICAgIHtcbiAgICAgICAgdXNlcjogQ29va2llcy5nZXQoJ3N1YicpLCBcbiAgICAgICAgZmF2b3VyaXRlczogSlNPTi5wYXJzZShDb29raWVzLmdldCgnZmF2b3VyaXRlcycpLnN1YnN0cmluZygxLCBDb29raWVzLmdldCgnZmF2b3VyaXRlcycpLmxlbmd0aC0xKSlcbiAgICAgIH1cbiAgfVxuXG4gIGNvbnN0IGZhdm91cml0ZXMgPSB1c2VyLmZhdm91cml0ZXNcblxuICBjb25zdCBjbGlja0hlYXJ0ID0gKCkgPT4ge1xuICAgIGlmIChhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgc2V0Q2xpY2soIWlzQ2xpY2spXG4gICAgICBpZiAoaXNDbGljayA9PT0gdHJ1ZSkge1xuICAgICAgICBmYXZvdXJpdGVzW2FjdGl2aXR5SWRdID0gZmFsc2VcbiAgICAgICAgdXBkYXRlRmF2b3VyaXRlcyh1c2VyKVxuICAgICAgICBhdXRoMC5zZXRGYXZlc0Nvb2tpZSgpXG4gICAgICB9XG4gICAgICBpZiAoaXNDbGljayA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ5b3UgbGlrZWQgdGhlIGFjdGl2aXR5XCIpXG4gICAgICAgIC8vIGlmIGZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPT09IGZhbHNlIHRoZW5cbiAgICAgICAgLy8gZmF2b3VyaXRlc1thY3Rpdml0eUlkXSA9IHRydWVcbiAgICAgICAgLy8gZWxzZSBhZGQgaXQgdG8gdGhlIGFycmF5XG4gICAgICAgIC8vIHVwZGF0ZUZhdm91cml0ZXModXNlcilcbiAgICAgICAgLy8gYXV0aDAuc2V0RmF2ZXNDb29raWUoKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhdXRoMC5sb2dpbigpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgIGlmIChmYXZvdXJpdGVzW2FjdGl2aXR5SWRdID09PSB0cnVlKSB7XG4gICAgICAgIHNldENsaWNrKHRydWUpXG4gICAgICB9XG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYXJ0XCI+XG4gICAgICAgIHsgYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkgJiZcbiAgICAgICAgICA8SGVhcnQgaXNDbGljaz17aXNDbGlja30gb25DbGljaz17KCkgPT4gY2xpY2tIZWFydCgpfSAvPlxuICAgICAgICB9XG4gICAgICAgIHsgYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkgPT09IGZhbHNlICYmXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qYWtlcGVnL2ltYWdlL3VwbG9hZC92MTYwNjc0Mzg3Mi9oZWFydF9venBxamEucG5nXCIgY2xhc3NOYW1lPVwiaGVhcnQtaW1nXCIgb25DbGljaz17KCkgPT4gY2xpY2tIZWFydCgpfSBhbHQ9XCJoZWFydCBpY29uXCIgLz5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhlYXJ0IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDI3MHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgICB9IFxuXG4gICAgICAgIC5oZWFydC1pbWcge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZhdm91cml0ZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/favourites.js\n");

/***/ })

})