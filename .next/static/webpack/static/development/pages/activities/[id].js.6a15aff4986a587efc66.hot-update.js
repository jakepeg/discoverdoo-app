webpackHotUpdate("static/development/pages/activities/[id].js",{

/***/ "./pages/activities/[id]/index.js":
/*!****************************************!*\
  !*** ./pages/activities/[id]/index.js ***!
  \****************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_activityList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/activityList */ \"./components/activityList.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Documents/discoverdoo-app/pages/activities/[id]/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar CategoryPage = function CategoryPage(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var id = router.query.id;\n  var cat = id;\n  var activities = props.activities;\n  console.log(activities);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"contain top-space\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 15\n    }\n  }, \"Category = \", cat), __jsx(_components_activityList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    activities: props.activities || [],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 15\n    }\n  })));\n}; // export async function getServerSideProps({ category }) {\n//   const activities = await getActivitiesByCategory(\"Cooking\")\n//   console.log(\"SSR (I think!)\")\n//   return {\n//     props: {activities}\n//   }\n// }\n// export async function getServerSideProps() {\n//   const activities = await getActivities()\n//   return {\n//     props: {activities}\n//   }\n// }\n\n\n_s(CategoryPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = CategoryPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"CategoryPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hY3Rpdml0aWVzLy9pbmRleC5qcz85MzdlIl0sIm5hbWVzIjpbIkNhdGVnb3J5UGFnZSIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsImNhdCIsImFjdGl2aXRpZXMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDOUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUQ4QixNQUV0QkMsRUFGc0IsR0FFZkYsTUFBTSxDQUFDRyxLQUZRLENBRXRCRCxFQUZzQjtBQUc5QixNQUFNRSxHQUFHLEdBQUdGLEVBQVo7QUFIOEIsTUFJdEJHLFVBSnNCLEdBSVBOLEtBSk8sQ0FJdEJNLFVBSnNCO0FBSzlCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsVUFBWjtBQUVBLFNBQ0UsbUVBRUU7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWdCRCxHQUFoQixDQUZSLEVBR1EsTUFBQyxnRUFBRDtBQUFjLGNBQVUsRUFBRUwsS0FBSyxDQUFDTSxVQUFOLElBQW9CLEVBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIUixDQUZGLENBREY7QUFVRCxDQWpCRCxDLENBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0FsQ01QLFk7VUFDV0cscUQ7OztLQURYSCxZOztBQTZDU0EsMkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9hY3Rpdml0aWVzL1tpZF0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IGdldEFjdGl2aXRpZXNCeUNhdGVnb3J5IH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucydcbmltcG9ydCBBY3Rpdml0eUxpc3QgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9hY3Rpdml0eUxpc3QnXG5cbmNvbnN0IENhdGVnb3J5UGFnZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcbiAgY29uc3QgY2F0ID0gaWRcbiAgY29uc3QgeyBhY3Rpdml0aWVzIH0gPSBwcm9wc1xuICBjb25zb2xlLmxvZyhhY3Rpdml0aWVzKVxuXG4gIHJldHVybiAoXG4gICAgPD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluIHRvcC1zcGFjZVwiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgPGgxPkNhdGVnb3J5ID0ge2NhdH08L2gxPlxuICAgICAgICAgICAgICA8QWN0aXZpdHlMaXN0IGFjdGl2aXRpZXM9e3Byb3BzLmFjdGl2aXRpZXMgfHwgW119IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgY2F0ZWdvcnkgfSkge1xuLy8gICBjb25zdCBhY3Rpdml0aWVzID0gYXdhaXQgZ2V0QWN0aXZpdGllc0J5Q2F0ZWdvcnkoXCJDb29raW5nXCIpXG4vLyAgIGNvbnNvbGUubG9nKFwiU1NSIChJIHRoaW5rISlcIilcbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge2FjdGl2aXRpZXN9XG4vLyAgIH1cbi8vIH1cblxuXG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4vLyAgIGNvbnN0IGFjdGl2aXRpZXMgPSBhd2FpdCBnZXRBY3Rpdml0aWVzKClcbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge2FjdGl2aXRpZXN9XG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5IH0pIHtcbiAgY29uc3QgYWN0aXZpdGllcyA9IGF3YWl0IGdldEFjdGl2aXRpZXNCeUNhdGVnb3J5KHF1ZXJ5LmlkKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7YWN0aXZpdGllc31cbiAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/activities/[id]/index.js\n");

/***/ })

})