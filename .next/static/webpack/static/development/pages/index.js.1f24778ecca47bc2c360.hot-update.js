webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hero */ \"./components/hero.js\");\n/* harmony import */ var _components_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/filter */ \"./components/filter.js\");\n/* harmony import */ var _components_activityList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/activityList */ \"./components/activityList.js\");\n/* harmony import */ var _components_categoryButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/categoryButtons */ \"./components/categoryButtons.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Documents/discoverdoo-app/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar Home = function Home(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('All activities'),\n      filter = _useState[0],\n      setFilter = _useState[1];\n\n  var changeCategory = function changeCategory(category) {\n    setFilter(category);\n  };\n\n  var filterActivities = function filterActivities(activities) {\n    if (filter === 'All activities') {\n      return activities;\n    }\n\n    return activities.filter(function (a) {\n      return a.category && a.category.includes(filter);\n    });\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, \"DiscoverDoo fun finder\"), __jsx(\"meta\", {\n    name: \"title\",\n    content: \"DiscoverDoo fun finder\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  })), __jsx(_components_hero__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }), __jsx(_components_categoryButtons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"contain home-page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"rowz\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }), __jsx(_components_activityList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    activities: filterActivities(props.activities) || [],\n    title: \"Featured\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(Home, \"hh7zUxb3C0vkEsfMiM11l/nZd6k=\");\n\n_c = Home;\n// export async function getServerSideProps() {\n//   const activities = await getActivities()\n//   const categories = await getCategories()\n//   console.log(\"SSR (I think!)\")\n//   return {\n//     props: {activities, categories}\n//   }\n// }\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsInVzZVN0YXRlIiwiZmlsdGVyIiwic2V0RmlsdGVyIiwiY2hhbmdlQ2F0ZWdvcnkiLCJjYXRlZ29yeSIsImZpbHRlckFjdGl2aXRpZXMiLCJhY3Rpdml0aWVzIiwiYSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBRVFDLHNEQUFRLENBQUMsZ0JBQUQsQ0FGaEI7QUFBQSxNQUVkQyxNQUZjO0FBQUEsTUFFTkMsU0FGTTs7QUFJdEIsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxRQUFRLEVBQUk7QUFDakNGLGFBQVMsQ0FBQ0UsUUFBRCxDQUFUO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFDLFVBQVUsRUFBSTtBQUNyQyxRQUFJTCxNQUFNLEtBQUssZ0JBQWYsRUFBaUM7QUFDL0IsYUFBT0ssVUFBUDtBQUNEOztBQUNELFdBQU9BLFVBQVUsQ0FBQ0wsTUFBWCxDQUFrQixVQUFDTSxDQUFELEVBQU87QUFDOUIsYUFBT0EsQ0FBQyxDQUFDSCxRQUFGLElBQWNHLENBQUMsQ0FBQ0gsUUFBRixDQUFXSSxRQUFYLENBQW9CUCxNQUFwQixDQUFyQjtBQUNELEtBRk0sQ0FBUDtBQUdELEdBUEQ7O0FBU0EsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURGLEVBRUU7QUFBTSxRQUFJLEVBQUMsT0FBWDtBQUFtQixXQUFPLEVBQUMsd0JBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0UsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQU9FO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVFFLE1BQUMsZ0VBQUQ7QUFDQSxjQUFVLEVBQUVJLGdCQUFnQixDQUFDTixLQUFLLENBQUNPLFVBQVAsQ0FBaEIsSUFBc0MsRUFEbEQ7QUFFQSxTQUFLLEVBQUMsVUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FQRixDQURGO0FBdUJELENBeENEOztHQUFNUixJOztLQUFBQSxJO0FBbUROO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWVBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBIZXJvIGZyb20gJy4uL2NvbXBvbmVudHMvaGVybydcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9maWx0ZXInXG5pbXBvcnQgQWN0aXZpdHlMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvYWN0aXZpdHlMaXN0J1xuaW1wb3J0IHsgZ2V0QWN0aXZpdGllcywgZ2V0Q2F0ZWdvcmllcyB9IGZyb20gJy4uL2FjdGlvbnMnXG5pbXBvcnQgQ2F0ZWdvcnlCdXR0b25zIGZyb20gJy4uL2NvbXBvbmVudHMvY2F0ZWdvcnlCdXR0b25zJ1xuXG5jb25zdCBIb21lID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgWyBmaWx0ZXIsIHNldEZpbHRlciBdID0gdXNlU3RhdGUoJ0FsbCBhY3Rpdml0aWVzJylcblxuICBjb25zdCBjaGFuZ2VDYXRlZ29yeSA9IGNhdGVnb3J5ID0+IHtcbiAgICBzZXRGaWx0ZXIoY2F0ZWdvcnkpXG4gIH1cblxuICBjb25zdCBmaWx0ZXJBY3Rpdml0aWVzID0gYWN0aXZpdGllcyA9PiB7XG4gICAgaWYgKGZpbHRlciA9PT0gJ0FsbCBhY3Rpdml0aWVzJykge1xuICAgICAgcmV0dXJuIGFjdGl2aXRpZXNcbiAgICB9XG4gICAgcmV0dXJuIGFjdGl2aXRpZXMuZmlsdGVyKChhKSA9PiB7XG4gICAgICByZXR1cm4gYS5jYXRlZ29yeSAmJiBhLmNhdGVnb3J5LmluY2x1ZGVzKGZpbHRlcilcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5EaXNjb3ZlckRvbyBmdW4gZmluZGVyPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRpdGxlXCIgY29udGVudD1cIkRpc2NvdmVyRG9vIGZ1biBmaW5kZXJcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEhlcm8gLz5cbiAgICAgIDxDYXRlZ29yeUJ1dHRvbnMgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbiBob21lLXBhZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3d6XCI+XG4gICAgICAgICAgICB7LyogPEZpbHRlciBcbiAgICAgICAgICAgICAgY2hhbmdlQ2F0ZWdvcnk9e2NoYW5nZUNhdGVnb3J5fVxuICAgICAgICAgICAgICBhY3RpdmVDYXRlZ29yeT17ZmlsdGVyfVxuICAgICAgICAgICAgICBjYXRlZ29yaWVzPXtwcm9wcy5jYXRlZ29yaWVzfVxuICAgICAgICAgICAgLz4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QWN0aXZpdHlMaXN0IFxuICAgICAgICBhY3Rpdml0aWVzPXtmaWx0ZXJBY3Rpdml0aWVzKHByb3BzLmFjdGl2aXRpZXMpIHx8IFtdfSBcbiAgICAgICAgdGl0bGU9XCJGZWF0dXJlZFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGFjdGl2aXRpZXMgPSBhd2FpdCBnZXRBY3Rpdml0aWVzKClcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGdldENhdGVnb3JpZXMoKVxuICBjb25zb2xlLmxvZyhcIlNTRyAoSSB0aGluayEpXCIpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHthY3Rpdml0aWVzLCBjYXRlZ29yaWVzfVxuICB9XG59XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4vLyAgIGNvbnN0IGFjdGl2aXRpZXMgPSBhd2FpdCBnZXRBY3Rpdml0aWVzKClcbi8vICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGdldENhdGVnb3JpZXMoKVxuLy8gICBjb25zb2xlLmxvZyhcIlNTUiAoSSB0aGluayEpXCIpXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHthY3Rpdml0aWVzLCBjYXRlZ29yaWVzfVxuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})