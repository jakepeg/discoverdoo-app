webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/favourites.js":
/*!**********************************!*\
  !*** ./components/favourites.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth0 */ \"./services/auth0.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ \"./actions/index.js\");\n/* harmony import */ var _heart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./heart */ \"./components/heart.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Dev/discoverdoo-app/components/favourites.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar Favourites = function Favourites(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isClick = _useState[0],\n      setClick = _useState[1];\n\n  var activityId = props.activityId;\n  var user = {};\n  var favourites = {};\n\n  if (_services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated()) {\n    // do I need to refresh this to reflect the cookie after any upadates? shouldn't user use useState?\n    user = {\n      user: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('sub'),\n      favourites: JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('favourites').substring(1, js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('favourites').length - 1))\n    };\n  }\n\n  favourites = user.favourites;\n\n  var clickHeart = function clickHeart() {\n    if (_services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated()) {\n      setClick(!isClick);\n\n      if (isClick === true) {\n        favourites[activityId] = false;\n        Object(_actions__WEBPACK_IMPORTED_MODULE_4__[\"updateFavourites\"])(user);\n        _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setFavesCookie();\n        user = {\n          user: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('sub'),\n          favourites: JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('favourites').substring(1, js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('favourites').length - 1))\n        };\n      }\n\n      if (isClick === false) {\n        // if (favourites[activityId] === false) {\n        //   favourites[activityId] = true\n        // } else {\n        //   user.favourites[0].push({activityId: true});\n        // }\n        favourites[activityId] = true;\n        Object(_actions__WEBPACK_IMPORTED_MODULE_4__[\"updateFavourites\"])(user);\n        _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setFavesCookie();\n        user = {\n          user: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('sub'),\n          favourites: JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('favourites').substring(1, js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('favourites').length - 1))\n        };\n      }\n    } else {\n      _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].login();\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (_services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated()) {\n      if (favourites[activityId] === true) {\n        setClick(true);\n      }\n    }\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"jsx-3566507812\" + \" \" + \"heart\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated() && __jsx(_heart__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    isClick: isClick,\n    onClick: function onClick() {\n      return clickHeart();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }), _services_auth0__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAuthenticated() === false && __jsx(\"img\", {\n    src: \"https://res.cloudinary.com/jakepeg/image/upload/v1606743872/heart_ozpqja.png\",\n    onClick: function onClick() {\n      return clickHeart();\n    },\n    alt: \"heart icon\",\n    className: \"jsx-3566507812\" + \" \" + \"heart-img\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"3566507812\",\n    __self: _this\n  }, \".heart.jsx-3566507812{position:absolute;z-index:10;margin-left:-25px;margin-top:-25px;}.heart-img.jsx-3566507812{cursor:pointer;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EZXYvRGV2L2Rpc2NvdmVyZG9vLWFwcC9jb21wb25lbnRzL2Zhdm91cml0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkVrQixBQUc2QixBQU9ILGVBQ2pCLEdBUGEsV0FDTyxrQkFDRCxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL0Rldi9EZXYvZGlzY292ZXJkb28tYXBwL2NvbXBvbmVudHMvZmF2b3VyaXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vc2VydmljZXMvYXV0aDAnXG5pbXBvcnQgeyB1cGRhdGVGYXZvdXJpdGVzIH0gZnJvbSAnLi4vYWN0aW9ucydcbmltcG9ydCBIZWFydCBmcm9tICcuL2hlYXJ0J1xuIFxuY29uc3QgRmF2b3VyaXRlcyA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbaXNDbGljaywgc2V0Q2xpY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBhY3Rpdml0eUlkID0gcHJvcHMuYWN0aXZpdHlJZFxuICBsZXQgdXNlciA9IHt9XG4gIGxldCBmYXZvdXJpdGVzID0ge31cblxuICBpZiAoYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAvLyBkbyBJIG5lZWQgdG8gcmVmcmVzaCB0aGlzIHRvIHJlZmxlY3QgdGhlIGNvb2tpZSBhZnRlciBhbnkgdXBhZGF0ZXM/IHNob3VsZG4ndCB1c2VyIHVzZSB1c2VTdGF0ZT9cbiAgICB1c2VyID0gXG4gICAge1xuICAgICAgdXNlcjogQ29va2llcy5nZXQoJ3N1YicpLCBcbiAgICAgIGZhdm91cml0ZXM6IEpTT04ucGFyc2UoQ29va2llcy5nZXQoJ2Zhdm91cml0ZXMnKS5zdWJzdHJpbmcoMSwgQ29va2llcy5nZXQoJ2Zhdm91cml0ZXMnKS5sZW5ndGgtMSkpXG4gICAgfVxuICB9XG5cbiAgZmF2b3VyaXRlcyA9IHVzZXIuZmF2b3VyaXRlc1xuXG4gIGNvbnN0IGNsaWNrSGVhcnQgPSAoKSA9PiB7XG4gICAgaWYgKGF1dGgwLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgICBzZXRDbGljayghaXNDbGljaylcbiAgICAgIGlmIChpc0NsaWNrID09PSB0cnVlKSB7XG4gICAgICAgIGZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPSBmYWxzZVxuICAgICAgICB1cGRhdGVGYXZvdXJpdGVzKHVzZXIpXG4gICAgICAgIGF1dGgwLnNldEZhdmVzQ29va2llKClcbiAgICAgICAgdXNlciA9IFxuICAgICAgICB7XG4gICAgICAgICAgdXNlcjogQ29va2llcy5nZXQoJ3N1YicpLCBcbiAgICAgICAgICBmYXZvdXJpdGVzOiBKU09OLnBhcnNlKENvb2tpZXMuZ2V0KCdmYXZvdXJpdGVzJykuc3Vic3RyaW5nKDEsIENvb2tpZXMuZ2V0KCdmYXZvdXJpdGVzJykubGVuZ3RoLTEpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXNDbGljayA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gaWYgKGZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPT09IGZhbHNlKSB7XG4gICAgICAgIC8vICAgZmF2b3VyaXRlc1thY3Rpdml0eUlkXSA9IHRydWVcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICB1c2VyLmZhdm91cml0ZXNbMF0ucHVzaCh7YWN0aXZpdHlJZDogdHJ1ZX0pO1xuICAgICAgICAvLyB9XG4gICAgICAgIGZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPSB0cnVlXG4gICAgICAgIHVwZGF0ZUZhdm91cml0ZXModXNlcilcbiAgICAgICAgYXV0aDAuc2V0RmF2ZXNDb29raWUoKVxuICAgICAgICB1c2VyID0gXG4gICAgICAgIHtcbiAgICAgICAgICB1c2VyOiBDb29raWVzLmdldCgnc3ViJyksIFxuICAgICAgICAgIGZhdm91cml0ZXM6IEpTT04ucGFyc2UoQ29va2llcy5nZXQoJ2Zhdm91cml0ZXMnKS5zdWJzdHJpbmcoMSwgQ29va2llcy5nZXQoJ2Zhdm91cml0ZXMnKS5sZW5ndGgtMSkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXV0aDAubG9naW4oKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGF1dGgwLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgICBpZiAoZmF2b3VyaXRlc1thY3Rpdml0eUlkXSA9PT0gdHJ1ZSkge1xuICAgICAgICBzZXRDbGljayh0cnVlKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFydFwiPlxuICAgICAgICB7IGF1dGgwLmlzQXV0aGVudGljYXRlZCgpICYmXG4gICAgICAgICAgPEhlYXJ0IGlzQ2xpY2s9e2lzQ2xpY2t9IG9uQ2xpY2s9eygpID0+IGNsaWNrSGVhcnQoKX0gLz5cbiAgICAgICAgfVxuICAgICAgICB7IGF1dGgwLmlzQXV0aGVudGljYXRlZCgpID09PSBmYWxzZSAmJlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vamFrZXBlZy9pbWFnZS91cGxvYWQvdjE2MDY3NDM4NzIvaGVhcnRfb3pwcWphLnBuZ1wiIGNsYXNzTmFtZT1cImhlYXJ0LWltZ1wiIG9uQ2xpY2s9eygpID0+IGNsaWNrSGVhcnQoKX0gYWx0PVwiaGVhcnQgaWNvblwiIC8+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oZWFydCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgICAgICAgfSBcblxuICAgICAgICAuaGVhcnQtaW1nIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGYXZvdXJpdGVzIl19 */\\n/*@ sourceURL=/Users/Dev/Dev/discoverdoo-app/components/favourites.js */\"));\n};\n\n_s(Favourites, \"sTcYVcMsBwvPBxCEkjnrn+avZQ4=\");\n\n_c = Favourites;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Favourites);\n\nvar _c;\n\n$RefreshReg$(_c, \"Favourites\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zhdm91cml0ZXMuanM/ZmI0OSJdLCJuYW1lcyI6WyJGYXZvdXJpdGVzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzQ2xpY2siLCJzZXRDbGljayIsImFjdGl2aXR5SWQiLCJ1c2VyIiwiZmF2b3VyaXRlcyIsImF1dGgwIiwiaXNBdXRoZW50aWNhdGVkIiwiQ29va2llcyIsImdldCIsIkpTT04iLCJwYXJzZSIsInN1YnN0cmluZyIsImxlbmd0aCIsImNsaWNrSGVhcnQiLCJ1cGRhdGVGYXZvdXJpdGVzIiwic2V0RmF2ZXNDb29raWUiLCJsb2dpbiIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0FDLHNEQUFRLENBQUMsS0FBRCxDQURSO0FBQUEsTUFDckJDLE9BRHFCO0FBQUEsTUFDWkMsUUFEWTs7QUFFNUIsTUFBTUMsVUFBVSxHQUFHSixLQUFLLENBQUNJLFVBQXpCO0FBQ0EsTUFBSUMsSUFBSSxHQUFHLEVBQVg7QUFDQSxNQUFJQyxVQUFVLEdBQUcsRUFBakI7O0FBRUEsTUFBSUMsdURBQUssQ0FBQ0MsZUFBTixFQUFKLEVBQTZCO0FBQzNCO0FBQ0FILFFBQUksR0FDSjtBQUNFQSxVQUFJLEVBQUVJLGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLENBRFI7QUFFRUosZ0JBQVUsRUFBRUssSUFBSSxDQUFDQyxLQUFMLENBQVdILGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRyxTQUExQixDQUFvQyxDQUFwQyxFQUF1Q0osZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJJLE1BQTFCLEdBQWlDLENBQXhFLENBQVg7QUFGZCxLQURBO0FBS0Q7O0FBRURSLFlBQVUsR0FBR0QsSUFBSSxDQUFDQyxVQUFsQjs7QUFFQSxNQUFNUyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLFFBQUlSLHVEQUFLLENBQUNDLGVBQU4sRUFBSixFQUE2QjtBQUMzQkwsY0FBUSxDQUFDLENBQUNELE9BQUYsQ0FBUjs7QUFDQSxVQUFJQSxPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDcEJJLGtCQUFVLENBQUNGLFVBQUQsQ0FBVixHQUF5QixLQUF6QjtBQUNBWSx5RUFBZ0IsQ0FBQ1gsSUFBRCxDQUFoQjtBQUNBRSwrREFBSyxDQUFDVSxjQUFOO0FBQ0FaLFlBQUksR0FDSjtBQUNFQSxjQUFJLEVBQUVJLGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLENBRFI7QUFFRUosb0JBQVUsRUFBRUssSUFBSSxDQUFDQyxLQUFMLENBQVdILGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRyxTQUExQixDQUFvQyxDQUFwQyxFQUF1Q0osZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJJLE1BQTFCLEdBQWlDLENBQXhFLENBQVg7QUFGZCxTQURBO0FBS0Q7O0FBQ0QsVUFBSVosT0FBTyxLQUFLLEtBQWhCLEVBQXVCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUksa0JBQVUsQ0FBQ0YsVUFBRCxDQUFWLEdBQXlCLElBQXpCO0FBQ0FZLHlFQUFnQixDQUFDWCxJQUFELENBQWhCO0FBQ0FFLCtEQUFLLENBQUNVLGNBQU47QUFDQVosWUFBSSxHQUNKO0FBQ0VBLGNBQUksRUFBRUksZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosQ0FEUjtBQUVFSixvQkFBVSxFQUFFSyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJHLFNBQTFCLENBQW9DLENBQXBDLEVBQXVDSixnREFBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkksTUFBMUIsR0FBaUMsQ0FBeEUsQ0FBWDtBQUZkLFNBREE7QUFLRDtBQUNGLEtBM0JELE1BMkJPO0FBQ0xQLDZEQUFLLENBQUNXLEtBQU47QUFDRDtBQUNGLEdBL0JEOztBQWlDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSVosdURBQUssQ0FBQ0MsZUFBTixFQUFKLEVBQTZCO0FBQzNCLFVBQUlGLFVBQVUsQ0FBQ0YsVUFBRCxDQUFWLEtBQTJCLElBQS9CLEVBQXFDO0FBQ25DRCxnQkFBUSxDQUFDLElBQUQsQ0FBUjtBQUNEO0FBQ0Y7QUFDRixHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUEsU0FDRSxtRUFDRTtBQUFBLHdDQUFlLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJSSx1REFBSyxDQUFDQyxlQUFOLE1BQ0EsTUFBQyw4Q0FBRDtBQUFPLFdBQU8sRUFBRU4sT0FBaEI7QUFBeUIsV0FBTyxFQUFFO0FBQUEsYUFBTWEsVUFBVSxFQUFoQjtBQUFBLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUlJUix1REFBSyxDQUFDQyxlQUFOLE9BQTRCLEtBQTVCLElBQ0E7QUFBSyxPQUFHLEVBQUMsOEVBQVQ7QUFBOEcsV0FBTyxFQUFFO0FBQUEsYUFBTU8sVUFBVSxFQUFoQjtBQUFBLEtBQXZIO0FBQTJJLE9BQUcsRUFBQyxZQUEvSTtBQUFBLHdDQUFrRyxXQUFsRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosQ0FERjtBQUFBO0FBQUE7QUFBQSxxOEhBREY7QUEwQkQsQ0FwRkQ7O0dBQU1oQixVOztLQUFBQSxVO0FBc0ZTQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvZmF2b3VyaXRlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vc2VydmljZXMvYXV0aDAnXG5pbXBvcnQgeyB1cGRhdGVGYXZvdXJpdGVzIH0gZnJvbSAnLi4vYWN0aW9ucydcbmltcG9ydCBIZWFydCBmcm9tICcuL2hlYXJ0J1xuIFxuY29uc3QgRmF2b3VyaXRlcyA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbaXNDbGljaywgc2V0Q2xpY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBhY3Rpdml0eUlkID0gcHJvcHMuYWN0aXZpdHlJZFxuICBsZXQgdXNlciA9IHt9XG4gIGxldCBmYXZvdXJpdGVzID0ge31cblxuICBpZiAoYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAvLyBkbyBJIG5lZWQgdG8gcmVmcmVzaCB0aGlzIHRvIHJlZmxlY3QgdGhlIGNvb2tpZSBhZnRlciBhbnkgdXBhZGF0ZXM/IHNob3VsZG4ndCB1c2VyIHVzZSB1c2VTdGF0ZT9cbiAgICB1c2VyID0gXG4gICAge1xuICAgICAgdXNlcjogQ29va2llcy5nZXQoJ3N1YicpLCBcbiAgICAgIGZhdm91cml0ZXM6IEpTT04ucGFyc2UoQ29va2llcy5nZXQoJ2Zhdm91cml0ZXMnKS5zdWJzdHJpbmcoMSwgQ29va2llcy5nZXQoJ2Zhdm91cml0ZXMnKS5sZW5ndGgtMSkpXG4gICAgfVxuICB9XG5cbiAgZmF2b3VyaXRlcyA9IHVzZXIuZmF2b3VyaXRlc1xuXG4gIGNvbnN0IGNsaWNrSGVhcnQgPSAoKSA9PiB7XG4gICAgaWYgKGF1dGgwLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgICBzZXRDbGljayghaXNDbGljaylcbiAgICAgIGlmIChpc0NsaWNrID09PSB0cnVlKSB7XG4gICAgICAgIGZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPSBmYWxzZVxuICAgICAgICB1cGRhdGVGYXZvdXJpdGVzKHVzZXIpXG4gICAgICAgIGF1dGgwLnNldEZhdmVzQ29va2llKClcbiAgICAgICAgdXNlciA9IFxuICAgICAgICB7XG4gICAgICAgICAgdXNlcjogQ29va2llcy5nZXQoJ3N1YicpLCBcbiAgICAgICAgICBmYXZvdXJpdGVzOiBKU09OLnBhcnNlKENvb2tpZXMuZ2V0KCdmYXZvdXJpdGVzJykuc3Vic3RyaW5nKDEsIENvb2tpZXMuZ2V0KCdmYXZvdXJpdGVzJykubGVuZ3RoLTEpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXNDbGljayA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gaWYgKGZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPT09IGZhbHNlKSB7XG4gICAgICAgIC8vICAgZmF2b3VyaXRlc1thY3Rpdml0eUlkXSA9IHRydWVcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICB1c2VyLmZhdm91cml0ZXNbMF0ucHVzaCh7YWN0aXZpdHlJZDogdHJ1ZX0pO1xuICAgICAgICAvLyB9XG4gICAgICAgIGZhdm91cml0ZXNbYWN0aXZpdHlJZF0gPSB0cnVlXG4gICAgICAgIHVwZGF0ZUZhdm91cml0ZXModXNlcilcbiAgICAgICAgYXV0aDAuc2V0RmF2ZXNDb29raWUoKVxuICAgICAgICB1c2VyID0gXG4gICAgICAgIHtcbiAgICAgICAgICB1c2VyOiBDb29raWVzLmdldCgnc3ViJyksIFxuICAgICAgICAgIGZhdm91cml0ZXM6IEpTT04ucGFyc2UoQ29va2llcy5nZXQoJ2Zhdm91cml0ZXMnKS5zdWJzdHJpbmcoMSwgQ29va2llcy5nZXQoJ2Zhdm91cml0ZXMnKS5sZW5ndGgtMSkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXV0aDAubG9naW4oKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGF1dGgwLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgICBpZiAoZmF2b3VyaXRlc1thY3Rpdml0eUlkXSA9PT0gdHJ1ZSkge1xuICAgICAgICBzZXRDbGljayh0cnVlKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFydFwiPlxuICAgICAgICB7IGF1dGgwLmlzQXV0aGVudGljYXRlZCgpICYmXG4gICAgICAgICAgPEhlYXJ0IGlzQ2xpY2s9e2lzQ2xpY2t9IG9uQ2xpY2s9eygpID0+IGNsaWNrSGVhcnQoKX0gLz5cbiAgICAgICAgfVxuICAgICAgICB7IGF1dGgwLmlzQXV0aGVudGljYXRlZCgpID09PSBmYWxzZSAmJlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vamFrZXBlZy9pbWFnZS91cGxvYWQvdjE2MDY3NDM4NzIvaGVhcnRfb3pwcWphLnBuZ1wiIGNsYXNzTmFtZT1cImhlYXJ0LWltZ1wiIG9uQ2xpY2s9eygpID0+IGNsaWNrSGVhcnQoKX0gYWx0PVwiaGVhcnQgaWNvblwiIC8+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oZWFydCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgICAgICAgfSBcblxuICAgICAgICAuaGVhcnQtaW1nIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGYXZvdXJpdGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/favourites.js\n");

/***/ })

})