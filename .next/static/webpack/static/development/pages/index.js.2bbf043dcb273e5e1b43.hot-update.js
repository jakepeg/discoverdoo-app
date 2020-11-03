webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hero */ \"./components/hero.js\");\n/* harmony import */ var _components_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/filter */ \"./components/filter.js\");\n/* harmony import */ var _components_activityList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/activityList */ \"./components/activityList.js\");\n/* harmony import */ var _components_categoryButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/categoryButtons */ \"./components/categoryButtons.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Documents/discoverdoo-app/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar Home = function Home(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('All activities'),\n      filter = _useState[0],\n      setFilter = _useState[1];\n\n  var changeCategory = function changeCategory(category) {\n    setFilter(category);\n  };\n\n  var filterActivities = function filterActivities(activities) {\n    if (filter === 'All activities') {\n      return activities;\n    }\n\n    return activities.filter(function (a) {\n      console.log(filter);\n      return a.category && a.category.includes(filter);\n    });\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \"DiscoverDoo fun finder\"), __jsx(\"meta\", {\n    name: \"title\",\n    content: \"DiscoverDoo fun finder\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  })), __jsx(_components_hero__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }), __jsx(_components_categoryButtons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"contain home-page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"rowz\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }), __jsx(_components_activityList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    activities: filterActivities(props.activities) || [],\n    title: \"Top Pick\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(Home, \"hh7zUxb3C0vkEsfMiM11l/nZd6k=\");\n\n_c = Home;\n// export async function getServerSideProps() {\n//   const activities = await getActivities()\n//   const categories = await getCategories()\n//   console.log(\"SSR (I think!)\")\n//   return {\n//     props: {activities, categories}\n//   }\n// }\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsInVzZVN0YXRlIiwiZmlsdGVyIiwic2V0RmlsdGVyIiwiY2hhbmdlQ2F0ZWdvcnkiLCJjYXRlZ29yeSIsImZpbHRlckFjdGl2aXRpZXMiLCJhY3Rpdml0aWVzIiwiYSIsImNvbnNvbGUiLCJsb2ciLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUVRQyxzREFBUSxDQUFDLGdCQUFELENBRmhCO0FBQUEsTUFFZEMsTUFGYztBQUFBLE1BRU5DLFNBRk07O0FBSXRCLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUMsUUFBUSxFQUFJO0FBQ2pDRixhQUFTLENBQUNFLFFBQUQsQ0FBVDtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBQyxVQUFVLEVBQUk7QUFDckMsUUFBSUwsTUFBTSxLQUFLLGdCQUFmLEVBQWlDO0FBQy9CLGFBQU9LLFVBQVA7QUFDRDs7QUFDRCxXQUFPQSxVQUFVLENBQUNMLE1BQVgsQ0FBa0IsVUFBQ00sQ0FBRCxFQUFPO0FBQzlCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWVIsTUFBWjtBQUNBLGFBQU9NLENBQUMsQ0FBQ0gsUUFBRixJQUFjRyxDQUFDLENBQUNILFFBQUYsQ0FBV00sUUFBWCxDQUFvQlQsTUFBcEIsQ0FBckI7QUFDRCxLQUhNLENBQVA7QUFJRCxHQVJEOztBQVVBLFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFERixFQUVFO0FBQU0sUUFBSSxFQUFDLE9BQVg7QUFBbUIsV0FBTyxFQUFDLHdCQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUUsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFPRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFRRSxNQUFDLGdFQUFEO0FBQ0EsY0FBVSxFQUFFSSxnQkFBZ0IsQ0FBQ04sS0FBSyxDQUFDTyxVQUFQLENBQWhCLElBQXNDLEVBRGxEO0FBRUEsU0FBSyxFQUFDLFVBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBUEYsQ0FERjtBQXVCRCxDQXpDRDs7R0FBTVIsSTs7S0FBQUEsSTtBQW9ETjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL2hlcm8nXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZmlsdGVyJ1xuaW1wb3J0IEFjdGl2aXR5TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2FjdGl2aXR5TGlzdCdcbmltcG9ydCB7IGdldEFjdGl2aXRpZXMsIGdldENhdGVnb3JpZXMgfSBmcm9tICcuLi9hY3Rpb25zJ1xuaW1wb3J0IENhdGVnb3J5QnV0dG9ucyBmcm9tICcuLi9jb21wb25lbnRzL2NhdGVnb3J5QnV0dG9ucydcblxuY29uc3QgSG9tZSA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFsgZmlsdGVyLCBzZXRGaWx0ZXIgXSA9IHVzZVN0YXRlKCdBbGwgYWN0aXZpdGllcycpXG5cbiAgY29uc3QgY2hhbmdlQ2F0ZWdvcnkgPSBjYXRlZ29yeSA9PiB7XG4gICAgc2V0RmlsdGVyKGNhdGVnb3J5KVxuICB9XG5cbiAgY29uc3QgZmlsdGVyQWN0aXZpdGllcyA9IGFjdGl2aXRpZXMgPT4ge1xuICAgIGlmIChmaWx0ZXIgPT09ICdBbGwgYWN0aXZpdGllcycpIHtcbiAgICAgIHJldHVybiBhY3Rpdml0aWVzXG4gICAgfVxuICAgIHJldHVybiBhY3Rpdml0aWVzLmZpbHRlcigoYSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZmlsdGVyKVxuICAgICAgcmV0dXJuIGEuY2F0ZWdvcnkgJiYgYS5jYXRlZ29yeS5pbmNsdWRlcyhmaWx0ZXIpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RGlzY292ZXJEb28gZnVuIGZpbmRlcjwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aXRsZVwiIGNvbnRlbnQ9XCJEaXNjb3ZlckRvbyBmdW4gZmluZGVyXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZXJvIC8+XG4gICAgICA8Q2F0ZWdvcnlCdXR0b25zIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW4gaG9tZS1wYWdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93elwiPlxuICAgICAgICAgICAgey8qIDxGaWx0ZXIgXG4gICAgICAgICAgICAgIGNoYW5nZUNhdGVnb3J5PXtjaGFuZ2VDYXRlZ29yeX1cbiAgICAgICAgICAgICAgYWN0aXZlQ2F0ZWdvcnk9e2ZpbHRlcn1cbiAgICAgICAgICAgICAgY2F0ZWdvcmllcz17cHJvcHMuY2F0ZWdvcmllc31cbiAgICAgICAgICAgIC8+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEFjdGl2aXR5TGlzdCBcbiAgICAgICAgYWN0aXZpdGllcz17ZmlsdGVyQWN0aXZpdGllcyhwcm9wcy5hY3Rpdml0aWVzKSB8fCBbXX0gXG4gICAgICAgIHRpdGxlPVwiVG9wIFBpY2tcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBhY3Rpdml0aWVzID0gYXdhaXQgZ2V0QWN0aXZpdGllcygpXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBnZXRDYXRlZ29yaWVzKClcbiAgY29uc29sZS5sb2coXCJTU0cgKEkgdGhpbmshKVwiKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7YWN0aXZpdGllcywgY2F0ZWdvcmllc31cbiAgfVxufVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuLy8gICBjb25zdCBhY3Rpdml0aWVzID0gYXdhaXQgZ2V0QWN0aXZpdGllcygpXG4vLyAgIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBnZXRDYXRlZ29yaWVzKClcbi8vICAgY29uc29sZS5sb2coXCJTU1IgKEkgdGhpbmshKVwiKVxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7YWN0aXZpdGllcywgY2F0ZWdvcmllc31cbi8vICAgfVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})