webpackHotUpdate("static/development/pages/activities/[id].js",{

/***/ "./components/favourites.js":
/*!**********************************!*\
  !*** ./components/favourites.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth0 */ \"./services/auth0.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ \"./actions/index.js\");\n/* harmony import */ var _heart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./heart */ \"./components/heart.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Dev/discoverdoo-app/components/favourites.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar Favourites = function Favourites(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      isClick = _useState[0],\n      setClick = _useState[1];\n\n  var activityId = props.activityId;\n  var user = {\n    favourites: {},\n    user: \"\"\n  }; // let favourites = {}\n\n  var setUser = function setUser() {\n    user = {\n      user: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('sub'),\n      favourites: JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('favourites').substring(1, js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('favourites').length - 1))\n    }; // favourites = user.favourites\n  };\n\n  if (_services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated()) {\n    // do I need to refresh this to reflect the cookie after any upadates? shouldn't user use useState?\n    setUser();\n  }\n\n  var clickHeart = function clickHeart() {\n    // if the user is logged in then allow them to add / remove favourites\n    if (_services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated()) {\n      // update isClick state to what it wasn't before\n      setClick(!isClick); // \n\n      user.favourites[activityId] = !isClick;\n      console.log(user.favourites[activityId]); // update favourites in mongoDB\n\n      Object(_actions__WEBPACK_IMPORTED_MODULE_4__[\"updateFavourites\"])(user); // auth0.setFavesCookie()\n\n      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('favourites', JSON.parse(user.favourites));\n      console.log(user.favourites); // make sure what \n\n      setUser();\n    } // if the user is not logged in the show login popup\n    else {\n        _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].login();\n      }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (_services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated()) {\n      if (user.favourites[activityId] === true) {\n        setClick(true);\n      }\n    }\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"jsx-3566507812\" + \" \" + \"heart\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated() && __jsx(_heart__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    isClick: isClick,\n    onClick: function onClick() {\n      return clickHeart();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }), _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated() === false && __jsx(\"img\", {\n    src: \"https://res.cloudinary.com/jakepeg/image/upload/v1606743872/heart_ozpqja.png\",\n    onClick: function onClick() {\n      return clickHeart();\n    },\n    alt: \"heart icon\",\n    className: \"jsx-3566507812\" + \" \" + \"heart-img\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }\n  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"3566507812\",\n    __self: _this\n  }, \".heart.jsx-3566507812{position:absolute;z-index:10;margin-left:-25px;margin-top:-25px;}.heart-img.jsx-3566507812{cursor:pointer;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EZXYvRGV2L2Rpc2NvdmVyZG9vLWFwcC9jb21wb25lbnRzL2Zhdm91cml0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUVrQixBQUc2QixBQU9ILGVBQ2pCLEdBUGEsV0FDTyxrQkFDRCxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL0Rldi9EZXYvZGlzY292ZXJkb28tYXBwL2NvbXBvbmVudHMvZmF2b3VyaXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vc2VydmljZXMvYXV0aDAnXG5pbXBvcnQgeyB1cGRhdGVGYXZvdXJpdGVzIH0gZnJvbSAnLi4vYWN0aW9ucydcbmltcG9ydCBIZWFydCBmcm9tICcuL2hlYXJ0J1xuIFxuY29uc3QgRmF2b3VyaXRlcyA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbaXNDbGljaywgc2V0Q2xpY2tdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgYWN0aXZpdHlJZCA9IHByb3BzLmFjdGl2aXR5SWRcbiAgbGV0IHVzZXIgPSB7ZmF2b3VyaXRlczoge30sIHVzZXI6IFwiXCJ9XG4gIC8vIGxldCBmYXZvdXJpdGVzID0ge31cblxuICBjb25zdCBzZXRVc2VyID0gKCkgPT4ge1xuICAgIHVzZXIgPSBcbiAgICB7XG4gICAgICB1c2VyOiBDb29raWVzLmdldCgnc3ViJyksIFxuICAgICAgZmF2b3VyaXRlczogSlNPTi5wYXJzZShDb29raWVzLmdldCgnZmF2b3VyaXRlcycpLnN1YnN0cmluZygxLCBDb29raWVzLmdldCgnZmF2b3VyaXRlcycpLmxlbmd0aC0xKSlcbiAgICB9XG4gICAgLy8gZmF2b3VyaXRlcyA9IHVzZXIuZmF2b3VyaXRlc1xuICB9XG5cbiAgaWYgKGF1dGgwLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgLy8gZG8gSSBuZWVkIHRvIHJlZnJlc2ggdGhpcyB0byByZWZsZWN0IHRoZSBjb29raWUgYWZ0ZXIgYW55IHVwYWRhdGVzPyBzaG91bGRuJ3QgdXNlciB1c2UgdXNlU3RhdGU/XG4gICAgc2V0VXNlcigpXG4gIH1cblxuICBjb25zdCBjbGlja0hlYXJ0ID0gKCkgPT4ge1xuICAgIC8vIGlmIHRoZSB1c2VyIGlzIGxvZ2dlZCBpbiB0aGVuIGFsbG93IHRoZW0gdG8gYWRkIC8gcmVtb3ZlIGZhdm91cml0ZXNcbiAgICBpZiAoYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgIC8vIHVwZGF0ZSBpc0NsaWNrIHN0YXRlIHRvIHdoYXQgaXQgd2Fzbid0IGJlZm9yZVxuICAgICAgc2V0Q2xpY2soIWlzQ2xpY2spXG4gICAgICAvLyBcbiAgICAgIHVzZXIuZmF2b3VyaXRlc1thY3Rpdml0eUlkXSA9ICFpc0NsaWNrXG4gICAgICBjb25zb2xlLmxvZyh1c2VyLmZhdm91cml0ZXNbYWN0aXZpdHlJZF0pXG4gICAgICAvLyB1cGRhdGUgZmF2b3VyaXRlcyBpbiBtb25nb0RCXG4gICAgICB1cGRhdGVGYXZvdXJpdGVzKHVzZXIpXG4gICAgICBcbiAgICAgIC8vIGF1dGgwLnNldEZhdmVzQ29va2llKClcbiAgICAgIENvb2tpZXMuc2V0KCdmYXZvdXJpdGVzJywgSlNPTi5wYXJzZSh1c2VyLmZhdm91cml0ZXMpKVxuICAgICAgY29uc29sZS5sb2codXNlci5mYXZvdXJpdGVzKVxuICAgICAgLy8gbWFrZSBzdXJlIHdoYXQgXG4gICAgICBzZXRVc2VyKClcbiAgICB9IFxuICAgIC8vIGlmIHRoZSB1c2VyIGlzIG5vdCBsb2dnZWQgaW4gdGhlIHNob3cgbG9naW4gcG9wdXBcbiAgICBlbHNlIFxuICAgIHtcbiAgICAgIGF1dGgwLmxvZ2luKClcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgaWYgKHVzZXIuZmF2b3VyaXRlc1thY3Rpdml0eUlkXSA9PT0gdHJ1ZSkge1xuICAgICAgICBzZXRDbGljayh0cnVlKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFydFwiPlxuICAgICAgICB7IGF1dGgwLmlzQXV0aGVudGljYXRlZCgpICYmXG4gICAgICAgICAgPEhlYXJ0IGlzQ2xpY2s9e2lzQ2xpY2t9IG9uQ2xpY2s9eygpID0+IGNsaWNrSGVhcnQoKX0gLz5cbiAgICAgICAgfVxuICAgICAgICB7IGF1dGgwLmlzQXV0aGVudGljYXRlZCgpID09PSBmYWxzZSAmJlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vamFrZXBlZy9pbWFnZS91cGxvYWQvdjE2MDY3NDM4NzIvaGVhcnRfb3pwcWphLnBuZ1wiIGNsYXNzTmFtZT1cImhlYXJ0LWltZ1wiIG9uQ2xpY2s9eygpID0+IGNsaWNrSGVhcnQoKX0gYWx0PVwiaGVhcnQgaWNvblwiIC8+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oZWFydCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgICAgICAgfSBcblxuICAgICAgICAuaGVhcnQtaW1nIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmF2b3VyaXRlcyJdfQ== */\\n/*@ sourceURL=/Users/Dev/Dev/discoverdoo-app/components/favourites.js */\"));\n};\n\n_s(Favourites, \"CrWGwlkeEcuARLJup9uUkUjWlb4=\");\n\n_c = Favourites;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Favourites);\n\nvar _c;\n\n$RefreshReg$(_c, \"Favourites\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zhdm91cml0ZXMuanM/ZmI0OSJdLCJuYW1lcyI6WyJGYXZvdXJpdGVzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzQ2xpY2siLCJzZXRDbGljayIsImFjdGl2aXR5SWQiLCJ1c2VyIiwiZmF2b3VyaXRlcyIsInNldFVzZXIiLCJDb29raWVzIiwiZ2V0IiwiSlNPTiIsInBhcnNlIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwiYXV0aDAiLCJpc0F1dGhlbnRpY2F0ZWQiLCJjbGlja0hlYXJ0IiwiY29uc29sZSIsImxvZyIsInVwZGF0ZUZhdm91cml0ZXMiLCJzZXQiLCJsb2dpbiIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0FDLHNEQUFRLEVBRFI7QUFBQSxNQUNyQkMsT0FEcUI7QUFBQSxNQUNaQyxRQURZOztBQUU1QixNQUFNQyxVQUFVLEdBQUdKLEtBQUssQ0FBQ0ksVUFBekI7QUFDQSxNQUFJQyxJQUFJLEdBQUc7QUFBQ0MsY0FBVSxFQUFFLEVBQWI7QUFBaUJELFFBQUksRUFBRTtBQUF2QixHQUFYLENBSDRCLENBSTVCOztBQUVBLE1BQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEJGLFFBQUksR0FDSjtBQUNFQSxVQUFJLEVBQUVHLGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLENBRFI7QUFFRUgsZ0JBQVUsRUFBRUksSUFBSSxDQUFDQyxLQUFMLENBQVdILGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRyxTQUExQixDQUFvQyxDQUFwQyxFQUF1Q0osZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJJLE1BQTFCLEdBQWlDLENBQXhFLENBQVg7QUFGZCxLQURBLENBRG9CLENBTXBCO0FBQ0QsR0FQRDs7QUFTQSxNQUFJQyx1REFBSyxDQUFDQyxlQUFOLEVBQUosRUFBNkI7QUFDM0I7QUFDQVIsV0FBTztBQUNSOztBQUVELE1BQU1TLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkI7QUFDQSxRQUFJRix1REFBSyxDQUFDQyxlQUFOLEVBQUosRUFBNkI7QUFDM0I7QUFDQVosY0FBUSxDQUFDLENBQUNELE9BQUYsQ0FBUixDQUYyQixDQUczQjs7QUFDQUcsVUFBSSxDQUFDQyxVQUFMLENBQWdCRixVQUFoQixJQUE4QixDQUFDRixPQUEvQjtBQUNBZSxhQUFPLENBQUNDLEdBQVIsQ0FBWWIsSUFBSSxDQUFDQyxVQUFMLENBQWdCRixVQUFoQixDQUFaLEVBTDJCLENBTTNCOztBQUNBZSx1RUFBZ0IsQ0FBQ2QsSUFBRCxDQUFoQixDQVAyQixDQVMzQjs7QUFDQUcsc0RBQU8sQ0FBQ1ksR0FBUixDQUFZLFlBQVosRUFBMEJWLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixJQUFJLENBQUNDLFVBQWhCLENBQTFCO0FBQ0FXLGFBQU8sQ0FBQ0MsR0FBUixDQUFZYixJQUFJLENBQUNDLFVBQWpCLEVBWDJCLENBWTNCOztBQUNBQyxhQUFPO0FBQ1IsS0FkRCxDQWVBO0FBZkEsU0FpQkE7QUFDRU8sK0RBQUssQ0FBQ08sS0FBTjtBQUNEO0FBQ0YsR0F0QkQ7O0FBd0JBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJUix1REFBSyxDQUFDQyxlQUFOLEVBQUosRUFBNkI7QUFDM0IsVUFBSVYsSUFBSSxDQUFDQyxVQUFMLENBQWdCRixVQUFoQixNQUFnQyxJQUFwQyxFQUEwQztBQUN4Q0QsZ0JBQVEsQ0FBQyxJQUFELENBQVI7QUFDRDtBQUNGO0FBQ0YsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLFNBQ0UsbUVBQ0U7QUFBQSx3Q0FBZSxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSVcsdURBQUssQ0FBQ0MsZUFBTixNQUNBLE1BQUMsOENBQUQ7QUFBTyxXQUFPLEVBQUViLE9BQWhCO0FBQXlCLFdBQU8sRUFBRTtBQUFBLGFBQU1jLFVBQVUsRUFBaEI7QUFBQSxLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFJSUYsdURBQUssQ0FBQ0MsZUFBTixPQUE0QixLQUE1QixJQUNBO0FBQUssT0FBRyxFQUFDLDhFQUFUO0FBQThHLFdBQU8sRUFBRTtBQUFBLGFBQU1DLFVBQVUsRUFBaEI7QUFBQSxLQUF2SDtBQUEySSxPQUFHLEVBQUMsWUFBL0k7QUFBQSx3Q0FBa0csV0FBbEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLENBREY7QUFBQTtBQUFBO0FBQUEseXFIQURGO0FBeUJELENBN0VEOztHQUFNakIsVTs7S0FBQUEsVTtBQStFU0EseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zhdm91cml0ZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuaW1wb3J0IGF1dGgwIGZyb20gJy4uL3NlcnZpY2VzL2F1dGgwJ1xuaW1wb3J0IHsgdXBkYXRlRmF2b3VyaXRlcyB9IGZyb20gJy4uL2FjdGlvbnMnXG5pbXBvcnQgSGVhcnQgZnJvbSAnLi9oZWFydCdcbiBcbmNvbnN0IEZhdm91cml0ZXMgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2lzQ2xpY2ssIHNldENsaWNrXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IGFjdGl2aXR5SWQgPSBwcm9wcy5hY3Rpdml0eUlkXG4gIGxldCB1c2VyID0ge2Zhdm91cml0ZXM6IHt9LCB1c2VyOiBcIlwifVxuICAvLyBsZXQgZmF2b3VyaXRlcyA9IHt9XG5cbiAgY29uc3Qgc2V0VXNlciA9ICgpID0+IHtcbiAgICB1c2VyID0gXG4gICAge1xuICAgICAgdXNlcjogQ29va2llcy5nZXQoJ3N1YicpLCBcbiAgICAgIGZhdm91cml0ZXM6IEpTT04ucGFyc2UoQ29va2llcy5nZXQoJ2Zhdm91cml0ZXMnKS5zdWJzdHJpbmcoMSwgQ29va2llcy5nZXQoJ2Zhdm91cml0ZXMnKS5sZW5ndGgtMSkpXG4gICAgfVxuICAgIC8vIGZhdm91cml0ZXMgPSB1c2VyLmZhdm91cml0ZXNcbiAgfVxuXG4gIGlmIChhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgIC8vIGRvIEkgbmVlZCB0byByZWZyZXNoIHRoaXMgdG8gcmVmbGVjdCB0aGUgY29va2llIGFmdGVyIGFueSB1cGFkYXRlcz8gc2hvdWxkbid0IHVzZXIgdXNlIHVzZVN0YXRlP1xuICAgIHNldFVzZXIoKVxuICB9XG5cbiAgY29uc3QgY2xpY2tIZWFydCA9ICgpID0+IHtcbiAgICAvLyBpZiB0aGUgdXNlciBpcyBsb2dnZWQgaW4gdGhlbiBhbGxvdyB0aGVtIHRvIGFkZCAvIHJlbW92ZSBmYXZvdXJpdGVzXG4gICAgaWYgKGF1dGgwLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgICAvLyB1cGRhdGUgaXNDbGljayBzdGF0ZSB0byB3aGF0IGl0IHdhc24ndCBiZWZvcmVcbiAgICAgIHNldENsaWNrKCFpc0NsaWNrKVxuICAgICAgLy8gXG4gICAgICB1c2VyLmZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPSAhaXNDbGlja1xuICAgICAgY29uc29sZS5sb2codXNlci5mYXZvdXJpdGVzW2FjdGl2aXR5SWRdKVxuICAgICAgLy8gdXBkYXRlIGZhdm91cml0ZXMgaW4gbW9uZ29EQlxuICAgICAgdXBkYXRlRmF2b3VyaXRlcyh1c2VyKVxuICAgICAgXG4gICAgICAvLyBhdXRoMC5zZXRGYXZlc0Nvb2tpZSgpXG4gICAgICBDb29raWVzLnNldCgnZmF2b3VyaXRlcycsIEpTT04ucGFyc2UodXNlci5mYXZvdXJpdGVzKSlcbiAgICAgIGNvbnNvbGUubG9nKHVzZXIuZmF2b3VyaXRlcylcbiAgICAgIC8vIG1ha2Ugc3VyZSB3aGF0IFxuICAgICAgc2V0VXNlcigpXG4gICAgfSBcbiAgICAvLyBpZiB0aGUgdXNlciBpcyBub3QgbG9nZ2VkIGluIHRoZSBzaG93IGxvZ2luIHBvcHVwXG4gICAgZWxzZSBcbiAgICB7XG4gICAgICBhdXRoMC5sb2dpbigpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgIGlmICh1c2VyLmZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPT09IHRydWUpIHtcbiAgICAgICAgc2V0Q2xpY2sodHJ1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhcnRcIj5cbiAgICAgICAgeyBhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgICAgIDxIZWFydCBpc0NsaWNrPXtpc0NsaWNrfSBvbkNsaWNrPXsoKSA9PiBjbGlja0hlYXJ0KCl9IC8+XG4gICAgICAgIH1cbiAgICAgICAgeyBhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSA9PT0gZmFsc2UgJiZcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2pha2VwZWcvaW1hZ2UvdXBsb2FkL3YxNjA2NzQzODcyL2hlYXJ0X296cHFqYS5wbmdcIiBjbGFzc05hbWU9XCJoZWFydC1pbWdcIiBvbkNsaWNrPXsoKSA9PiBjbGlja0hlYXJ0KCl9IGFsdD1cImhlYXJ0IGljb25cIiAvPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaGVhcnQge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTI1cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTI1cHg7XG4gICAgICAgIH0gXG5cbiAgICAgICAgLmhlYXJ0LWltZyB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZhdm91cml0ZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/favourites.js\n");

/***/ })

})